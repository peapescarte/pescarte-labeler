import styled, { css } from 'styled-components';
import { DropDown } from '../DropDown';

export const StyledLabelerList = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
`;

export const StyledLabelerListTitle = styled.h2``;

export const StyledDropDown = styled(DropDown)`
  margin-bottom: 1rem;
`;

export const StyledLabelerListBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 2px solid ${(props) => props.theme.colors.border};
    padding: 1rem 2rem 1rem 1rem;
    background-color: ${(props) => props.theme.colors.neutra5};
    border-radius: 4px;

    @media screen and ${theme.devices.desktop} {
      padding: 2rem;
    }
  `}
`;

export const StyledLabelerListItens = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 17rem;
    overflow-y: scroll;
    padding-left: 0.8rem;

    @media screen and ${theme.devices.desktop} {
      max-height: 100%;
      height: 100%;
    }
  `}
`;

export const InputLabelWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
    z-index: ${theme.zIndex.awaysOnTop};
    @media screen and ${theme.devices.desktop} {
      z-index: ${theme.zIndex.dropdown};
    }
  `}
`;

export const DropDownWrapper = styled.div`
  width: 100%;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.regularMedium};
    font-weight: bold;
    margin-bottom: 0.4rem;
  `}
`;
