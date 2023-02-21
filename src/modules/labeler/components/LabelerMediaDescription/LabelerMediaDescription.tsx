import { useState } from 'react';
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
  const { activatedMedia } = useContextLabeler();
  const [autor, setAutor] = useState('');
  const [notes, setNotes] = useState('');

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
                name: 'iae pofesô',
              },
            ]}
          />
        </MediaDescriptionAutor>
        <MediaDescriptionData>
          <MediaDescriptionDataText>Nome da mídia: {activatedMedia?.id}</MediaDescriptionDataText>
          <MediaDescriptionDataText>Data: 12/05/2021</MediaDescriptionDataText>
        </MediaDescriptionData>
      </MediaDescriptionGroup>
      <MediaDescriptionGroup>
        <MediaDescriptionNotesWrapper>
          <MediaDescriptionLabel>Anotações</MediaDescriptionLabel>
          <MediaDescriptionNotes
            maxLength={300}
            rows={5}
            onBlur={(text) => setNotes(text.currentTarget.value)}
          />
        </MediaDescriptionNotesWrapper>
      </MediaDescriptionGroup>
    </MediaDescriptionWrapper>
  );
};
