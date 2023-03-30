import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  height: 100%;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-areas: 'main side';
`;

export const LabelerPageHeader = styled.div`
  grid-column-start: main;
  grid-column-end: side;
  grid-row: 1;
`;

export const StyledMain = styled.main`
  height: calc(100vh - 7.5rem);
  width: 100%;
  margin-right: 1rem;
  grid-area: main;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1600px) {
    height: auto;
  }
`;

export const StyledAside = styled.aside`
  grid-area: side;
  width: 100%;
`;

export const AsideList = styled(StyledAside)`
  grid-row: 2;
  margin-left: 1rem;
  height: calc(100vh - 7.5rem);
  @media screen and (min-width: 1600px) {
    height: auto;
  }
`;

export const StyledSection = styled.section`
  grid-area: main;
  width: 100%;
`;

export const SectionDescription = styled(StyledSection)`
  grid-row: 3;
`;

export const AsideSave = styled(StyledAside)`
  grid-row: 3;
`;

export const StyledFooter = styled.footer`
  grid-column-start: main;
  grid-column-end: side;
  grid-row: 4;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;

export const FooterPartners = styled.div`
  display: flex;
  gap: 3.2rem;
  align-items: center;
`;

export const PartnersImage = styled.img``;

export const PartnersDisclaimer = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;

export const ControllersWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.8rem 0rem;
`;
