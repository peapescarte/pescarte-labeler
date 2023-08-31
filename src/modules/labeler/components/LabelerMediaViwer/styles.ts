import styled, { css } from 'styled-components';

export const MediaViwerWrapper = styled.div`
  height: calc(100% - 6rem);
  box-shadow: -5px 5px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const MediaLoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const MediaLoadingText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.regularMedium};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: ${theme.zIndex.secondLayer};
  `}
`;
