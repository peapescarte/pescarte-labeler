import { useState } from 'react';
import { useContextAuth } from '../../../../providers/AuthProvider';
import {
  LoginFormContainer,
  LoginFormInput,
  LoginFormInputWrapper,
  LoginFormLabel,
  SignInButton,
  StyledLoginForm,
} from './styles';

/**
 * Componente formulário do login
 * Utiliza-se das entradas do usuario e de contexto para realizar a autenticação do usuario
 */
export const LoginForm = () => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContextAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(cpf, password);
  };

  return (
    <LoginFormContainer>
      <StyledLoginForm onSubmit={(e) => handleSubmit(e)}>
        <LoginFormInputWrapper>
          <LoginFormLabel>CPF:</LoginFormLabel>
          <LoginFormInput onChange={(cpfVal) => setCpf(cpfVal.target.value)} required />
        </LoginFormInputWrapper>
        <LoginFormInputWrapper>
          <LoginFormLabel>Senha:</LoginFormLabel>
          <LoginFormInput
            onChange={(pass) => setPassword(pass.target.value)}
            type="password"
            required
          />
        </LoginFormInputWrapper>
        <SignInButton type="submit">Entrar</SignInButton>
      </StyledLoginForm>
    </LoginFormContainer>
  );
};
