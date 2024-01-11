import styled, { css } from 'styled-components';
import { DropDownSearch } from '../../modules/labeler/components/DropDownSearch';
import { Button } from '../../components/Button';

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.6rem;

    @media screen and ${theme.devices.desktop} {
      padding: 0 3.2rem;
    }
  `}
`;

export const StyledList = styled.div`
  ${({ theme }) => css`
    height: 100%;
    padding: 1.2rem;
    flex: 1;

    @media screen and ${theme.devices.desktop} {
      padding: 0;
    }
  `}
`;

export const StyledListMedia = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 100%;
    display: flex;
    gap: 1.6rem;
    flex-direction: column;
    margin-bottom: 3rem;

    @media screen and ${theme.devices.desktop} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.6rem;
    }
  `}
`;

export const StyledListEmpty = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem 0rem;
`;

export const StyledListEmptyText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.mediumLarge};
    font-weight: 500;
  `}
`;

export const StyledListMediaFilters = styled.div`
  ${({ theme }) => css`
    padding: 0.8rem 0rem;
    margin-top: 2rem;
    margin-bottom: 1.6rem;
    display: flex;
    gap: 0.8rem;
    flex-direction: column;

    @media screen and ${theme.devices.desktop} {
      flex-direction: row;
      justify-content: center;
    }
  `}
`;

export const MediaFiltersButtons = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
    @media screen and ${theme.devices.desktop} {
      width: fit-content;
      justify-content: flex-start;
      align-items: flex-start;
    }
  `}
`;

export const StyledDropDownSearch = styled(DropDownSearch)`
  ${({ theme }) => css`
    height: 4rem;
    width: 100%;
    @media screen and ${theme.devices.desktop} {
      max-width: 30rem;
      min-width: 20rem;
    }
  `}
`;

export const StyledDropDownTags = styled(StyledDropDownSearch)`
  height: 4rem;
  max-width: 100%;
  width: 100%;
`;

export const FilterTagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

export const FilterTagsItens = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  width: 100%;
`;

export const FilterTagsItensDesktop = styled(FilterTagsItens)`
  ${({ theme }) => css`
    display: none;
    @media screen and ${theme.devices.desktop} {
      display: flex;
    }
  `}
`;

export const FilterTagsItensMobile = styled(FilterTagsItens)`
  ${({ theme }) => css`
    display: flex;
    @media screen and ${theme.devices.desktop} {
      display: none;
    }
  `}
`;

export const FilterButton = styled(Button)`
  height: 4rem;
  padding: 0rem 1.6rem;
`;

export const ClearButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const LoadMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3.2rem;
`;
