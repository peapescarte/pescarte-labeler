import { useState } from 'react';
import { Edit, X } from 'lucide-react';
import { useContextLabeler } from '../../../../providers/LabelerProvider';
import { LabelEditable } from '../LabelEditable';
import { StyledButton, StyledListItem, StyledListItemTools } from './styles';

type LabelerListItem = {
  children: string;
  onRemoveCallback: () => void;
};

export const LabelerListItem = ({ children, onRemoveCallback }: LabelerListItem) => {
  const [isEditmode, SetIsEditMode] = useState(false);

  const handleEditClick = () => {
    SetIsEditMode(!isEditmode);
  };

  const handleEditReturn = (newLabel: string) => {
    SetIsEditMode(false);
    if (children === newLabel) return;

    if (newLabel === '') {
      onRemoveCallback();
      return;
    }

    console.log(newLabel);
  };

  return (
    <StyledListItem>
      <LabelEditable
        editMode={isEditmode}
        label={children}
        onChangeCallback={(newLabel) => handleEditReturn(newLabel)}
      />
      <StyledListItemTools>
        <StyledButton onClick={handleEditClick}>
          <Edit aria-label="clique para editar" strokeWidth="2" />
        </StyledButton>
        <StyledButton onClick={onRemoveCallback}>
          <X aria-label="clique para remover" strokeWidth="2" />
        </StyledButton>
      </StyledListItemTools>
    </StyledListItem>
  );
};
