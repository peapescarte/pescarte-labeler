import { UserSquare2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ConfirmModal } from '../../modules/labeler/components/ConfirmModal';
import { useContextAuth } from '../../providers/AuthProvider';
import { Button } from '../Button';
import { ShowDesktop, ShowMobile } from '../Show/styles';
import {
  LogoutContainer,
  StyledHeader,
  StyledLogo,
  StyledNav,
  StyledNavLink,
  UserContainer,
  UserNameText,
} from './styles';

type HeaderProps = {
  haveChanges?: boolean;
};
/**
 * Componente de Header para ser utilizado em toda aplicação
 */
export const Header = ({ haveChanges = false }: HeaderProps) => {
  const { logout, user } = useContextAuth();
  const [isConfirmExitModalOpen, setIsConfirmExitModalOpen] = useState(false);

  const handleLogout = () => {
    if (haveChanges) {
      setIsConfirmExitModalOpen(true);
      return;
    }

    logout();
  };

  const userName = useMemo(
    () => (user ? `${user?.firstName} ${user?.lastName}` : 'Unknown'),
    [user],
  );

  return (
    <StyledHeader>
      <ConfirmModal
        isOpen={isConfirmExitModalOpen}
        title="Descartar"
        text="Há modificações não salvas, deseja continuar e sair ?"
        cancelButtonText="Cancelar"
        confirmButtonText="Continuar"
        onCancel={() => {
          setIsConfirmExitModalOpen(false);
        }}
        onConfirm={() => {
          setIsConfirmExitModalOpen(false);
          logout();
        }}
      />
      <ShowMobile>
        <StyledLogo src="/pescarte_icon.png" />
      </ShowMobile>
      <ShowDesktop>
        <StyledLogo src="/pescarte_logo.png" />
      </ShowDesktop>
      <StyledNav>
        <StyledNavLink to="/labeler/list">Galeria de Mídias</StyledNavLink>
      </StyledNav>
      <LogoutContainer>
        <ShowDesktop>
          <UserContainer>
            <UserSquare2 />
            <UserNameText>{userName}</UserNameText>
          </UserContainer>
        </ShowDesktop>
        <Button onClick={handleLogout}>Sair</Button>
      </LogoutContainer>
    </StyledHeader>
  );
};
