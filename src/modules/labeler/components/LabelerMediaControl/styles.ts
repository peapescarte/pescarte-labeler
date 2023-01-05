import styled from 'styled-components';

export const StyledMediaControlContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const StyledMediaControlButton = styled.button`
  border-radius: 0;
  border: 1px solid black;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.background};
  cursor: pointer;
`;

export const StyledIcon = styled.img`
  z-index: 2;
  width: 1.5rem;
`;
