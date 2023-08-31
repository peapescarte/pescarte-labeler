import styled, { css } from 'styled-components';

export const StyledImageViwer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  `}
`;

export type imageObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
type StyledImageProps = {
  showImage: boolean;
  isBlurred: boolean;
  objectFit: imageObjectFit;
};

export const StyledImage = styled.img<StyledImageProps>`
  ${({ showImage, isBlurred, objectFit = 'fill' }) => css`
    width: 100%;
    height: auto;
    object-fit: ${objectFit};
    display: ${showImage ? 'block' : 'none'};
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
    width: 100%;
    text-align: center;
    font-size: ${theme.fontSizes.regularMedium};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: ${theme.zIndex.secondLayer};
  `}
`;
