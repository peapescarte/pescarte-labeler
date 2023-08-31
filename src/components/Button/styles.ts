import styled, { DefaultTheme, css } from 'styled-components';

export type StyledButtonVariants = 'primary' | 'secondary';

export type StyledButtonProps = {
  variant: StyledButtonVariants;
};

const StyledButtonVariants = (
  theme: DefaultTheme,
  variant: StyledButtonVariants,
  disabled?: boolean,
) =>
  ({
    primary: css`
      border: none;
      color: ${theme.colors.white};
      background-color: ${disabled ? theme.colors.primary20 : theme.colors.primary80};
      :hover {
        background-color: ${disabled ? theme.colors.primary20 : theme.colors.primary100};
      }
    `,
    secondary: css`
      border: 1.5px solid ${disabled ? theme.colors.primary20 : theme.colors.primary80};
      color: ${disabled ? theme.colors.primary20 : theme.colors.primary80};
      background-color: transparent;
      :hover {
        color: ${disabled ? theme.colors.primary20 : theme.colors.primary100};
        border-color: ${disabled ? theme.colors.primary20 : theme.colors.primary100};
      }
    `,
  }[variant]);

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme, disabled, variant }) => css`
    font-family: ${theme.fonts};
    font-size: ${theme.fontSizes.regularMedium};
    border-radius: 0.4rem;
    width: fit-content;
    height: fit-content;
    padding: 1.6rem 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${disabled ? 'initial' : 'pointer'};
    ${StyledButtonVariants(theme, variant, disabled)}
  `}
`;
