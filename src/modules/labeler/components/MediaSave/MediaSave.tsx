import { useContextLabelerData } from '../../providers/LabelerDataProvider';
import { useContextLabeler } from '../../providers/LabelerProvider';
import { StyledMediaSave, StyledSaveButton } from './styles';

export const MediaSave = () => {
  const { fetchLoading, updateLoading } = useContextLabelerData();
  const { saveMedia } = useContextLabeler();

  return (
    <StyledMediaSave>
      <StyledSaveButton
        disabled={fetchLoading || updateLoading}
        onClick={() => saveMedia()}
        title="Salvar"
      >
        Salvar
      </StyledSaveButton>
    </StyledMediaSave>
  );
};
