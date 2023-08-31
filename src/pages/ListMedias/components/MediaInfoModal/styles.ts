import styled, { css } from 'styled-components';

export const MediaInfoModalContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-radius: 0.5rem !important;
    padding: 1.6rem;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    @media screen and ${theme.devices.desktop} {
      width: 50vw;
    }
  `}
`;

export const ModalCloseButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const MediaInfoModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MediaInfoModalTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.regularMedium};
  `}
`;

export const MediaInfoModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
`;
export const MediaInfoModalImage = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 20rem;

    @media screen and ${theme.devices.desktop} {
      height: 30rem;
    }
  `}
`;

export const MediaInfoModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

export const MediaInfoModalContentItem = styled.div`
  display: flex;
  gap: 0.4rem;
  width: 100%;
`;

export const MediaInfoModalText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.regular};
  `}
`;

export const MediaInfoModalTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const MediaInfoModalTag = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.neutra20};
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    width: fit-content;
  `}
`;
