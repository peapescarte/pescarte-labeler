import { useEffect, useMemo, useState } from 'react';
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
  const { activatedMedia } = useContextLabeler();
  const { categories } = useContextLabelerData();
  const [selectedCategory, setSelectedCategory] = useState('');

  const tags = useMemo(
    () => activatedMedia?.tags.filter((tag) => tag.category_id === selectedCategory),
    [activatedMedia, selectedCategory],
  );

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
            return <LabelerListItem key={tag.id}>{tag.label}</LabelerListItem>;
          })}
        </StyledLabelerListItens>
      </StyledLabelerListBox>
    </StyledLabelerList>
  );
};
