import { ChevronLeft, ChevronRight, Save } from 'lucide-react';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
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
  const { goToNextMedia, goToPrevMedia, saveMedia, haveChanges, activatedMediaIndex } =
    useContextLabeler();
  const { medias, updateLoading, fetchLoading } = useContextLabelerData();
  const [isConfirmExitModalOpen, setIsConfirmExitModalOpen] = useState(false);
  const [confirmExitModalCallback, setConfirmExitModalCallback] = useState<() => void>();

  const handleNextClick = () => {
    goToNextMedia();
  };

  const handlePrevClick = () => {
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
      {activatedMediaIndex !== undefined ? (
        <>
          <StyledMediaControlButton
            onClick={() => checkExit(handlePrevClick)}
            title="Ir para Mídia anterior"
            disabled={updateLoading}
          >
            <ChevronLeft aria-label="flecha para esquerda" strokeWidth="1.5" />
          </StyledMediaControlButton>

          <StyledMediaControlCounter>
            {activatedMediaIndex + 1} / {medias.length}
          </StyledMediaControlCounter>

          <StyledMediaControlButton
            onClick={() => checkExit(handleNextClick)}
            title="Ir para próxima Mídia"
            disabled={updateLoading}
          >
            <ChevronRight aria-label="Icone flecha para direita" strokeWidth="1.5" />
          </StyledMediaControlButton>
        </>
      ) : (
        <Skeleton width={100} height={24} />
      )}
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
