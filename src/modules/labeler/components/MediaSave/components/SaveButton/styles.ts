import styled, { css } from 'styled-components';

export const StyledSaveButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    border-radius: 0.4rem;
    width: fit-content;
    height: fit-content;
    padding: 1.6rem 2.4rem;
    font-size: ${theme.fontSizes.regular};
    cursor: pointer;
    :hover {
      background-color: ${theme.colors.primary60};
    }
  `}
`;
