import styled, { css } from 'styled-components';
import { Input } from '../../../../components/Input';

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

export const LoginFormInput = styled(Input)`
  max-width: 30rem;
`;

export const LoginFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContinueButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    border-radius: 0.4rem;
    width: 100%;
    height: fit-content;
    padding: 1.2rem 2rem;
    font-size: ${theme.fontSizes.regular};
    cursor: pointer;
    :hover {
      background-color: ${theme.colors.primary60};
    }
  `}
`;
