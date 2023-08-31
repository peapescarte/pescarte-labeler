import styled, { css } from 'styled-components';

export const ShowDesktop = styled.div`
  ${({ theme }) => css`
    display: none;
    @media screen and ${theme.devices.desktop} {
      display: block;
    }
  `}
`;
export const ShowMobile = styled.div`
  ${({ theme }) => css`
    display: block;
    @media screen and ${theme.devices.desktop} {
      display: none;
    }
  `}
`;
