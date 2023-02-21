import styled from 'styled-components';
import { DropDown } from '../DropDown';

export const StyledLabelerList = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
`;

export const StyledLabelerListTitle = styled.h2``;

export const StyledDropDown = styled(DropDown)`
  margin-bottom: 1rem;
`;

export const StyledLabelerListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 2px solid ${(props) => props.theme.colors.border};
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.neutra5};
  border-radius: 4px;
`;

export const StyledLabelerListItens = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;
  padding-left: 0.8rem;
`;
