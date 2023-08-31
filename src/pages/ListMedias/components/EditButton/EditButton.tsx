import { Edit } from 'lucide-react';
import { StyledEditButton } from './styles';

type EditButtonProps = {
  onClickCallback: () => void;
};

export const EditButton = ({ onClickCallback }: EditButtonProps) => {
  return (
    <StyledEditButton onClick={() => onClickCallback()}>
      <Edit size={16} />
    </StyledEditButton>
  );
};
