import { useState } from 'react';
import { useContextAuth } from '../../../../providers/AuthProvider';
import {
  ContinueButton,
  LoginFormContainer,
  LoginFormInput,
  LoginFormInputWrapper,
  LoginFormLabel,
  StyledLoginForm,
} from './styles';

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
          <LoginFormInput onChangeCallback={(cpfVal) => setCpf(cpfVal)} required />
        </LoginFormInputWrapper>
        <LoginFormInputWrapper>
          <LoginFormLabel>Senha:</LoginFormLabel>
          <LoginFormInput onChangeCallback={(pass) => setPassword(pass)} type="password" required />
        </LoginFormInputWrapper>
        <ContinueButton type="submit">Entrar</ContinueButton>
      </StyledLoginForm>
    </LoginFormContainer>
  );
};
