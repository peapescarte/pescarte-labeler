import { ChevronLeft, ChevronRight, Save } from 'lucide-react';
import { useContextLabelerData } from '../../providers/LabelerDataProvider';
import { useContextLabeler } from '../../providers/LabelerProvider';
import {
  SaveButton,
  StyledMediaControlButton,
  StyledMediaControlContainer,
  StyledMediaControlCounter,
} from './styles';
export const LabelerMediaControl = () => {
  const { goToNextMedia, goToPrevMedia, activatedMedia, saveMedia } = useContextLabeler();
  const { medias, updateLoading, fetchLoading } = useContextLabelerData();
  const actualIndex = medias.findIndex((media) => media.id === activatedMedia?.id) + 1;

  const handleNextClick = () => {
    goToNextMedia();
  };

  const handlePrevClick = () => {
    goToPrevMedia();
  };

  return (
    <StyledMediaControlContainer>
      <StyledMediaControlButton
        onClick={handlePrevClick}
        title="Ir para Mídia anterior"
        disabled={updateLoading}
      >
        <ChevronLeft aria-label="flecha para esquerda" strokeWidth="1.5" />
      </StyledMediaControlButton>
      <StyledMediaControlCounter>
        {actualIndex} / {medias.length}
      </StyledMediaControlCounter>
      <StyledMediaControlButton
        onClick={handleNextClick}
        title="Ir para próxima Mídia"
        disabled={updateLoading}
      >
        <ChevronRight aria-label="Icone flecha para direita" strokeWidth="1.5" />
      </StyledMediaControlButton>
      <SaveButton onClick={saveMedia} disabled={updateLoading || fetchLoading} title="Salvar">
        <Save />
      </SaveButton>
    </StyledMediaControlContainer>
  );
};
