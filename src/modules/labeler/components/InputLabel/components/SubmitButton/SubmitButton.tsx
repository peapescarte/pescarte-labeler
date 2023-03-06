import React from 'react';
import { PlusCircle } from 'lucide-react';
import { StyledInputLabelButton } from './styles';

export type SubmitButtonTypes = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SubmitButton: React.FC<SubmitButtonTypes> = (props: SubmitButtonTypes) => {
  return (
    <StyledInputLabelButton {...props}>
      <PlusCircle strokeWidth="1.5" />
    </StyledInputLabelButton>
  );
};
