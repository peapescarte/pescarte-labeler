import React from 'react';
import { StyledIcon, StyledInputLabelButton } from './styles';

export type SubmitButtonTypes = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SubmitButton: React.FC<SubmitButtonTypes> = (props: SubmitButtonTypes) => {
  return (
    <StyledInputLabelButton {...props}>
      <StyledIcon src="/icons/plus-solid.svg" />
    </StyledInputLabelButton>
  );
};
