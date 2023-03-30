import { StyledHeader, StyledLogo, StyledLogout } from './styles';

export const Header = () => {
  const handleLogout = () => {
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
