import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom';
import { LabelerDataProvider } from '../modules/labeler/providers/LabelerDataProvider';
import { LabelerProvider } from '../modules/labeler/providers/LabelerProvider';
import { LabelerPage } from '../pages/LabelerPage';
import { ListMedias } from '../pages/ListMedias';
import { Login } from '../pages/Login';
import { LabelerRoot, Root } from '../pages/Root';
import { AuthProvider } from '../providers/AuthProvider';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      }
    >
      <Route path="/" element={<Root />}>
        <Route path="/login" element={<Login />} />
        <Route path="/labeler" element={<LabelerRoot />}>
          <Route
            path="edit"
            element={
              <LabelerProvider>
                <LabelerPage />
              </LabelerProvider>
            }
          />
          <Route
            path="list"
            element={
              <LabelerDataProvider>
                <ListMedias />
              </LabelerDataProvider>
            }
          />
        </Route>
      </Route>
      ,
    </Route>,
  ),
);
