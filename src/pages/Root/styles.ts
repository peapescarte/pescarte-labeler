import styled, { css } from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const StyledToastContainer = styled(ToastContainer)`
  // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  &&&.Toastify__toast-container {
    ${({ theme }) => css`
      font-family: ${theme.fonts} !important;
      font-size: ${theme.fontSizes.regularMedium};
    `}
  }
  .Toastify__progress-bar {
    ${({ theme }) => css`
      background: ${theme.colors.primary80};
    `}
  }
  .Toastify__progress-bar--success {
    ${({ theme }) => css`
      background: ${theme.colors.success};
    `}
  }
  .Toastify__progress-bar--warning {
    ${({ theme }) => css`
      background: ${theme.colors.warning};
    `}
  }
  .Toastify__progress-bar--error {
    ${({ theme }) => css`
      background: ${theme.colors.error};
    `}
  }
`;
