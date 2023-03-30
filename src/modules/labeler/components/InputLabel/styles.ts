import styled from 'styled-components';
import { SubmitButton } from './components';

export const InputLabelForm = styled.form`
  display: flex;
  align-items: center;
`;

export const StyledSubmitButton = styled(SubmitButton)`
  margin-left: 0.4rem;
  &:hover {
    cursor: pointer;
  }
`;
