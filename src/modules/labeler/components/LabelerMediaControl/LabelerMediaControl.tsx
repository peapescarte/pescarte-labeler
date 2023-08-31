import { ChevronLeft, ChevronRight, Save } from 'lucide-react';
import { useState } from 'react';
import { ShowDesktop } from '../../../../components/Show/styles';
import { useContextLabelerData } from '../../providers/LabelerDataProvider';
import { useContextLabeler } from '../../providers/LabelerProvider';
import { ConfirmModal } from '../ConfirmModal';
import {
  SaveButton,
  StyledMediaControlButton,
  StyledMediaControlContainer,
  StyledMediaControlCounter,
} from './styles';

/**
 * Componente com os controles de qual midia está sendo exibida
 */
export const LabelerMediaControl = () => {
  const { goToNextMedia, goToPrevMedia, activatedMedia, saveMedia, haveChanges } =
    useContextLabeler();
  const { medias, updateLoading, fetchLoading } = useContextLabelerData();
  const actualIndex = medias.findIndex((media) => media.id === activatedMedia?.id) + 1;
  const [isConfirmExitModalOpen, setIsConfirmExitModalOpen] = useState(false);
  const [confirmExitModalCallback, setConfirmExitModalCallback] = useState<() => void>();

  const handleNextClick = () => {
    console.log('aloha');
    goToNextMedia();
  };

  const handlePrevClick = () => {
    console.log('alohe');
    goToPrevMedia();
  };

  const checkExit = (callback: () => void) => {
    if (haveChanges) {
      setConfirmExitModalCallback(() => callback);
      setIsConfirmExitModalOpen(true);
    } else {
      callback();
    }
  };
  console.log(haveChanges);
  return (
    <StyledMediaControlContainer>
      <ConfirmModal
        isOpen={isConfirmExitModalOpen}
        title="Descartar"
        text="Há modificações não salvas, deseja continuar e descartar ?"
        cancelButtonText="Cancelar"
        confirmButtonText="Continuar"
        onCancel={() => {
          setIsConfirmExitModalOpen(false);
          setConfirmExitModalCallback(undefined);
        }}
        onConfirm={() => {
          if (confirmExitModalCallback) confirmExitModalCallback();

          setIsConfirmExitModalOpen(false);
        }}
      />
      <StyledMediaControlButton
        onClick={() => checkExit(handlePrevClick)}
        title="Ir para Mídia anterior"
        disabled={updateLoading}
      >
        <ChevronLeft aria-label="flecha para esquerda" strokeWidth="1.5" />
      </StyledMediaControlButton>
      <StyledMediaControlCounter>
        {actualIndex} / {medias.length}
      </StyledMediaControlCounter>
      <StyledMediaControlButton
        onClick={() => checkExit(handleNextClick)}
        title="Ir para próxima Mídia"
        disabled={updateLoading}
      >
        <ChevronRight aria-label="Icone flecha para direita" strokeWidth="1.5" />
      </StyledMediaControlButton>
      <ShowDesktop>
        <SaveButton
          onClick={saveMedia}
          disabled={updateLoading || fetchLoading || !haveChanges}
          title="Salvar"
        >
          <Save style={{ display: 'flex' }} />
        </SaveButton>
      </ShowDesktop>
    </StyledMediaControlContainer>
  );
};
