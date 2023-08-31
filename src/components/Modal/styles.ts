import styled, { css } from 'styled-components';

export const ModalOverlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.5);
    z-index: ${theme.zIndex.modal};
    overflow-y: scroll;
    cursor: zoom-out;
  `}
`;

export const ModalContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100%;
    padding: 0 0.8rem;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen ${theme.devices.desktop} {
      padding: 1.6rem 3.2rem 1.6rem 3.2rem;
    }
  `}
`;
