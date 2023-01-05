import { useState } from 'react';
import { IconPencil } from '../../../../../../assets/icons/icon-pincel';
import { LabelEditable } from '../LabelEditable';
import { StyledEditButton, StyledListItem } from './styles';

type LabelerListItem = {
  children: string;
};

export const LabelerListItem = ({ children }: LabelerListItem) => {
  const [isEditmode, SetIsEditMode] = useState(false);

  const handleEditClick = () => {
    SetIsEditMode(!isEditmode);
  };

  const handleEditReturn = (newLabel: string) => {
    SetIsEditMode(false);
    if (children === newLabel) return;

    console.log(newLabel);
  };

  return (
    <StyledListItem>
      <LabelEditable
        editMode={isEditmode}
        label={children}
        onChangeCallback={(newLabel) => handleEditReturn(newLabel)}
      />
      <StyledEditButton onClick={handleEditClick}>
        <IconPencil />
      </StyledEditButton>
    </StyledListItem>
  );
};
