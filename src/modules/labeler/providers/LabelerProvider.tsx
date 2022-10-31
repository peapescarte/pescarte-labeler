import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { TagedMedia } from '../interfaces/labeler';
import { Tag } from '../interfaces/media';

interface LabelerProviderProps {
  children: ReactNode;
}

interface LabelerContextProps {
  tagedMedias: TagedMedia[];
  activatedMedia: TagedMedia | undefined;
  addNewLabel: (tag: Tag) => void;
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

  const addNewLabel = (tag: Tag) => {
    if (activatedMedia) {
      setActivatedMedia({
        ...activatedMedia,
        tags: [...activatedMedia.tags, tag],
      });
    }
    // chamada backend para adicionar uma nova tag
  };

  const values = useMemo(
    () => ({ tagedMedias, activatedMedia, addNewLabel }),
    [tagedMedias, activatedMedia, addNewLabel],
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
