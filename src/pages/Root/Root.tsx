import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useContextAuth } from '../../providers/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { StyledToastContainer } from './styles';

/**
 * Componente pagina raiz
 * Faz validação de autenticação antes de direcionar para qualquer outra página
 */
export const Root = () => {
  const { auth } = useContextAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!auth) {
      navigate('/login');
      return;
    }

    if (location.pathname === '/' || location.pathname === '/login') {
      navigate('/labeler/list');
    }
  }, [auth]);

  return (
    <>
      <Outlet />
      <StyledToastContainer />
    </>
  );
};
