import React from 'react';
import { StyledInputLabel } from './styles';

export type InputLabelTypes = React.InputHTMLAttributes<HTMLInputElement> & {
  onChangeCallback: (label: string) => void;
};

export const Input: React.FC<InputLabelTypes> = ({
  onChangeCallback,
  ...props
}: InputLabelTypes) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeCallback(e.target.value);
  };

  return <StyledInputLabel type="text" onChange={(e) => handleOnChange(e)} {...props} />;
};
