import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const Nav = styled.nav`
  background-color: teal;
  padding: 3px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
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
`;
