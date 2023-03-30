import { ChevronDown } from 'lucide-react';
import styled, { css } from 'styled-components';

export const StyledSearchField = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchFieldInputWrapper = styled.div`
  position: relative;
`;

export const SearchFieldInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    border: 1.5px solid ${theme.colors.border};
    height: 3rem;
    border-radius: 4px;
    padding-left: 1rem;
    padding-right: 2.5rem;
    font-size: ${theme.fontSizes.regularMedium};
    text-overflow: ellipsis;
  `}
`;

type SearchFieldListProps = {
  show: boolean;
};

export const SearchFieldList = styled.ul<SearchFieldListProps>`
  ${({ theme, show }) => css`
    position: absolute;
    display: ${show ? 'flex' : 'none'};
    list-style-type: none;
    flex-direction: column;
    background-color: ${theme.colors.white};
    width: 100%;
    border: 1.5px solid ${theme.colors.border};
    border-radius: 0 0 4px 4px;
    border-top: none;
    padding: 1.6rem 1.2rem 0.8rem 1.2rem;
  `}
`;

export const SearchFieldListItem = styled.li`
  ${({ theme }) => css`
    cursor: pointer;
    font-size: ${theme.fontSizes.regularMedium};
    margin-bottom: 0.8rem;
    width: 100%;
    :hover {
      background-color: ${theme.colors.background};
    }
  `}
`;

export const SearchFieldExtraItem = styled.li`
  ${({ theme }) => css`
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
    color: ${theme.colors.background};
  `}
`;

type ArrowIconProps = {
  menuOpen: boolean;
};

export const ArrowIcon = styled(ChevronDown)<ArrowIconProps>`
  position: absolute;
  right: 0.8rem;
  top: 0;
  width: 1.5rem;
  height: 100%;
  pointer-events: none;
  transition: transform 0.5s ease;
  ${(props) => props.menuOpen && 'transform: rotate(180deg)'}
`;
