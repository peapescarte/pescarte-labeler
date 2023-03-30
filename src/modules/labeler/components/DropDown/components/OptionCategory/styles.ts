import styled, { css } from 'styled-components';

export const StyledOptionCategory = styled.li`
  ${({ theme }) => css`
    list-style: none;
    cursor: pointer;
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
    :hover {
      background-color: ${theme.colors.background};
    }
  `}
`;
