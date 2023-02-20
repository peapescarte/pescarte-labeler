import React, { useEffect, useState } from 'react';
import { useContextLabelerData } from '../../providers/LabelerDataProvider';
import { useContextLabeler } from '../../providers/LabelerProvider';
import { Input } from './components';
import { InputLabelForm, StyledSelectCategory, StyledSubmitButton } from './styles';

export const InputLabel: React.FC = () => {
  const [label, setLabel] = useState('');
  const { addNewLabel, activatedMedia } = useContextLabeler();
  const { categories } = useContextLabelerData();
  const [selectedCategoryById, setSelectedCategoryById] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!activatedMedia || !isValidNewLabel(label)) return;

    addNewLabel({
      label,
      category_id: selectedCategoryById,
      media_id: activatedMedia.id,
    });

    setLabel('');
  };

  const isValidNewLabel = (newLabel: string) => {
    if (newLabel === '') return false;

    return true;
  };

  return (
    <InputLabelForm onSubmit={(e) => handleSubmit(e)}>
      <StyledSelectCategory
        options={categories}
        onSelectCallback={(value) => setSelectedCategoryById(value)}
        isRequired
        defaultValue="selecione..."
      />
      <Input value={label} onChangeCallback={(val) => setLabel(val)} placeholder="Label" />
      <StyledSubmitButton type="submit" />
    </InputLabelForm>
  );
};
