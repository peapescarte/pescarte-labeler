import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 1.6rem;
`;

export const NotFoundContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotFoundText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.medium};
  `}
`;
