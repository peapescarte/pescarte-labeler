import styled, { css } from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export type PaginationNumberProps = {
  active: boolean;
};

export const PaginationNumber = styled.p<PaginationNumberProps>`
  ${({ theme, active }) => css`
    font-family: ${theme.fonts};
    font-size: ${theme.fontSizes.regular};
    color: ${active ? theme.colors.white : theme.colors.primary100};
  `}
`;

export type PaginationButtonProps = {
  active: boolean;
};

export const PaginationButton = styled.button<PaginationButtonProps>`
  ${({ theme, active }) => css`
    border: 0;
    border-radius: 0.4rem;
    background-color: ${active ? theme.colors.primary100 : 'transparent'};
    cursor: pointer;
    height: 3.2rem;
    width: 3.2rem;

    &:hover {
      background-color: ${active ? theme.colors.primary100 : theme.colors.primary20};
    }
  `}
`;
