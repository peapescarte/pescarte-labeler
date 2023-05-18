import equal from 'deep-equal';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { Media, Tag } from '../interfaces';
import { Author } from '../interfaces/author';
import { useContextLabelerData } from './LabelerDataProvider';
interface LabelerProviderProps {
  initialMediaId?: string;
  children: ReactNode;
}

interface LabelerContextProps {
  activatedMedia: Media | undefined;
  haveChanges: boolean;
  addNewLabel: (tag: Omit<Tag, 'id'>) => Tag | undefined;
  updateNotes: (annotations: string) => void;
  updateAuthor: (author: Author) => void;
  goToNextMedia: () => void;
  goToPrevMedia: () => void;
  removeLabel: (id: string) => void;
  saveMedia: () => void;
}

const LabelerContext = createContext<LabelerContextProps | undefined>(undefined);

export function LabelerProvider({ children }: LabelerProviderProps): JSX.Element {
  const { medias, updateMedia } = useContextLabelerData();
  const [activatedMedia, setActivatedMedia] = useState<Media>();
  const [activatedMediaIndex, setActivatedMediaIndex] = useState(0);

  const haveChanges = useMemo(
    () => !equal(activatedMedia, medias[activatedMediaIndex]),
    [activatedMedia],
  );

  const addNewLabel = useCallback(
    (tag: Omit<Tag, 'id'>) => {
      if (!activatedMedia) return undefined;

      const repeated = activatedMedia.tags.find((item) => item.label === tag.label);
      if (repeated) {
        toast('Tag já inserida.', {
          type: 'warning',
        });
        return undefined;
      }

      const newTag: Tag = { ...tag, id: uuidv4() };

      setActivatedMedia((current) => {
        if (!current) return current;
        return { ...current, tags: [...current.tags, newTag] };
      });

      return newTag;
    },
    [activatedMedia, setActivatedMedia],
  );

  const updateNotes = useCallback(
    (annotations: string) => {
      if (!activatedMedia) return;

      setActivatedMedia((current) => {
        if (!current) return current;
        return {
          ...current,
          observation: annotations,
        };
      });
    },
    [activatedMedia, setActivatedMedia],
  );

  const updateAuthor = useCallback(
    (newAuthor: Author) => {
      if (!activatedMedia) return;

      setActivatedMedia((current) => {
        if (!current) return current;
        return {
          ...current,
          author: newAuthor,
        };
      });
    },
    [activatedMedia, setActivatedMedia],
  );

  const removeLabel = useCallback(
    (id: string) => {
      if (!activatedMedia) return;

      setActivatedMedia((current) => {
        if (!current) return current;
        const tagRemoved = current.tags.filter((item) => item.id !== id);

        return {
          ...current,
          tags: tagRemoved,
        };
      });
    },
    [activatedMedia, setActivatedMedia],
  );

  const saveMedia = useCallback(async () => {
    if (!activatedMedia) return;

    if (!haveChanges) return;

    await updateMedia(activatedMedia);
  }, [activatedMedia, updateMedia, medias]);

  const goToNextMedia = useCallback(async () => {
    if (!activatedMedia) return;

    if (haveChanges) {
      toast('Salve as modificações para continuar.', {
        type: 'warning',
      });
      return;
    }

    const NextIndex = activatedMediaIndex + 1 >= medias.length ? 0 : activatedMediaIndex + 1;

    setActivatedMediaIndex(NextIndex);
  }, [activatedMedia, medias]);

  const goToPrevMedia = useCallback(async () => {
    if (!activatedMedia) return;

    if (haveChanges) {
      toast('Salve as modificações para continuar.', {
        type: 'warning',
      });
      return;
    }

    const NextIndex = activatedMediaIndex - 1 < 0 ? medias.length - 1 : activatedMediaIndex - 1;

    setActivatedMediaIndex(NextIndex);
  }, [activatedMedia, medias]);

  useEffect(() => {
    if (!medias.length) return;

    const initialize = async () => {
      setActivatedMedia(medias[activatedMediaIndex]);
    };

    initialize();
  }, [medias, activatedMediaIndex]);

  const values = useMemo(
    () => ({
      activatedMedia,
      addNewLabel,
      updateNotes,
      removeLabel,
      goToNextMedia,
      goToPrevMedia,
      saveMedia,
      updateAuthor,
      haveChanges,
    }),
    [
      activatedMedia,
      addNewLabel,
      updateNotes,
      removeLabel,
      goToNextMedia,
      goToPrevMedia,
      saveMedia,
      updateAuthor,
      haveChanges,
    ],
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
