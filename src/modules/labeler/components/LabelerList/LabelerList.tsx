import { useEffect, useMemo, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Category, Tag } from '../../interfaces';
import { useContextLabelerData } from '../../providers/LabelerDataProvider';
import { useContextLabeler } from '../../providers/LabelerProvider';
import { SearchField } from '../SearchField';
import { option } from '../SearchField/SearchField';
import { LabelerListItem } from './components/LabelerListItem';
import {
  DropDownWrapper,
  InputLabelWrapper,
  Label,
  StyledDropDown,
  StyledLabelerList,
  StyledLabelerListBox,
  StyledLabelerListItens,
} from './styles';

export const LabelerList = () => {
  const { activatedMedia, removeLabel, addNewLabel } = useContextLabeler();
  const { categories, allTags, updateLoading, fetchLoading } = useContextLabelerData();
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [optionsTag, setOptionsTag] = useState<option[]>([]);

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

    const created = addNewLabel({
      categoria: {
        id: selectedCategory.id,
      },
      label: tag,
    });

    if (created) setOptionsTag([...optionsTag, { id: created.id, value: created.label }]);

    return created;
  };

  const handleEditTag = (tag: Tag, newTag: string) => {
    if (!isValidNewLabel || updateLoading) return;

    const created = handleNewTag(newTag);

    if (created) handleRemoveTag(tag);
  };

  const loading = !(
    categories.length > 0 &&
    tags &&
    selectedCategory &&
    activatedMedia &&
    !fetchLoading
  );

  useEffect(() => {
    if (!categories.length) return;

    setSelectedCategory(categories[0]);
  }, [categories]);

  useEffect(() => {
    if (!optionsTag) return;

    setOptionsTag(allTags.map((tag) => ({ id: tag.id, value: tag.label })));
  }, [allTags]);

  return (
    <StyledLabelerList>
      {!loading ? (
        <StyledLabelerListBox>
          <DropDownWrapper>
            <Label>Selecionar categoria:</Label>
            <StyledDropDown
              options={categories}
              onSelectCallback={(category) => setSelectedCategory(category)}
              defaultValue={selectedCategory.name}
            />
          </DropDownWrapper>
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
            <Label>Adicionar etiqueta:</Label>
            <SearchField
              maxLength={15}
              placeholder="Inserir nova etiqueta..."
              onSelectCallback={(val) => handleNewTag(val.value)}
              options={optionsTag}
              disabled={updateLoading}
              withCreation
            />
          </InputLabelWrapper>
        </StyledLabelerListBox>
      ) : (
        <Skeleton width="100%" height="100%" />
      )}
    </StyledLabelerList>
  );
};
