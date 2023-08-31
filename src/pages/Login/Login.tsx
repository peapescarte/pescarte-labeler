import { LoginForm } from '../../modules/login/components/LoginForm';
import { StyledContainer } from './styles';

/**
 * Componente pagina login
 * Página responsavel pelo formulário de login
 */
export const Login = () => {
  return (
    <StyledContainer>
      <LoginForm />
    </StyledContainer>
  );
};
