import styled from 'styled-components';

export const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  margin-right: 1rem;
`;

export const StyledListItemTools = styled.div`
  display: flex;
`;
