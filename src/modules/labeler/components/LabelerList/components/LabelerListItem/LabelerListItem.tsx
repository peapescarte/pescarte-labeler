import { Edit, X } from 'lucide-react';
import { useState } from 'react';
import { LabelEditable } from '../LabelEditable';
import { StyledButton, StyledListItem, StyledListItemTools } from './styles';

type LabelerListItem = {
  children: string;
  onRemoveCallback: () => void;
  onEditCallback: (newLabel: string) => void;
};

export const LabelerListItem = ({
  children,
  onRemoveCallback,
  onEditCallback,
}: LabelerListItem) => {
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

    onEditCallback(newLabel);
  };

  return (
    <StyledListItem>
      <LabelEditable
        editMode={isEditmode}
        label={children}
        onChangeCallback={(newLabel) => handleEditReturn(newLabel)}
      />
      <StyledListItemTools>
        <StyledButton onClick={handleEditClick} title="clique para editar">
          <Edit aria-label="clique para editar" strokeWidth="2" />
        </StyledButton>
        <StyledButton onClick={onRemoveCallback} title="clique para remover">
          <X aria-label="clique para remover" strokeWidth="2" />
        </StyledButton>
      </StyledListItemTools>
    </StyledListItem>
  );
};
