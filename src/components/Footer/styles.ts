import styled, { css } from 'styled-components';

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    border-top: 1px solid #eaeaea;
    padding: 2rem 0;

    @media screen and ${theme.devices.desktop} {
      flex-direction: row;
      gap: 3.2rem;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
      }
    }
  `}
`;

export const FooterPartners = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: space-around;
    @media screen and ${theme.devices.desktop} {
      gap: 3.2rem;
      justify-content: flex-start;
      align-items: center;
    }
  `}
`;

export const PartnersImage = styled.img``;

export const PartnersDisclaimer = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary80};
  `}
`;
