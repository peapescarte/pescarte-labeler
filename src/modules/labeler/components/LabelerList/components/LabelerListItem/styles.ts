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
    fill: ${(props) => props.theme.colors.primary};
  }
`;

export const StyledEditButton = styled.button`
  display: flex;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  margin-right: 1.5rem;
  margin-left: 1rem;
`;
