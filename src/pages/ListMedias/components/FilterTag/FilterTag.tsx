import { X } from 'lucide-react';
import { FilterTagContainer, FilterTagText, RemoveButton } from './styles';

type FilterTagProps = {
  text: string;
  onClickRemove: () => void;
};

export const FilterTag = ({ text, onClickRemove }: FilterTagProps) => {
  return (
    <FilterTagContainer>
      <FilterTagText>{text}</FilterTagText>
      <RemoveButton onClick={() => onClickRemove()}>
        <X strokeWidth={1.5} size={12} />
      </RemoveButton>
    </FilterTagContainer>
  );
};
