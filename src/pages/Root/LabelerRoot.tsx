import { Outlet } from 'react-router-dom';
import { LabelerDataProvider } from '../../modules/labeler/providers/LabelerDataProvider';

/**
 * Componente pagina raiz do labeler
 * Utilizada para envolver as paginas labaler com o provider de dados
 */
export const LabelerRoot = () => {
  return (
    <LabelerDataProvider>
      <Outlet />
    </LabelerDataProvider>
  );
};
