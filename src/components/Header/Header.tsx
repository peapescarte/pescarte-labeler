import { toast } from 'react-toastify';
import { useContextLabeler } from '../../modules/labeler/providers/LabelerProvider';
import { StyledHeader, StyledLogo, StyledLogout } from './styles';

export const Header = () => {
  const { haveChanges } = useContextLabeler();
  const handleLogout = () => {
    if (haveChanges) {
      toast('Salve as modificações para continuar.', {
        type: 'warning',
      });
      return;
    }
    localStorage.removeItem('auth');
    window.location.replace('/login');
  };

  return (
    <StyledHeader>
      <StyledLogo src="/pescarte_logo.png" />
      <StyledLogout onClick={handleLogout}>Sair</StyledLogout>
    </StyledHeader>
  );
};
