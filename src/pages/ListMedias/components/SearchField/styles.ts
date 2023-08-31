import styled, { css } from 'styled-components';

export const SearchFieldContainer = styled.div`
  ${({ theme }) => css`
    border: 1.5px solid ${theme.colors.border};
    border-radius: 4px;
    height: 4rem;
    padding: 0 1.2rem;
    background-color: white;
    font-family: ${theme.fonts};
    display: flex;
    align-items: center;
    gap: 1.2rem;
    width: 100%;

    @media screen and ${theme.devices.desktop} {
      max-width: 30rem;
      min-width: 20rem;
    }
  `}
`;

export const SearchFieldInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 3rem;
    border: 0;
    font-size: ${theme.fontSizes.regularMedium};
    &:focus {
      outline: none;
    }
  `}
`;
