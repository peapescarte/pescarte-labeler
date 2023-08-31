import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  height: 5rem;
  margin: 1.2rem 0;
  display: flex;
  align-items: center;
`;

export const LogoutContainer = styled.div`
  margin-left: auto;
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

export const UserContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.8rem;
  `}
`;

export const UserNameText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.regular};
  `}
`;

export const StyledLogo = styled.img``;

export const StyledNav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-left: 1rem;
    @media screen and ${theme.devices.desktop} {
      margin-left: 5rem;
    }
  `}
`;

export const StyledNavLink = styled(NavLink)`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.regularMedium};
    font-weight: 500;
    color: ${theme.colors.primary100};
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
      color: ${theme.colors.secondary};
    }

    &.active {
      text-decoration: underline;
      color: ${theme.colors.secondary};
    }
  `}
`;
