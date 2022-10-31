import styled from 'styled-components';
import { SelectCategory } from '../SelectCategory';

export const StyledLabelerList = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
`;

export const StyledLabelerListTitle = styled.h2``;

export const StyledSelectCategory = styled(SelectCategory)`
  height: 3rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

export const StyledLabelerListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 2px solid ${(props) => props.theme.colors.primary};
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.background};
`;

export const StyledLabelerListItens = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;
`;

export const StyledLabel = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;
