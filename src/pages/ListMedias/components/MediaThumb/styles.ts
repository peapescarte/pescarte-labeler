import styled, { css } from 'styled-components';
import { ImageViwer } from '../../../../modules/media-viwer/components/ImageViwer';

export const MediaThumbContainer = styled.div`
  ${({ theme }) => css`
    padding: 0.4rem;
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.white};
    
    border: 1.5px solid ${theme.colors.border};
    border-radius: 4px;
    position: relative;
    
    cursor: zoom-in;
    flex: 1;

    height: 20rem;
    @media only screen and ${theme.devices.desktop} {
      min-height: unset;
      height: calc(45vh - 78px);
    }
  }

    &:hover {
      ${MediaThumbOverlay} {
        display: block;
      }
    }
  `}
`;

export const StyledMediaView = styled(ImageViwer)`
  ${({ theme }) => css`
    height: 20rem;
    @media screen and ${theme.devices.desktop} {
      height: 100%;
    }
  `}
`;

export const MediaThumbOverlay = styled.div`
  z-index: 3;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: transparent;

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
    box-shadow: inset 0px -50px 25px -15px rgba(0, 0, 0, 0.75);

    transition: all 0.5s ease-in-out;
  }
`;

export const MediaThumbOverlayFooter = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 0.8rem 0.8rem 0.8rem;
`;

export const MediaThumbOverlayText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutra5};
    font-size: ${theme.fontSizes.regular};
  `}
`;
