import styled from 'styled-components';

export const StyledInputLabelButton = styled.button`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: 2px solid black;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;
