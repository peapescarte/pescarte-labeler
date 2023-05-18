import styled, { css } from 'styled-components';

export const StyledInputLabel = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 4rem;
    border: 1px solid ${theme.colors.border};
    border-radius: 4px;
    padding-left: 0.5rem;
  `}
`;
