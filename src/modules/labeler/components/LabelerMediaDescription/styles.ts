import styled, { css } from 'styled-components';

export const MediaDescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1.6rem 0;
`;

export const MediaDescriptionGroup = styled.div`
  width: 100%;
  display: flex;
`;

export const MediaDescriptionAutor = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

export const MediaDescriptionData = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  margin-left: 1.6rem;
  gap: 0.4rem;
`;

export const MediaDescriptionDataText = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.regular};
  `}
`;

export const MediaDescriptionLabel = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.medium};
    font-weight: bold;
    margin-bottom: 0.4rem;
  `}
`;

export const MediaDescriptionNotesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
`;

export const MediaDescriptionNotes = styled.textarea`
  ${({ theme }) => css`
    border: 1.5px solid ${theme.colors.border};
    border-radius: 4px;
    font-size: ${theme.fontSizes.regular};
    padding: 0.4rem;
  `}
`;
