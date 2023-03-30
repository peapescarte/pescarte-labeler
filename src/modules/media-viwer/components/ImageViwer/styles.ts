import styled, { css } from 'styled-components';

export const StyledImageViwer = styled.div`
  width: 100%;
  height: 100%;
`;

type StyledImageProps = {
  isLoading: boolean;
  isBlurred: boolean;
};

export const StyledImage = styled.img<StyledImageProps>`
  ${({ isLoading, isBlurred }) => css`
    width: 100%;
    height: 100%;
    visibility: ${isLoading ? 'hidden' : 'visible'};
    filter: ${isBlurred ? 'blur(5px)' : 'blur(0px)'};
  `}
`;

export const ImageLoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ImageLoadingText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.regularMedium};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: ${theme.zIndex.secondLayer};
  `}
`;
