import React from 'react';
import { Category } from '../../interfaces';
import { StyledOptionCategory, StyledSelectCategory } from './styles';

export type SelectCategoryType = {
  options: Category[];
  className?: string;
  onSelectCallback: (value: string) => void;
  isRequired?: boolean;
  defaultValue?: string;
};

export const SelectCategory = ({
  options,
  className,
  onSelectCallback,
  isRequired = false,
  defaultValue,
}: SelectCategoryType) => {
  const handleOnSelect = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    onSelectCallback(e.currentTarget.value);
  };
  return (
    <StyledSelectCategory
      className={className}
      onChange={(e) => handleOnSelect(e)}
      required={isRequired}
    >
      {defaultValue && (
        <StyledOptionCategory key="default" value="" selected disabled hidden>
          {defaultValue}
        </StyledOptionCategory>
      )}
      {options.map((option) => {
        return (
          <StyledOptionCategory key={option.id} value={option.id}>
            {option.name}
          </StyledOptionCategory>
        );
      })}
    </StyledSelectCategory>
  );
};
