import React, { useState } from 'react';
import { useContextLabeler } from '../../providers/LabelerProvider';
import { Input, SubmitButton } from './components';
import { InputLabelForm, StyledSelectCategory, StyledSubmitButton } from './styles';

export const InputLabel: React.FC = () => {
  const [label, setLabel] = useState('');
  const { addNewLabel } = useContextLabeler();
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewLabel({ id: label, label, category_id: selectedCategory, media_id: 'a' });
  };

  return (
    <InputLabelForm onSubmit={(e) => handleSubmit(e)}>
      <StyledSelectCategory
        options={[
          { id: 'testeid', name: 'teste' },
          { id: 'teste2id', name: 'teste2' },
        ]}
        onSelectCallback={(value) => setSelectedCategory(value)}
      />
      <Input onChangeCallback={(val) => setLabel(val)} placeholder="Label" />
      <StyledSubmitButton type="submit" />
    </InputLabelForm>
  );
};
