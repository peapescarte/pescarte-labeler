import { useState } from 'react';
import LabelerContext, { useContextLabeler } from '../../providers/LabelerProvider';
import { SelectCategory } from '../SelectCategory';
import {
  StyledLabel,
  StyledLabelerList,
  StyledLabelerListBox,
  StyledLabelerListItens,
  StyledSelectCategory,
} from './styles';

export const LabelerList = () => {
  const { activatedMedia } = useContextLabeler();
  const [selectedCategory, setSelectedCategory] = useState('');
  return (
    <StyledLabelerList>
      <StyledLabelerListBox>
        <StyledSelectCategory
          options={[
            { id: 'testeid', name: 'teste' },
            { id: 'teste2id', name: 'teste2' },
          ]}
          onSelectCallback={(value) => setSelectedCategory(value)}
        />
        <StyledLabelerListItens>
          {activatedMedia?.tags
            .filter((tag) => tag.category_id === selectedCategory)
            .map((tag) => {
              return <StyledLabel key={tag.id}>{tag.label}</StyledLabel>;
            })}
        </StyledLabelerListItens>
      </StyledLabelerListBox>
    </StyledLabelerList>
  );
};
