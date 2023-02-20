import { useState } from 'react';
import { IconPencil } from '../../../../../../assets/icons/icon-pincel';
import IconPlus from '../../../../../../assets/icons/plus-solid.svg';
import { useContextLabeler } from '../../../../providers/LabelerProvider';
import { LabelEditable } from '../LabelEditable';
import {
  StyledButton,
  StyledIcon,
  StyledIconPlus,
  StyledListItem,
  StyledListItemTools,
} from './styles';

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
          <IconPencil />
        </StyledButton>
        <StyledButton onClick={onRemoveCallback}>
          <StyledIconPlus src={IconPlus} />
        </StyledButton>
      </StyledListItemTools>
    </StyledListItem>
  );
};
