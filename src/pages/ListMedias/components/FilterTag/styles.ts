import styled, { css } from 'styled-components';

export const FilterTagContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.neutra20};
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  `}
`;

export const FilterTagText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.regular};
  `}
`;

export const RemoveButton = styled.button`
  border: 0;
  background-color: transparent;
  display: flex;
  cursor: pointer;
`;
