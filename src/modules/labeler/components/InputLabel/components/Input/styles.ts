import styled, { css } from 'styled-components';

export const StyledInputLabel = styled.input`
  ${({ theme }) => css`
    height: 4rem;
    border: 1px solid ${theme.colors.border};
    border-radius: 4px;
    margin-left: 1.6rem;
    padding-left: 0.5rem;
  `}
`;
