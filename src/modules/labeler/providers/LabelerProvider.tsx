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
import { Media, Tag } from '../interfaces';
import { useContextLabelerData } from './LabelerDataProvider';

interface LabelerProviderProps {
  children: ReactNode;
}

interface LabelerContextProps {
  activatedMedia: Media | undefined;
  addNewLabel: (mediaId: string, tag: Omit<Tag, 'id'>) => void;
  updateNotes: (mediaId: string, annotations: string) => void;
  goToNextMedia: () => void;
  goToPrevMedia: () => void;
  removeLabel: (id: string) => void;
  medias: Media[];
}

const LabelerContext = createContext<LabelerContextProps | undefined>(undefined);

export function LabelerProvider({ children }: LabelerProviderProps): JSX.Element {
  const { medias, updateMedia } = useContextLabelerData();
  const [activatedMedia, setActivatedMedia] = useState<Media>();
  const [activatedMediaIndex, setActivatedMediaIndex] = useState(0);

  console.log(activatedMedia);

  const addNewLabel = useCallback(
    (mediaId: string, tag: Omit<Tag, 'id'>) => {
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

  const updateNotes = useCallback(
    (mediaId: string, annotations: string) => {
      if (!activatedMedia) return;

      setActivatedMedia({
        ...activatedMedia,
        observation: annotations,
      });
    },
    [activatedMedia, setActivatedMedia],
  );

  const removeLabel = useCallback(
    (id: string) => {
      if (!activatedMedia) return;

      const tagRemoved = activatedMedia.tags.filter((item) => item.id !== id);

      setActivatedMedia({
        ...activatedMedia,
        tags: tagRemoved,
      });
    },
    [activatedMedia, setActivatedMedia],
  );

  const saveMedia = useCallback(async () => {
    if (!activatedMedia) return;

    await updateMedia(activatedMedia);
  }, [activatedMedia, updateMedia]);

  const goToNextMedia = useCallback(async () => {
    if (!activatedMedia) return;

    await saveMedia();

    const NextIndex = activatedMediaIndex + 1 >= medias.length ? 0 : activatedMediaIndex + 1;

    setActivatedMediaIndex(NextIndex);
  }, [activatedMedia]);

  const goToPrevMedia = useCallback(async () => {
    if (!activatedMedia) return;

    await saveMedia();

    const NextIndex = activatedMediaIndex - 1 < 0 ? medias.length - 1 : activatedMediaIndex - 1;

    setActivatedMediaIndex(NextIndex);
  }, [activatedMedia]);

  useEffect(() => {
    if (!medias.length) return;

    const initialize = async () => {
      setActivatedMedia(medias[activatedMediaIndex]);
    };

    initialize();
  }, [medias, activatedMediaIndex]);

  const values = useMemo(
    () => ({
      medias,
      activatedMedia,
      addNewLabel,
      updateNotes,
      removeLabel,
      goToNextMedia,
      goToPrevMedia,
    }),
    [medias, activatedMedia, addNewLabel, updateNotes, removeLabel, goToNextMedia, goToPrevMedia],
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
