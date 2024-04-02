import { BurgerButton, BurgerBar, Nav, NavList, StyledNavLink } from "./styled";
import { useState } from "react";

export const Navigation = () => {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNavVisible = () => {
    setNavVisible((navVisible) => !navVisible);
  };

  return (
    <>
      <BurgerButton aria-label="Menu" onClick={toggleNavVisible}>
        <BurgerBar />
        <BurgerBar />
        <BurgerBar />
      </BurgerButton>
      <Nav $visible={navVisible}>
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
    </>
  );
};
