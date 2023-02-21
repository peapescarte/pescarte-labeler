import styled from 'styled-components';
import { DropDown } from '../DropDown';
import { SubmitButton } from './components';

export const InputLabelForm = styled.form`
  display: flex;
  align-items: center;
`;

export const StyledDropDown = styled(DropDown)`
  width: 12rem;
`;

export const StyledSubmitButton = styled(SubmitButton)`
  margin-left: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
