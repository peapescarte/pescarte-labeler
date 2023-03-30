import { useMemo, useState } from 'react';
import { normalizeString } from '../../../../helpers/string';
import {
  ArrowIcon,
  SearchFieldExtraItem,
  SearchFieldInput,
  SearchFieldInputWrapper,
  SearchFieldList,
  SearchFieldListItem,
  StyledSearchField,
} from './styles';

export type option = {
  id: string;
  value: string;
};

type SearchFieldProps = {
  options: option[];
  defaultValue: string;
  onSelectCallback: (selected: option) => void;
  disabled?: boolean;
};

export const SearchField = ({
  options,
  defaultValue,
  onSelectCallback,
  disabled,
}: SearchFieldProps) => {
  const [search, setSearch] = useState(defaultValue);
  const [selected, setSelected] = useState(defaultValue);
  const [openList, setOpenList] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const handleSelect = (selectedItem: option) => {
    setSelected(selectedItem.value);
    setSearch('');
    onSelectCallback(selectedItem);
    setOpenList(false);
  };

  const handleInputBlur = () => {
    setSearch(selected);
    setOpenList(false);
  };

  const handleInputFocus = () => {
    setSearch('');
    setOpenList(true);
  };

  const list = useMemo(
    () =>
      options
        .sort((a, b) => {
          if (a.value > b.value) return 1;
          if (a.value < b.value) return -1;

          return 1;
        })
        .filter((item) => normalizeString(item.value).indexOf(normalizeString(search)) !== -1),
    [search, options],
  );

  return (
    <StyledSearchField>
      <SearchFieldInputWrapper>
        <SearchFieldInput
          onBlur={() => handleInputBlur()}
          onFocus={() => handleInputFocus()}
          onChange={(event) => handleOnChange(event)}
          value={search}
          disabled={disabled}
        />
        <ArrowIcon menuOpen={openList} strokeWidth="2" />
      </SearchFieldInputWrapper>
      <SearchFieldList show={openList}>
        {list.slice(0, 5).map((item) => (
          <SearchFieldListItem key={item.id} onMouseDown={() => handleSelect(item)}>
            {item.value}
          </SearchFieldListItem>
        ))}
        {list.length > 5 && <SearchFieldExtraItem key={'...'}>...</SearchFieldExtraItem>}
        {list.length === 0 && (
          <SearchFieldExtraItem key={'no-found'}>Nenhum valor encontrado</SearchFieldExtraItem>
        )}
      </SearchFieldList>
    </StyledSearchField>
  );
};
