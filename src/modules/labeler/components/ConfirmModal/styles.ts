import styled, { css } from 'styled-components';
import { Button } from '../../../../components/Button';

export const ModalCloseButton = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
  `}
`;

export const ConfirmModalContainer = styled.div`
  ${({ theme }) => css`
    max-width: 40rem;
    border-radius: 0.5rem !important;
    padding: 1.6rem;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  `}
`;

export const ConfirmModalHeader = styled.h2`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.6rem;
  `}
`;

export const ConfirmModalHeaderTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.mediumLarge};
    color: black;
  `}
`;

export const ConfirmModalBody = styled.div`
  ${() => css``}
`;

export const ConfirmModalText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.regularMedium};
  `}
`;

export const ConfirmModalFooter = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `}
`;

export const ConfirmModalButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    align-items: center;
  `}
`;

export const ConfirmModalCancelButton = styled(Button)`
  ${({ theme }) => css``}
`;

export const ConfirmModalContinueButton = styled(Button)`
  ${({ theme }) => css``}
`;
