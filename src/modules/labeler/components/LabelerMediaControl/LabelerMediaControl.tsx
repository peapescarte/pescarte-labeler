import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useContextLabeler } from '../../providers/LabelerProvider';
import {
  StyledMediaControlButton,
  StyledMediaControlContainer,
  StyledMediaControlCounter,
} from './styles';
export const LabelerMediaControl = () => {
  const { goToNextMedia, goToPrevMedia, medias, activatedMedia } = useContextLabeler();
  const actualIndex = medias.findIndex((media) => media.id === activatedMedia?.id) + 1;

  const handleNextClick = () => {
    goToNextMedia();
  };

  const handlePrevClick = () => {
    goToPrevMedia();
  };

  return (
    <StyledMediaControlContainer>
      <StyledMediaControlButton onClick={handlePrevClick} title="Ir para Mídia anterior">
        <ChevronLeft aria-label="flecha para esquerda" strokeWidth="1.5" />
      </StyledMediaControlButton>
      <StyledMediaControlCounter>
        {actualIndex} / {medias.length}
      </StyledMediaControlCounter>
      <StyledMediaControlButton onClick={handleNextClick} title="Ir para próxima Mídia">
        <ChevronRight aria-label="Icone flecha para direita" strokeWidth="1.5" />
      </StyledMediaControlButton>
    </StyledMediaControlContainer>
  );
};
