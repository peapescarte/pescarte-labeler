import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { usePescarteLabelerService } from '../hooks/usePescateLabelerService';
import { Tag, TaggedMedia } from '../interfaces';
import { useContextLabelerData } from './LabelerDataProvider';

interface LabelerProviderProps {
  children: ReactNode;
}

interface LabelerContextProps {
  activatedMedia: TaggedMedia | undefined;
  addNewLabel: (tag: Omit<Tag, 'id'>) => void;
  goToNextMedia: () => void;
  goToPrevMedia: () => void;
  removeLabel: (id: string) => void;
}

const LabelerContext = createContext<LabelerContextProps | undefined>(undefined);

export function LabelerProvider({ children }: LabelerProviderProps): JSX.Element {
  const { medias } = useContextLabelerData();
  const [activatedMedia, setActivatedMedia] = useState<TaggedMedia>();
  const pescarteService = usePescarteLabelerService();

  const addNewLabel = useCallback(
    (tag: Omit<Tag, 'id'>) => {
      if (!activatedMedia) return;

      const repeated = activatedMedia.tags.find((item) => item.label === tag.label);
      if (repeated) {
        alert('label repetida');
        return;
      }

      // chamada backend para adicionar uma nova tag, temporariamente código a baixo
      const newTag: Tag = { ...tag, id: uuidv4() };

      setActivatedMedia({
        ...activatedMedia,
        tags: [...activatedMedia.tags, newTag],
      });
    },
    [activatedMedia, setActivatedMedia],
  );

  const removeLabel = useCallback(
    (id: string) => {
      if (!activatedMedia) return;

      const tagRemoved = activatedMedia.tags.filter((item) => item.id !== id);

      // chamada backend para remover uma tag, temporariamente código a baixo

      setActivatedMedia({
        ...activatedMedia,
        tags: tagRemoved,
      });
    },
    [activatedMedia, setActivatedMedia],
  );

  const goToNextMedia = useCallback(async () => {
    if (!activatedMedia) return;

    const activatedMediaIndex = medias.findIndex((media) => media.id === activatedMedia.id);

    const NextIndex = activatedMediaIndex + 1 >= medias.length ? 0 : activatedMediaIndex + 1;

    const nextMedia = medias[NextIndex];

    const tags = await pescarteService.getMediaTags(nextMedia.id);

    setActivatedMedia({ ...nextMedia, tags });
  }, [activatedMedia]);

  const goToPrevMedia = useCallback(async () => {
    if (!activatedMedia) return;

    const activatedMediaIndex = medias.findIndex((media) => media.id === activatedMedia.id);

    const NextIndex = activatedMediaIndex - 1 < 0 ? medias.length - 1 : activatedMediaIndex - 1;

    const nextMedia = medias[NextIndex];

    const tags = await pescarteService.getMediaTags(nextMedia.id);

    setActivatedMedia({ ...nextMedia, tags });
  }, [activatedMedia]);

  useEffect(() => {
    if (!medias.length) return;

    const initialize = async () => {
      const tags = await pescarteService.getMediaTags(medias[0].id);

      setActivatedMedia({ ...medias[0], tags });
    };

    initialize();
  }, [medias]);

  const values = useMemo(
    () => ({ activatedMedia, addNewLabel, removeLabel, goToNextMedia, goToPrevMedia }),
    [activatedMedia, addNewLabel, removeLabel, goToNextMedia, goToPrevMedia],
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
