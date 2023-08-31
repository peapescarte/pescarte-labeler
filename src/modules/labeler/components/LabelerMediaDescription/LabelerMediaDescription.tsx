import { useMemo } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Author } from '../../interfaces/author';
import { useContextLabelerData } from '../../providers/LabelerDataProvider';
import { useContextLabeler } from '../../providers/LabelerProvider';
import { DropDownSearch } from '../DropDownSearch';
import { option } from '../DropDownSearch/DropDownSearch';
import {
  MediaDescriptionAutor,
  MediaDescriptionDataText,
  MediaDescriptionDataTextHeader,
  MediaDescriptionGroup,
  MediaDescriptionLabel,
  MediaDescriptionNotes,
  MediaDescriptionNotesWrapper,
  MediaDescriptionWrapper,
} from './styles';

/**
 * Componente que exibe toda descrição da midia
 * configura e exibe a data
 * configura e exibe o autor
 * configura e exibe as anotações
 */
export const LabelerMediaDescription = () => {
  const { activatedMedia, updateNotes, updateAuthor } = useContextLabeler();
  const { fetchLoading, authors, updateLoading } = useContextLabelerData();

  const isLoading = useMemo(() => fetchLoading || !activatedMedia, [fetchLoading, activatedMedia]);

  const joinAuthorNames = (author: Author) => [author.firstName, author.lastName].join(' ');

  const autor = useMemo(() => {
    if (!activatedMedia) return '';

    return joinAuthorNames(activatedMedia.author);
  }, [activatedMedia]);

  const options: option[] = useMemo(
    () =>
      authors
        .map((author) => ({ id: author.id, value: joinAuthorNames(author) }))
        .sort((a, b) => {
          if (a.value > b.value) return 1;
          if (a.value < b.value) return -1;

          return 1;
        }),
    [authors],
  );

  const handleAuthorChange = (selected: option) => {
    const selectedAuthor = authors.find((author) => author.id === selected.id);

    if (!selectedAuthor) return;

    updateAuthor(selectedAuthor);
  };

  return (
    <MediaDescriptionWrapper>
      <MediaDescriptionDataText>
        <MediaDescriptionDataTextHeader>Data:</MediaDescriptionDataTextHeader>
        {activatedMedia ? (
          new Date(activatedMedia.filedate).toLocaleDateString()
        ) : (
          <Skeleton width={50} />
        )}
      </MediaDescriptionDataText>
      <MediaDescriptionAutor>
        <MediaDescriptionLabel>Autor: </MediaDescriptionLabel>
        {isLoading ? (
          <Skeleton width={200} height={40} />
        ) : (
          <DropDownSearch
            defaultValue={autor}
            options={options}
            onSelectCallback={handleAuthorChange}
            disabled={updateLoading}
          />
        )}
      </MediaDescriptionAutor>
      <MediaDescriptionGroup>
        <MediaDescriptionNotesWrapper>
          <MediaDescriptionLabel>Anotações</MediaDescriptionLabel>
          {activatedMedia ? (
            <MediaDescriptionNotes
              key={activatedMedia.id}
              defaultValue={activatedMedia.observation}
              maxLength={300}
              rows={5}
              onBlur={(text) => updateNotes(text.currentTarget.value)}
              disabled={updateLoading}
            />
          ) : (
            <Skeleton width="100%" height={70} />
          )}
        </MediaDescriptionNotesWrapper>
      </MediaDescriptionGroup>
    </MediaDescriptionWrapper>
  );
};
