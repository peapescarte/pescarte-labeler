import styled from 'styled-components';
import { IconPlus } from '../../../../../../common/icons/icon-plus';

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

export const StyledIcon = styled.div`
  display: flex;
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
