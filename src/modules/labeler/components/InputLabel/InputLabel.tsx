import React, { useState } from 'react';
import { Input } from '../../../../components/Input';
import { normalizeString, sanitizeString } from '../../../../helpers/string';
import { InputLabelForm, StyledSubmitButton } from './styles';

type InputLabelProps = {
  onSubmit: (tag: string) => void;
  disabled?: boolean;
};

export const InputLabel = ({ onSubmit, disabled }: InputLabelProps) => {
  const [label, setLabel] = useState('');

  const handleInputLabel = (value: string) => {
    setLabel(normalizeString(sanitizeString(value)));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidNewLabel(label) || disabled) return;

    onSubmit(label);
    setLabel('');
  };

  const isValidNewLabel = (newLabel: string) => {
    if (newLabel === '') return false;

    return true;
  };

  return (
    <InputLabelForm onSubmit={(e) => handleSubmit(e)}>
      <Input
        maxLength={15}
        value={label}
        onChangeCallback={(val) => handleInputLabel(val)}
        placeholder="Insira uma tag..."
        disabled={disabled}
      />
      <StyledSubmitButton type="submit" title="Adicionar nova etiqueta" disabled={disabled} />
    </InputLabelForm>
  );
};
