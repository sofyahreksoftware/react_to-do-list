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

  &.active {
    font-weight: 900;
  }
`;
