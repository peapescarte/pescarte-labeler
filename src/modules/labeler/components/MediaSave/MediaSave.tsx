import { useContextLabelerData } from '../../providers/LabelerDataProvider';
import { useContextLabeler } from '../../providers/LabelerProvider';
import { StyledMediaSave, StyledSaveButton } from './styles';

export const MediaSave = () => {
  const { fetchLoading, updateLoading } = useContextLabelerData();
  const { saveMedia, haveChanges } = useContextLabeler();

  return (
    <StyledMediaSave>
      <StyledSaveButton
        disabled={fetchLoading || updateLoading || !haveChanges}
        onClick={() => saveMedia()}
        title="Salvar"
      >
        Salvar
      </StyledSaveButton>
    </StyledMediaSave>
  );
};
