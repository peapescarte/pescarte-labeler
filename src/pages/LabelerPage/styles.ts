import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    height: 100%;
    padding: 0 1.6rem;
    display: grid;
    grid-template-columns: 100%;
    grid-template-areas: 'main';

    @media screen and ${theme.devices.desktop} {
      padding: 0 3.2rem;
      grid-template-columns: 70% 30%;
      grid-template-areas: 'main side';
    }
  `}
`;

export const LabelerPageHeader = styled.div`
  ${({ theme }) => css`
    grid-column-start: main;
    grid-row: 1;
    @media screen and ${theme.devices.desktop} {
      padding: 0 2rem;
      grid-column-start: main;
      grid-column-end: side;
      grid-row: 1;
    }
  `}
`;

export const StyledMain = styled.main`
  ${({ theme }) => css`
    width: 100%;
    grid-area: main;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    min-height: 30rem;

    @media screen and ${theme.devices.desktop} {
      height: calc(100vh - 7.5rem);
    }

    @media screen and ${theme.devices.ultrawide} {
      min-height: calc(100vh - 30rem);
      height: auto;
    }
  `}
`;

export const StyledAside = styled.aside`
  ${({ theme }) => css`
    width: 100%;
    grid-area: main;

    @media screen and ${theme.devices.desktop} {
      grid-area: side;
    }
  `}
`;

export const AsideList = styled(StyledAside)`
  ${({ theme }) => css`
    grid-row: 3;

    @media screen and ${theme.devices.desktop} {
      padding-left: 1rem;
      height: calc(100vh - 7.5rem);
      grid-row: 2;
    }
  `}
`;

export const StyledSection = styled.section`
  grid-area: main;
  width: 100%;
`;

export const SectionDescription = styled(StyledSection)`
  ${({ theme }) => css`
    grid-row: 4;
    @media screen and ${theme.devices.desktop} {
      grid-row: 3;
      margin-bottom: 1.6rem;
    }
  `}
`;

export const AsideSave = styled(StyledAside)`
  ${({ theme }) => css`
    grid-row: 5;
    margin-bottom: 3rem;
    @media screen and ${theme.devices.desktop} {
      margin-bottom: 0;
      grid-row: 3;
    }
  `}
`;

export const StyledFooter = styled.div`
  grid-column-start: main;
  grid-row: 6;
  display: flex;
  align-items: flex-end;
  padding-bottom: 1rem;
  ${({ theme }) => css`
    @media screen and ${theme.devices.desktop} {
      padding: 0;
      grid-column-end: side;
      grid-row: 4;
      flex: 1;
    }
  `}
`;

export const ControllersWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0.8rem 0rem;
`;
