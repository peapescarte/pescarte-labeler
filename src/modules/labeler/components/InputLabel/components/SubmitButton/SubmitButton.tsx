import React from 'react';
import { IconPlus } from '../../../../../../common/icons/icon-plus';
import { StyledIcon, StyledInputLabelButton } from './styles';

export type SubmitButtonTypes = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SubmitButton: React.FC<SubmitButtonTypes> = (props: SubmitButtonTypes) => {
  return (
    <StyledInputLabelButton {...props}>
      <StyledIcon>
        <IconPlus />
      </StyledIcon>
    </StyledInputLabelButton>
  );
};
