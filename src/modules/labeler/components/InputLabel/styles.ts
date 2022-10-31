import styled from 'styled-components';
import { SelectCategory } from '../SelectCategory';
import { SubmitButton } from './components';

export const InputLabelForm = styled.form`
  display: flex;
`;

export const StyledSelectCategory = styled(SelectCategory)`
  height: 3rem;
  border: 1px solid black;
`;

export const StyledSubmitButton = styled(SubmitButton)`
  margin-left: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
