import { useEffect, useMemo, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Category, Tag } from '../../interfaces';
import { useContextLabelerData } from '../../providers/LabelerDataProvider';
import { useContextLabeler } from '../../providers/LabelerProvider';
import { InputLabel } from '../InputLabel';
import { LabelerListItem } from './components/LabelerListItem';
import {
  StyledLabelerList,
  StyledLabelerListBox,
  StyledLabelerListItens,
  StyledDropDown,
  InputLabelWrapper,
  Label,
} from './styles';

export const LabelerList = () => {
  const { activatedMedia, removeLabel, addNewLabel } = useContextLabeler();
  const { categories, updateLoading } = useContextLabelerData();
  const [selectedCategory, setSelectedCategory] = useState<Category>();

  const tags = useMemo(
    () => activatedMedia?.tags.filter((tag) => tag.categoria.id === selectedCategory?.id),
    [activatedMedia, selectedCategory],
  );

  const isValidNewLabel = (newLabel: string) => {
    if (newLabel === '') return false;

    return true;
  };

  const handleRemoveTag = (tag: Tag) => {
    removeLabel(tag.id);
  };

  const handleNewTag = (tag: string) => {
    if (!activatedMedia || !selectedCategory || updateLoading) return false;

    return addNewLabel({
      categoria: {
        id: selectedCategory.id,
      },
      label: tag,
    });
  };

  const handleEditTag = (tag: Tag, newTag: string) => {
    if (!isValidNewLabel || updateLoading) return;

    const created = handleNewTag(newTag);

    if (created) handleRemoveTag(tag);
  };

  const loading = !(categories.length > 0 && tags && selectedCategory && activatedMedia);

  useEffect(() => {
    if (!categories.length) return;

    setSelectedCategory(categories[0]);
  }, [categories]);

  return (
    <StyledLabelerList>
      {!loading ? (
        <StyledLabelerListBox>
          <StyledDropDown
            options={categories}
            onSelectCallback={(category) => setSelectedCategory(category)}
            defaultValue={selectedCategory.name}
          />
          <StyledLabelerListItens>
            {tags.map((tag) => {
              return (
                <LabelerListItem
                  key={tag.id}
                  onRemoveCallback={() => handleRemoveTag(tag)}
                  onEditCallback={(newTag) => handleEditTag(tag, newTag)}
                >
                  {tag.label}
                </LabelerListItem>
              );
            })}
          </StyledLabelerListItens>
          <InputLabelWrapper>
            <Label>Adicionar tag</Label>
            <InputLabel onSubmit={(newTag) => handleNewTag(newTag)} disabled={updateLoading} />
          </InputLabelWrapper>
        </StyledLabelerListBox>
      ) : (
        <Skeleton width="100%" height="100%" />
      )}
    </StyledLabelerList>
  );
};
