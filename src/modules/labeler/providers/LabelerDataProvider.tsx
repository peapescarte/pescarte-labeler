import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { dateToEN } from '../../../helpers';
import { Category, Media } from '../interfaces';
import { PescarteLabelerService } from '../service/pescarte-labeler-service';

interface LabelerDataProviderProps {
  children: ReactNode;
}

interface LabelerDataContextProps {
  categories: Category[];
  medias: Media[];
  loading: boolean;
  updateMedia: (media: Media) => void;
}

const LabelerDataContext = createContext<LabelerDataContextProps | undefined>(undefined);

export function LabelerDataProvider({ children }: LabelerDataProviderProps): JSX.Element {
  const [categories, setCategories] = useState<Category[]>([]);
  const [medias, setMedias] = useState<Media[]>([]);
  const [loading, setIsLoading] = useState(false);

  const pescarteService = new PescarteLabelerService();

  const sortMediasByDate = (mediasToSort: Media[]) => {
    return mediasToSort.sort((a, b) => {
      if (new Date(dateToEN(a.filedate)) < new Date(dateToEN(b.filedate))) return -1;
      else return 1;
    });
  };

  const updateMedia = async (media: Media) => {
    try {
      const updatedMedia = await pescarteService.updateMedia(media);

      setMedias(
        sortMediasByDate(
          medias.map((item) => {
            if (item.id === updatedMedia.id) return updatedMedia;
            else return item;
          }),
        ),
      );
    } catch {
      console.log('Erro no servidor!');
    }
  };

  const fetchData = async () => {
    pescarteService.getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
    pescarteService
      .getMedias()
      .then((mediasFromApi) => {
        setMedias(sortMediasByDate(mediasFromApi));
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const values = useMemo(
    () => ({ categories, medias, loading, updateMedia }),
    [categories, medias, loading, updateMedia],
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
