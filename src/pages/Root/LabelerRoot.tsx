import { Outlet } from 'react-router-dom';
import { LabelerDataProvider } from '../../modules/labeler/providers/LabelerDataProvider';

export const LabelerRoot = () => {
  return (
    <LabelerDataProvider>
      <Outlet />
    </LabelerDataProvider>
  );
};
