import styled, { css } from 'styled-components';

export const StyledMediaSave = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 1.6rem 0;
`;

export const StyledSaveButton = styled.button`
  ${({ theme, disabled }) => css`
    background-color: ${disabled ? theme.colors.primary20 : theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    border-radius: 0.4rem;
    width: fit-content;
    height: fit-content;
    padding: 1.6rem 2.4rem;
    font-size: ${theme.fontSizes.regular};
    cursor: ${disabled ? 'initial' : 'pointer'};
    :hover {
      background-color: ${disabled ? theme.colors.primary20 : theme.colors.primary60};
    }
  `}
`;
