import { useParams } from 'react-router-dom';
import { LabelerProvider } from '../../modules/labeler/providers/LabelerProvider';
import { LabelerPage } from './LabelerPage';

export const LabelerPageRoot = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <LabelerProvider initialMediaId={id}>
      <LabelerPage />
    </LabelerProvider>
  );
};
