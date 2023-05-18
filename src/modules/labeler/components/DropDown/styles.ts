import { ChevronDown } from 'lucide-react';
import styled, { css } from 'styled-components';
export const StyledDropDown = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-width: fit-content;
    position: relative;
    color: ${theme.colors.neutra80};
  `}
`;

type DropDownFieldProps = {
  menuOpen: boolean;
};

const DropDownFieldModifiers = {
  open: () => css`
    border-bottom: none;
    border-radius: 4px 4px 0 0;
  `,
  closed: () => css`
    border-radius: 4px;
  `,
};

export const DropDownField = styled.div<DropDownFieldProps>`
  ${({ theme, menuOpen }) => css`
    border: 1.5px solid ${theme.colors.border};
    height: 4rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.2rem;
    background-color: white;
    ${menuOpen ? DropDownFieldModifiers['open'] : DropDownFieldModifiers['closed']}
  `}
`;

export const DropDownFieldText = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.regular};
  `}
`;

type ArrowIconProps = {
  menuOpen: boolean;
};

export const ArrowIcon = styled(ChevronDown)<ArrowIconProps>`
  width: 1.5rem;
  margin-left: 0.4rem;
  transition: transform 0.5s ease;
  ${(props) => props.menuOpen && 'transform: rotate(180deg)'}
`;

type OptionsWrapperProps = {
  show: boolean;
};

export const OptionsWrapper = styled.ul<OptionsWrapperProps>`
  ${({ theme, show }) => css`
    position: absolute;
    top: 4rem;
    left: 0;
    z-index: ${theme.zIndex.dropdown};
    display: ${show ? 'block' : 'none'};

    max-width: 30rem;
    width: 100%;
    min-width: fit-content;
    border: 1.5px solid ${theme.colors.border};
    border-radius: 0 0 4px 4px;
    border-top: none;

    padding: 1.2rem 1.2rem 0 1.2rem;
    background-color: ${theme.colors.white};
  `}
`;

export const OptionsWrapperDivider = styled.div`
  height: 0.125rem;
  width: 90%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.colors.border};
`;
