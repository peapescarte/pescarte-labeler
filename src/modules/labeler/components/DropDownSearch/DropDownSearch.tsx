import { useEffect, useMemo, useState } from 'react';
import { normalizeString } from '../../../../helpers/string';
import {
  ArrowIcon,
  DropDownSearchExtraItem,
  DropDownSearchInput,
  DropDownSearchInputWrapper,
  DropDownSearchList,
  DropDownSearchListItem,
  StyledDropDownSearch,
} from './styles';

export type option = {
  id: string;
  value: string;
};

type DropDownSearchProps = {
  options: option[];
  defaultValue?: string;
  onSelectCallback: (selected: option) => void;
  disabled?: boolean;
  withCreation?: boolean;
  maxLength?: number;
  placeholder?: string;
  className?: string;
  maxShowItens?: number;
};

/**
 * Dropdown com busca e possibilidade de criação de novos itens
 * @param OptionType options - lista de opções
 * @param string defaultValue - valor padrão que já vem selecionado no dropdown
 * @param Function OnSelectCallback  - função chamada quando um item é selecionado, retornando qual foi selecionado
 * @param boolean disabled - desabilita o dropdown
 * @param boolean withCreation - habilita/desabilita a possibilidade de criar novas opções no caso da buscada não existir
 * @param number maxLength - define o tamanho maximo para as criações
 * @param string placeholder - o texto exibido no place holder
 * @param string className - className para custumizar estilo do input wrapper
 * @param number maxShowItens - quantidade maxima de linhas exibidas, default = 5
 */
export const DropDownSearch = ({
  options,
  defaultValue = '',
  onSelectCallback,
  disabled,
  withCreation = false,
  maxLength,
  maxShowItens = 5,
  placeholder,
  className,
}: DropDownSearchProps) => {
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

  useEffect(() => {
    setSearch(defaultValue);
    setSelected(defaultValue);
  }, [defaultValue]);

  const list = useMemo(
    () =>
      options.filter((item) => normalizeString(item.value).indexOf(normalizeString(search)) !== -1),
    [search, options],
  );

  return (
    <StyledDropDownSearch className={className}>
      <DropDownSearchInputWrapper>
        <DropDownSearchInput
          onBlur={() => handleInputBlur()}
          onFocus={() => handleInputFocus()}
          onChange={(event) => handleOnChange(event)}
          value={search}
          disabled={disabled}
          maxLength={maxLength}
          placeholder={placeholder}
        />
        <ArrowIcon menuOpen={openList} strokeWidth="2" />
      </DropDownSearchInputWrapper>
      <DropDownSearchList show={openList}>
        {list.slice(0, maxShowItens).map((item) => (
          <DropDownSearchListItem key={item.id} onMouseDown={() => handleSelect(item)}>
            {item.value}
          </DropDownSearchListItem>
        ))}
        {list.length > maxShowItens && (
          <DropDownSearchExtraItem key={'...'}>...</DropDownSearchExtraItem>
        )}
        {search.length > 0 && withCreation && (
          <DropDownSearchListItem
            style={{
              fontWeight: 'bold',
            }}
            key={'create'}
            onMouseDown={() => handleSelect({ id: 'creating', value: search })}
          >
            {`Criar: "${search}"`}
          </DropDownSearchListItem>
        )}
        {list.length === 0 && (
          <DropDownSearchExtraItem key={'no-found'}>
            Nenhum valor encontrado
          </DropDownSearchExtraItem>
        )}
      </DropDownSearchList>
    </StyledDropDownSearch>
  );
};
