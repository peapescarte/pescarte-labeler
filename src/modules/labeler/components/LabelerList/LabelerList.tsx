import { useEffect, useMemo, useState } from 'react';
import { Tag } from '../../interfaces';
import { useContextLabelerData } from '../../providers/LabelerDataProvider';
import { useContextLabeler } from '../../providers/LabelerProvider';
import { LabelerListItem } from './components/LabelerListItem';
import {
  StyledLabelerList,
  StyledLabelerListBox,
  StyledLabelerListItens,
  StyledSelectCategory,
} from './styles';

export const LabelerList = () => {
  const { activatedMedia, removeLabel } = useContextLabeler();
  const { categories } = useContextLabelerData();
  const [selectedCategory, setSelectedCategory] = useState('');

  const tags = useMemo(
    () => activatedMedia?.tags.filter((tag) => tag.category_id === selectedCategory),
    [activatedMedia, selectedCategory],
  );

  const handleRemoveTag = (tag: Tag) => {
    removeLabel(tag.id);
  };

  useEffect(() => {
    if (!categories.length) return;

    setSelectedCategory(categories[0].id);
  }, [categories]);

  return (
    <StyledLabelerList>
      <StyledLabelerListBox>
        <StyledSelectCategory
          options={categories}
          onSelectCallback={(value) => setSelectedCategory(value)}
        />
        <StyledLabelerListItens>
          {tags?.map((tag) => {
            return (
              <LabelerListItem key={tag.id} onRemoveCallback={() => handleRemoveTag(tag)}>
                {tag.label}
              </LabelerListItem>
            );
          })}
        </StyledLabelerListItens>
      </StyledLabelerListBox>
    </StyledLabelerList>
  );
};
