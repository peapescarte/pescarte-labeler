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
import { useNavigate } from 'react-router-dom';
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
  activatedMediaIndex: number | undefined;
  haveChanges: boolean;
  addNewLabel: (tag: Omit<Tag, 'id'>) => Tag | undefined;
  updateNotes: (annotations: string) => void;
  updateAuthor: (author: Author) => void;
  goToNextMedia: () => void;
  goToPrevMedia: () => void;
  removeLabel: (tagToRemove: Tag) => void;
  saveMedia: () => void;
}

const LabelerContext = createContext<LabelerContextProps | undefined>(undefined);

/**
 * Provedor de Contexto das funcionalidades do labeler
 * Disponibiliza para aplicação funcionalidades referentes ao labeler como:
 * Adicionar/Atualizar/Remover tags, Atualizar autor, Atualizar descrição e de controle de qual midia está sendo editada.
 *
 */
export function LabelerProvider({ children, initialMediaId }: LabelerProviderProps): JSX.Element {
  const { medias, updateMedia, getMediaById } = useContextLabelerData();
  const [activatedMedia, setActivatedMedia] = useState<Media>();
  const [newTags, setNewTags] = useState<Tag[]>([]);
  const [removedTags, setRemovedTags] = useState<Tag[]>([]);

  const activatedMediaIndex = useMemo(() => {
    const actualIndex = medias.findIndex((media) => media.id === activatedMedia?.id);
    if (actualIndex !== -1) {
      return actualIndex;
    }
  }, [medias, activatedMedia]);

  const navigate = useNavigate();

  const checkMediasEqual = (actual: Media, expected: Media) => {
    if (actual.author.id !== expected.author.id) {
      return false;
    }

    if (actual.observation !== expected.observation) {
      return false;
    }

    if (
      actual.tags.length !== expected.tags.length ||
      !actual.tags.every((tag) =>
        Boolean(expected.tags.find((expectedTag) => tag.id === expectedTag.id)),
      )
    ) {
      return false;
    }

    return true;
  };

  const haveChanges = useMemo(() => {
    if (activatedMedia && activatedMediaIndex !== undefined) {
      return !checkMediasEqual(activatedMedia, medias[activatedMediaIndex]);
    }
    return false;
  }, [activatedMedia, medias, activatedMediaIndex]);

  const addNewLabel = useCallback(
    (tag: Omit<Tag, 'id'>) => {
      if (!activatedMedia) return undefined;

      const repeated = activatedMedia.tags.find(
        (item) => item.label === tag.label && item.categoryId === tag.categoryId,
      );
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

      //remove do array de removidas - caso re-adicione uma tag removida
      // cai no problema de inserir uma tag ja existente na midia no servidor
      // setRemovedTags((removeds) =>
      //   removeds.filter(
      //     (removed) => removed.label !== newTag.label && removed.categoryId === newTag.categoryId,
      //   ),
      // );

      if (
        !newTags.some(
          (newTagPrev) =>
            newTagPrev.label === newTag.label && newTagPrev.categoryId === newTag.categoryId,
        )
      ) {
        setNewTags((prev) => [...prev, newTag]);
      }

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
    (tagToRemove: Tag) => {
      if (!activatedMedia) return;

      setActivatedMedia((current) => {
        if (!current) return current;
        const tagRemoved = current.tags.filter((item) => item.id !== tagToRemove.id);

        return {
          ...current,
          tags: tagRemoved,
        };
      });

      setNewTags((newTagsPrev) => {
        return newTagsPrev.filter(
          (newTag) =>
            newTag.label !== tagToRemove.label && newTag.categoryId === tagToRemove.categoryId,
        );
      });

      if (
        !removedTags.some(
          (tag) => tag.label === tagToRemove.label && tag.categoryId === tagToRemove.categoryId,
        )
      ) {
        setRemovedTags((prev) => [...prev, tagToRemove]);
      }
    },
    [activatedMedia, setActivatedMedia],
  );

  const saveMedia = useCallback(async () => {
    if (!activatedMedia) return;

    if (!haveChanges) return;

    await updateMedia(activatedMedia, newTags, removedTags);
  }, [activatedMedia, updateMedia, medias, newTags, removedTags]);

  const goToNextMedia = useCallback(async () => {
    if (activatedMediaIndex === undefined || medias.length < 0) return;

    const NextIndex = activatedMediaIndex + 1 >= medias.length ? 0 : activatedMediaIndex + 1;

    navigate(`/labeler/edit/${medias[NextIndex].id}`);
  }, [activatedMediaIndex, medias]);

  const goToPrevMedia = useCallback(async () => {
    if (activatedMediaIndex === undefined || medias.length < 0) return;

    const NextIndex = activatedMediaIndex - 1 < 0 ? medias.length - 1 : activatedMediaIndex - 1;

    navigate(`/labeler/edit/${medias[NextIndex].id}`);
  }, [activatedMediaIndex, medias]);

  useEffect(() => {
    const initialize = async () => {
      if (initialMediaId) {
        try {
          const media = await getMediaById(initialMediaId);
          setActivatedMedia(media);
        } catch (error) {
          //console.log(JSON.parse(JSON.stringify(error)));
          toast('Erro ao buscar a mídia solicitada, tente novamente!', {
            type: 'error',
          });
          //to-do: remover medias desse context
          navigate('/labeler/list');
        }
      } else {
        return navigate('/labeler/list');
      }
    };

    initialize();
  }, [initialMediaId]);

  const values = useMemo(
    () => ({
      activatedMedia,
      activatedMediaIndex,
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
      activatedMediaIndex,
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
