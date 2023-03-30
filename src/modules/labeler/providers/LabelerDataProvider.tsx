import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { dateToEN } from '../../../helpers';
import { Category, Media, Tag } from '../interfaces';
import { Author } from '../interfaces/author';
import { UpdateMedia } from '../interfaces/media';
import { PescarteLabelerService } from '../service/pescarte-labeler-service';
interface LabelerDataProviderProps {
  children: ReactNode;
}

interface LabelerDataContextProps {
  categories: Category[];
  medias: Media[];
  authors: Author[];
  fetchLoading: boolean;
  updateLoading: boolean;
  updateMedia: (media: Media) => void;
}

const LabelerDataContext = createContext<LabelerDataContextProps | undefined>(undefined);

export function LabelerDataProvider({ children }: LabelerDataProviderProps): JSX.Element {
  const [categories, setCategories] = useState<Category[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [medias, setMedias] = useState<Media[]>([]);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [updateLoading, setUpdateLoading] = useState(false);

  const pescarteService = new PescarteLabelerService();

  const sortMediasByDate = (mediasToSort: Media[]) => {
    return mediasToSort.sort((a, b) => {
      if (new Date(dateToEN(a.filedate)) < new Date(dateToEN(b.filedate))) return -1;
      else return 1;
    });
  };

  const createUpdateMediaPayload = async (media: Media): Promise<UpdateMedia> => {
    const tags = await createTags(media.tags);

    const toUpdateMedia: UpdateMedia = {
      altText: media.altText || '',
      filedate: media.filedate,
      filename: media.filename,
      id: media.id,
      link: media.link,
      observation: media.observation || '',
      sensible: media.sensible,
      type: media.type,
      tags: tags.map((tag) => tag.id),
      authorId: media.author.id,
    };

    return toUpdateMedia;
  };

  const updateMedia = async (media: Media) => {
    setUpdateLoading(true);

    try {
      const toUpdateMedia = await createUpdateMediaPayload(media);

      const updatedMedia = await pescarteService.updateMedia(toUpdateMedia);

      console.log('server response update media: ', updatedMedia);

      setMedias(
        sortMediasByDate(
          medias.map((item) => {
            if (item.id === updatedMedia.id) return updatedMedia;
            else return item;
          }),
        ),
      );
      toast('Salvo com sucesso !', {
        type: 'success',
      });
    } catch {
      toast('Erro no servidor, tente novamente !', {
        type: 'error',
        hideProgressBar: true,
        autoClose: false,
      });
    } finally {
      setUpdateLoading(false);
    }
  };

  const createTags = async (tags: Tag[]) => {
    const payload = tags.map((tag) => ({ label: tag.label, categoriaId: tag.categoria.id }));
    return pescarteService.createTags(payload);
  };

  const fetchData = async () => {
    pescarteService.getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
    pescarteService.getAuthors().then((authorsFromApi) => {
      setAuthors(authorsFromApi);
    });
    pescarteService
      .getMedias()
      .then((mediasFromApi) => {
        setMedias(sortMediasByDate(mediasFromApi));
      })
      .finally(() => setFetchLoading(false));
  };

  useEffect(() => {
    setFetchLoading(true);
    fetchData();
  }, []);

  const values = useMemo(
    () => ({ categories, authors, medias, fetchLoading, updateLoading, updateMedia }),
    [categories, authors, medias, fetchLoading, updateLoading, updateMedia],
  );

  return <LabelerDataContext.Provider value={values}>{children}</LabelerDataContext.Provider>;
}

export function useContextLabelerData() {
  const context = useContext(LabelerDataContext);

  if (!context) {
    throw new Error('useContextLabelerData must be used within a LabelerDataProvider');
  }
  return context;
}

export default LabelerDataContext;
