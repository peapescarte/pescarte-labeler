import React from 'react';
import { Category } from '../../interfaces/media';
import { StyledOptionCategory, StyledSelectCategory } from './styles';

export type SelectCategoryType = {
  options: Category[];
  className?: string;
  onSelectCallback: (value: string) => void;
};

export const SelectCategory = ({ options, className, onSelectCallback }: SelectCategoryType) => {
  const handleOnSelect = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    onSelectCallback(e.currentTarget.value);
  };
  return (
    <StyledSelectCategory className={className} onChange={(e) => handleOnSelect(e)}>
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
