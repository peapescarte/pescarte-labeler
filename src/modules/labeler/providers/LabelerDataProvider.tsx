import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { dateToEN } from '../../../helpers';
import { RemoveTagsPayload, TagPayload } from '../graphql/queries/Tag';
import { Category, Media, Tag } from '../interfaces';
import { Author } from '../interfaces/author';
import { convertMediaObjToPayload } from '../service/helpers';
import { PescarteLabelerService } from '../service/pescarte-labeler-service';
interface LabelerDataProviderProps {
  children: ReactNode;
}

interface LabelerDataContextProps {
  categories: Category[];
  medias: Media[];
  authors: Author[];
  allTags: Tag[];
  fetchLoading: boolean;
  updateLoading: boolean;
  updateMedia: (media: Media, newTags: Tag[], tagsToRemove: Tag[]) => void;
  getMediaById: (id: string) => Promise<Media>;
}

const LabelerDataContext = createContext<LabelerDataContextProps | undefined>(undefined);

/**
 * Provedor de Contexto dos dados do labeler
 * Realiza o uso de service para buscar e disponibilizar os dados através de contexto para aplicação
 *
 */
export function LabelerDataProvider({ children }: LabelerDataProviderProps): JSX.Element {
  const [categories, setCategories] = useState<Category[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [allTags, setAllTags] = useState<Tag[]>([]);
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

  const updateMedia = async (media: Media, newTags: Tag[], tagsToRemove: Tag[]) => {
    setUpdateLoading(true);
    const toastId = toast.loading('Salvando os dados...');

    try {
      // atualizar primeiro as tags para retorno do updateMedia ter as novas etiquetas
      await removeTags(tagsToRemove, media.id);

      const tags = await createTags(newTags);

      // evitar adicionar tag repetida (erro servidor)

      await pescarteService.addMediaTags({
        midiaId: media.id,
        tagsId: tags.map((tag) => tag.id),
      });

      const toUpdateMedia = convertMediaObjToPayload(media);

      const updatedMedia = await pescarteService.updateMedia(toUpdateMedia);

      setMedias(
        medias.map((item) => {
          if (item.id === updatedMedia.id) return { ...updatedMedia, tags: media.tags };
          else return item;
        }),
      );
      toast.update(toastId, {
        render: 'Salvo com sucesso!',
        type: 'success',
        isLoading: false,
        autoClose: 5000,
      });
    } catch {
      toast.update(toastId, {
        render: 'Não foi possivel salvar, tente novamente!',
        type: 'error',
        isLoading: false,
        autoClose: 5000,
      });
    } finally {
      setUpdateLoading(false);
    }
  };

  const createTags = async (tags: Tag[]) => {
    const payload: TagPayload[] = tags.map((tag) => ({
      etiqueta: tag.label,
      categoriaId: tag.categoryId,
    }));
    return pescarteService.createTags(payload);
  };

  const removeTags = async (tags: Tag[], mediaId: string) => {
    if (tags.length === 0) return [];

    const tagsId = tags.map((tag) => tag.id);

    const payload: RemoveTagsPayload = {
      midiaId: mediaId,
      tagsId,
    };

    return pescarteService.removeTags(payload);
  };

  const getMediaById = async (id: string): Promise<Media> => {
    setFetchLoading(true);
    const result = await pescarteService.getMedia(id);
    setFetchLoading(false);
    return result;
  };

  const fetchData = async () => {
    Promise.all([
      pescarteService.getCategories(),
      pescarteService.getAuthors(),
      pescarteService.getTags(),
      pescarteService.getMedias(),
    ])
      .then(([categoriesFromApi, authorsFromApi, tagsFromApi, mediasFromApi]) => {
        setCategories(categoriesFromApi);
        setAuthors(authorsFromApi);
        setAllTags(tagsFromApi);
        setMedias(sortMediasByDate(mediasFromApi));
      })
      .finally(() => setFetchLoading(false));
  };

  useEffect(() => {
    setFetchLoading(true);
    fetchData();
  }, []);

  const values = useMemo(
    () => ({
      categories,
      authors,
      allTags,
      medias,
      fetchLoading,
      updateLoading,
      getMediaById,
      updateMedia,
    }),
    [categories, authors, allTags, medias, fetchLoading, updateLoading, getMediaById, updateMedia],
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
