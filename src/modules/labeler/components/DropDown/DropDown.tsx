import React, { useState } from 'react';
import { OptionCategory } from './components/OptionCategory';
import {
  ArrowIcon,
  OptionsWrapper,
  OptionsWrapperDivider,
  DropDownField,
  DropDownFieldText,
  StyledDropDown,
} from './styles';

export type OptionType = {
  id: string;
  name: string;
};

export type DropDownProps = {
  options: OptionType[];
  className?: string;
  onSelectCallback: (selectedOption: OptionType) => void;
  defaultValue?: string;
};

/**
 * Dropdown utilizada para seleção de categoria.
 * @param OptionType options - lista de opções
 * @param Function OnSelectCallback  - função chamada quando um item é selecionado, retornando qual foi selecionado
 * @param string defaultValue - valor padrão que já vem selecionado no dropdown
 */
export const DropDown = ({ options, className, onSelectCallback, defaultValue }: DropDownProps) => {
  const [selected, setSelected] = useState(defaultValue);
  const [showOptions, setShowOptions] = useState(false);

  const handleSelected = (value: string) => {
    const finded = options.find((option) => option.id === value);

    if (!finded) return;

    setShowOptions(false);
    setSelected(finded.name);
    onSelectCallback(finded);
  };

  return (
    <StyledDropDown className={className}>
      <DropDownField onClick={() => setShowOptions(!showOptions)} menuOpen={showOptions}>
        <DropDownFieldText>{selected}</DropDownFieldText>
        <ArrowIcon menuOpen={showOptions} strokeWidth="2" />
      </DropDownField>
      <OptionsWrapper show={showOptions}>
        {options.map((option) => {
          return (
            <OptionCategory
              key={option.id}
              value={option.id}
              OnClickCallback={(value) => handleSelected(value)}
            >
              {option.name}
            </OptionCategory>
          );
        })}
        <OptionsWrapperDivider />
      </OptionsWrapper>
    </StyledDropDown>
  );
};
