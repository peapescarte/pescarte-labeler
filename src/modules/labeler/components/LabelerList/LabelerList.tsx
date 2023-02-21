import { useEffect, useMemo, useState } from 'react';
import { Category, Tag } from '../../interfaces';
import { useContextLabelerData } from '../../providers/LabelerDataProvider';
import { useContextLabeler } from '../../providers/LabelerProvider';
import { LabelerListItem } from './components/LabelerListItem';
import {
  StyledLabelerList,
  StyledLabelerListBox,
  StyledLabelerListItens,
  StyledDropDown,
} from './styles';

export const LabelerList = () => {
  const { activatedMedia, removeLabel } = useContextLabeler();
  const { categories } = useContextLabelerData();
  const [selectedCategory, setSelectedCategory] = useState<Category>();

  const tags = useMemo(
    () => activatedMedia?.tags.filter((tag) => tag.category_id === selectedCategory?.id),
    [activatedMedia, selectedCategory],
  );

  const handleRemoveTag = (tag: Tag) => {
    removeLabel(tag.id);
  };

  useEffect(() => {
    if (!categories.length) return;

    setSelectedCategory(categories[0]);
  }, [categories]);

  return (
    <StyledLabelerList>
      <StyledLabelerListBox>
        <StyledDropDown
          options={categories}
          onSelectCallback={(category) => setSelectedCategory(category)}
          defaultValue={selectedCategory?.name}
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
