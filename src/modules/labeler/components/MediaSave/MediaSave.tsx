import { SaveButton } from './components/SaveButton';
import { StyledMediaSave } from './styles';

export const MediaSave = () => {
  return (
    <StyledMediaSave>
      <SaveButton onClickCallback={() => console.log()} />
    </StyledMediaSave>
  );
};
