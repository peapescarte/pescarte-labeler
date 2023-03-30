import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useContextAuth } from '../../providers/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { StyledToastContainer } from './styles';

export const Root = () => {
  const { auth } = useContextAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate('/login');
      return;
    }

    navigate('/labeler/edit');
  }, [auth]);

  return (
    <>
      <Outlet />
      <StyledToastContainer />
    </>
  );
};
