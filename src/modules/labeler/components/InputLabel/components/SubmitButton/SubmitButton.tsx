import React from 'react';
import PlusIcon from '../../../../../../assets/icons/plus-solid.svg';
import { StyledIcon, StyledInputLabelButton } from './styles';

export type SubmitButtonTypes = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SubmitButton: React.FC<SubmitButtonTypes> = (props: SubmitButtonTypes) => {
  return (
    <StyledInputLabelButton {...props}>
      <StyledIcon src={PlusIcon} alt="" />
    </StyledInputLabelButton>
  );
};
