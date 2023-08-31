import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom';
import { LabelerPageRoot } from '../pages/LabelerPage';
import { ListMedias } from '../pages/ListMedias';
import { Login } from '../pages/Login';
import { LabelerRoot, Root } from '../pages/Root';
import { AuthProvider } from '../providers/AuthProvider';
import { NotFound } from '../pages/NotFound';

/**
 * Configuração e crição das rotas da aplicação
 */
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
          <Route path="edit/:id" element={<LabelerPageRoot />} />
          <Route path="list" element={<ListMedias />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
      ,
    </Route>,
  ),
);
