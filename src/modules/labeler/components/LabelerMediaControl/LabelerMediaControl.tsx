import IconArrowRight from '../../../../assets/icons/angle-right-solid.svg';
import IconArrowLeft from '../../../../assets/icons/angle-left-solid.svg';
import { useContextLabeler } from '../../providers/LabelerProvider';
import { StyledIcon, StyledMediaControlButton, StyledMediaControlContainer } from './styles';

export const LabelerMediaControl = () => {
  const { goToNextMedia, goToPrevMedia } = useContextLabeler();

  const handleNextClick = () => {
    goToNextMedia();
  };

  const handlePrevClick = () => {
    goToPrevMedia();
  };

  return (
    <StyledMediaControlContainer>
      <StyledMediaControlButton onClick={handlePrevClick}>
        <StyledIcon src={IconArrowLeft} alt="Icone flecha para esquerda" />
      </StyledMediaControlButton>
      <StyledMediaControlButton onClick={handleNextClick}>
        <StyledIcon src={IconArrowRight} alt="Icone flecha para direita" />
      </StyledMediaControlButton>
    </StyledMediaControlContainer>
  );
};
