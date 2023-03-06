import { useState, useMemo } from 'react';
import { useContextLabeler } from '../../providers/LabelerProvider';
import { DropDown } from '../DropDown';
import {
  MediaDescriptionAutor,
  MediaDescriptionData,
  MediaDescriptionDataText,
  MediaDescriptionGroup,
  MediaDescriptionLabel,
  MediaDescriptionNotes,
  MediaDescriptionNotesWrapper,
  MediaDescriptionWrapper,
} from './styles';

export const LabelerMediaDescription = () => {
  const { activatedMedia, updateNotes } = useContextLabeler();
  const [autor, setAutor] = useState('');
  return (
    <MediaDescriptionWrapper>
      <MediaDescriptionGroup>
        <MediaDescriptionAutor>
          <MediaDescriptionLabel>Autor</MediaDescriptionLabel>
          <DropDown
            onSelectCallback={(option) => setAutor(option.id)}
            options={[
              {
                id: '1',
                name: 'Tester',
              },
            ]}
          />
        </MediaDescriptionAutor>
        <MediaDescriptionData>
          <MediaDescriptionDataText>
            Nome da mídia: {activatedMedia?.filename}
          </MediaDescriptionDataText>
          <MediaDescriptionDataText>Data: {activatedMedia?.filedate}</MediaDescriptionDataText>
        </MediaDescriptionData>
      </MediaDescriptionGroup>
      <MediaDescriptionGroup>
        <MediaDescriptionNotesWrapper>
          <MediaDescriptionLabel>Anotações</MediaDescriptionLabel>
          {activatedMedia ? (
            <MediaDescriptionNotes
              key={activatedMedia.id}
              defaultValue={activatedMedia.observation}
              maxLength={300}
              rows={5}
              onBlur={(text) => updateNotes(activatedMedia?.id, text.currentTarget.value)}
            />
          ) : (
            <div></div>
          )}
        </MediaDescriptionNotesWrapper>
      </MediaDescriptionGroup>
    </MediaDescriptionWrapper>
  );
};
