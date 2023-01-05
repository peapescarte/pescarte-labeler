import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { usePescarteLabelerService } from '../hooks/usePescateLabelerService';
import { Category, Media, Tag } from '../interfaces';

interface LabelerDataProviderProps {
  children: ReactNode;
}

interface LabelerDataContextProps {
  categories: Category[];
  medias: Media[];
}

const LabelerDataContext = createContext<LabelerDataContextProps | undefined>(undefined);

export function LabelerDataProvider({ children }: LabelerDataProviderProps): JSX.Element {
  const [categories, setCategories] = useState<Category[]>([]);
  const [medias, setMedias] = useState<Media[]>([]);

  const pescarteService = usePescarteLabelerService();

  useEffect(() => {
    pescarteService.getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
    pescarteService.getMedias().then((mediasFromApi) => {
      setMedias(mediasFromApi);
    });
  }, []);

  const values = useMemo(() => ({ categories, medias }), [categories, medias]);

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
