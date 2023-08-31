import { useEffect, useMemo, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Category, Tag } from '../../interfaces';
import { useContextLabelerData } from '../../providers/LabelerDataProvider';
import { useContextLabeler } from '../../providers/LabelerProvider';
import { DropDownSearch } from '../DropDownSearch';
import { option } from '../DropDownSearch/DropDownSearch';
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

/**
 * Exibe a Lista de etiquetas, responsavel por listar
 * Exibe a Seleção da categoria da listagem, dropdown com as categorias das etiquetas
 * Exibe o Campo de inserção de nova etiqueta
 */
export const LabelerList = () => {
  const { activatedMedia, removeLabel, addNewLabel } = useContextLabeler();
  const { categories, allTags, updateLoading, fetchLoading } = useContextLabelerData();
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [optionsTag, setOptionsTag] = useState<option[]>([]);

  const tags = useMemo(
    () =>
      activatedMedia?.tags
        .filter((tag) => tag.categoryId === selectedCategory?.id)
        .sort((tagA: Tag, tagB: Tag) => {
          if (tagA.label < tagB.label) return -1;

          return 1;
        }),
    [activatedMedia, selectedCategory],
  );

  const isValidNewLabel = (newLabel: string) => {
    if (newLabel === '') return false;

    return true;
  };

  const handleRemoveTag = (tag: Tag) => {
    removeLabel(tag);
  };

  const handleNewTag = (tag: string) => {
    if (!activatedMedia || !selectedCategory || updateLoading) return false;

    const created = addNewLabel({
      categoryId: selectedCategory.id,
      label: tag,
    });

    if (created && !optionsTag.some((opt) => opt.value === created.label)) {
      setOptionsTag([...optionsTag, { id: created.id, value: created.label }]);
    }

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

    setOptionsTag(
      allTags
        .map((tag) => ({ id: tag.id, value: tag.label }))
        .sort((a, b) => {
          if (a.value > b.value) return 1;
          if (a.value < b.value) return -1;

          return 1;
        }),
    );
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
            <DropDownSearch
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
