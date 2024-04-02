import { NavLink } from "react-router-dom";

import styled, { css } from "styled-components";

export const BurgerButton = styled.button`
  display: none;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 5px;
    padding: 7px 10px;
    border: solid 1px ${({ theme }) => theme.colors.teal};
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.teal};
    -webkit-box-shadow: inset 16px 0px 100px 54px rgba(0, 128, 128, 1);
    -moz-box-shadow: inset 16px 0px 100px 54px rgba(0, 128, 128, 1);
    box-shadow: inset 16px 0px 100px 54px rgba(0, 128, 128, 1);
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 1000;
    display: flex;
    flex-direction: column;

    &.active {
      border: solid 1px ${({ theme }) => theme.colors.black};
    }
  }
`;

export const BurgerBar = styled.span`
  margin: 3px 0;
  background-color: ${({ theme }) => theme.colors.white};
  border: solid 1.4px ${({ theme }) => theme.colors.white};
  border-radius: 2px;
  width: 20px;
  display: block;
`;

export const Nav = styled.nav`
  background-color: teal;
  padding: 3px;
  top: 0;
  width: 100%;
  position: fixed;
  transition: top 0.5s ease;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    ${({ $visible }) =>
      !$visible &&
      css`
        top: -100%;
      `}
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  transition: transform 1s;

  &.active {
    font-weight: 900;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    padding: 6px;
  }
`;
