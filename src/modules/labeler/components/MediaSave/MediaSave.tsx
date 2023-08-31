import { Save } from 'lucide-react';
import { Button } from '../../../../components/Button';
import { useContextLabelerData } from '../../providers/LabelerDataProvider';
import { useContextLabeler } from '../../providers/LabelerProvider';
import { ButtonContent, StyledMediaSave } from './styles';

/**
 * Botão utilizado para salvar os dados atualizados de uma midia
 */
export const MediaSave = () => {
  const { fetchLoading, updateLoading } = useContextLabelerData();
  const { saveMedia, haveChanges } = useContextLabeler();

  return (
    <StyledMediaSave>
      <Button
        disabled={fetchLoading || updateLoading || !haveChanges}
        onClick={() => saveMedia()}
        title="Salvar"
      >
        <ButtonContent>
          <Save /> <p>Salvar</p>
        </ButtonContent>
      </Button>
    </StyledMediaSave>
  );
};
