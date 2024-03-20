import { Nav, NavList, StyledNavLink } from "./styled";

export const Navigation = () => (
  <Nav>
    <NavList>
      <StyledNavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Zadania
      </StyledNavLink>

      <StyledNavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        O autorze
      </StyledNavLink>
    </NavList>
  </Nav>
);
