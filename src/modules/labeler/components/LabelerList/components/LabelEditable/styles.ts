import styled from 'styled-components';
import { Input } from '../../../InputLabel/components';

export const StyledLabel = styled.span`
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

type StyledInputProps = {
  value: string;
};

export const StyledInput = styled(Input)<StyledInputProps>`
  font-size: ${(props) => props.theme.fontSizes.medium};
  border: 0;
  min-width: 5rem;
  height: fit-content;
  width: ${(props) => `calc(${props.value.length}ch + 2rem)`};
  border: 1px solid black;
  background-color: ${(props) => props.theme.colors.background};
`;
