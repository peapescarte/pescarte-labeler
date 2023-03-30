import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  padding: 0 1.6rem;
`;

export const StyledList = styled.div``;

export const StyledListMedia = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

export const MediaThumbContainer = styled.div`
  ${({ theme }) => css`
    padding: 0.4rem;
    display: flex;
    justify-content: center;
    flex: 0 0 24%;
    height: calc(45vh - 78px);

    border: 1.5px solid ${theme.colors.border};
    border-radius: 4px;
  `}
`;

export const MediaThumbImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;

export const StyledListMediaFilters = styled.div`
  padding: 0.8rem;
`;
