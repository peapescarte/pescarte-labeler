import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { usePescarteLabelerService } from '../../../hooks/usePescateLabelerService';
import { TagedMedia } from '../interfaces/labeler';
import { Category, Tag } from '../interfaces/media';

interface LabelerProviderProps {
  children: ReactNode;
}

interface LabelerContextProps {
  tagedMedias: TagedMedia[];
  activatedMedia: TagedMedia | undefined;
  addNewLabel: (tag: Omit<Tag, 'id'>) => void;
  categories: Category[];
}

const LabelerContext = createContext<LabelerContextProps | undefined>(undefined);
const mockMedia: TagedMedia = {
  id: 'a',
  external_id: 'a',
  link: 'a',
  tags: [{ category_id: 'b', id: 'a', label: 'teste1', media_id: 'asd' }],
  type: 'image',
};
export function LabelerProvider({ children }: LabelerProviderProps): JSX.Element {
  const [tagedMedias, setTagedMedias] = useState<TagedMedia[]>([mockMedia]);
  const [activatedMedia, setActivatedMedia] = useState<TagedMedia>(tagedMedias[0]);
  const [categories, setCategories] = useState<Category[]>([]);
  const pescarteService = usePescarteLabelerService();

  const addNewLabel = (tag: Omit<Tag, 'id'>) => {
    if (!activatedMedia) return;

    // chamada backend para adicionar uma nova tag, temporariamente código a baixo
    const newTag: Tag = { ...tag, id: uuidv4() };

    setActivatedMedia({
      ...activatedMedia,
      tags: [...activatedMedia.tags, newTag],
    });
  };

  useEffect(() => {
    pescarteService.getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  const values = useMemo(
    () => ({ tagedMedias, activatedMedia, addNewLabel, categories }),
    [tagedMedias, activatedMedia, addNewLabel, categories],
  );

  return <LabelerContext.Provider value={values}>{children}</LabelerContext.Provider>;
}

export function useContextLabeler() {
  const context = useContext(LabelerContext);

  if (!context) {
    throw new Error('useContextLabeler must be used within a LabelerProvider');
  }
  return context;
}

export default LabelerContext;
