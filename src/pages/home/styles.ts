import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 100%;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-areas: 'main side';
`;

export const StyledHeader = styled.header`
  grid-column-start: main;
  grid-column-end: side;
  grid-row: 1;
  height: 5rem;
  display: flex;
  align-items: center;
`;

export const StyledMain = styled.main`
  height: calc(100vh - 5rem);
  width: 100%;
  margin-right: 1rem;
  grid-area: main;
  grid-row: 2;
  display: flex;
  flex-direction: column;
`;

export const StyledAside = styled.aside`
  grid-area: side;
  grid-row: 2;
  margin-left: 1rem;
  width: 100%;
  height: calc(100vh - 5rem);
`;

export const StyledFooter = styled.footer`
  grid-column-start: main;
  grid-column-end: side;
  grid-row: 3;
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;

export const MediaViwerWrapper = styled.div`
  height: calc(100% - 6rem);
`;

export const InputLabelWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
