import React, { useEffect, useState } from 'react';
import { useContextLabelerData } from '../../providers/LabelerDataProvider';
import { useContextLabeler } from '../../providers/LabelerProvider';
import { Input } from './components';
import { InputLabelForm, StyledDropDown, StyledSubmitButton } from './styles';

export const InputLabel: React.FC = () => {
  const [label, setLabel] = useState('');
  const { addNewLabel, activatedMedia } = useContextLabeler();
  const { categories } = useContextLabelerData();
  const [selectedCategoryById, setSelectedCategoryById] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!activatedMedia || !isValidNewLabel(label) || selectedCategoryById === '') return;

    addNewLabel(activatedMedia.id, {
      label,
      category: {
        id: selectedCategoryById,
      },
    });

    setLabel('');
  };

  const isValidNewLabel = (newLabel: string) => {
    if (newLabel === '') return false;

    return true;
  };

  return (
    <InputLabelForm onSubmit={(e) => handleSubmit(e)}>
      <StyledDropDown
        options={categories}
        onSelectCallback={(category) => setSelectedCategoryById(category.id)}
        defaultValue="selecione..."
      />
      <Input value={label} onChangeCallback={(val) => setLabel(val)} placeholder="Label" />
      <StyledSubmitButton type="submit" title="Adicionar nova etiqueta" />
    </InputLabelForm>
  );
};
