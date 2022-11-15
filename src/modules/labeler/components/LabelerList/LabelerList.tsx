import { useState } from 'react';
import { useContextLabeler } from '../../providers/LabelerProvider';
import { LabelerListItem } from './components/LabelerListItem';
import {
  StyledLabelerList,
  StyledLabelerListBox,
  StyledLabelerListItens,
  StyledSelectCategory,
} from './styles';

export const LabelerList = () => {
  const { activatedMedia } = useContextLabeler();
  const { categories } = useContextLabeler();
  const [selectedCategory, setSelectedCategory] = useState('');
  return (
    <StyledLabelerList>
      <StyledLabelerListBox>
        <StyledSelectCategory
          options={categories}
          onSelectCallback={(value) => setSelectedCategory(value)}
        />
        <StyledLabelerListItens>
          {activatedMedia?.tags
            .filter((tag) => tag.category_id === selectedCategory)
            .map((tag) => {
              return <LabelerListItem key={tag.id}>{tag.label}</LabelerListItem>;
            })}
        </StyledLabelerListItens>
      </StyledLabelerListBox>
    </StyledLabelerList>
  );
};
