import { StyledSaveButton } from './styles';

type SaveButtonProps = {
  onClickCallback: () => void;
};

export const SaveButton = ({ onClickCallback }: SaveButtonProps) => {
  return <StyledSaveButton onClick={onClickCallback}>Salvar</StyledSaveButton>;
};
