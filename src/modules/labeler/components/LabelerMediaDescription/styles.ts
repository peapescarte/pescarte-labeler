import styled, { css } from 'styled-components';

export const MediaDescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const MediaDescriptionGroup = styled.div`
  width: 100%;
  display: flex;
`;

export const MediaDescriptionAutor = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    width: 100%;

    @media screen and ${theme.devices.desktop} {
      width: 40%;
    }
  `}
`;

export const MediaDescriptionDataText = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.regular};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `}
`;

export const MediaDescriptionDataTextHeader = styled.h6`
  ${({ theme }) => css`
    display: inline-flex;
    font-size: ${theme.fontSizes.regularMedium};
    font-weight: bold;
    white-space: nowrap;
    margin-right: 0.8rem;
  `}
`;

export const MediaDescriptionLabel = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.regularMedium};
    font-weight: bold;
    margin-bottom: 0.4rem;
  `}
`;

export const MediaDescriptionNotesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MediaDescriptionNotes = styled.textarea`
  ${({ theme }) => css`
    border: 1.5px solid ${theme.colors.border};
    border-radius: 4px;
    font-size: ${theme.fontSizes.regular};
    padding: 0.4rem;
    resize: none;
  `}
`;
