import styled, { css } from 'styled-components';

export const StyledLabel = styled.span`
  ${({ theme }) => css`
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.neutra80};
  `}
`;

type StyledInputProps = {
  value: string;
};

export const StyledInput = styled.input<StyledInputProps>`
  font-size: ${(props) => props.theme.fontSizes.medium};
  min-width: 5rem;
  height: fit-content;
  width: ${(props) => `calc(${props.value.length}ch + 2rem)`};
  border: 1px solid black;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.background};
  margin: 0;
  padding-left: 0.5rem;
`;
