import styled, { css } from 'styled-components';
import { Button } from '../../../../components/Button';

export const LoginFormContainer = styled.div`
  border: 2px solid ${(props) => props.theme.colors.border};
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.neutra5};
  border-radius: 4px;
`;

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const LoginFormLabel = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.regular};
    color: ${theme.colors.neutra80};
    margin-bottom: 0.4rem;
  `}
`;

export const LoginFormInput = styled.input`
  ${({ theme }) => css`
    max-width: 30rem;
    height: 4rem;
    border: 1px solid ${theme.colors.border};
    border-radius: 4px;
    padding-left: 0.5rem;
  `}
`;

export const LoginFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignInButton = styled(Button)`
  ${({ theme }) => css`
    width: 100%;
  `}
`;
