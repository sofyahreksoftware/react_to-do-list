import { useState } from "react";

import { toTasks, toAbout } from "../../routes";
import { BurgerButton, BurgerBar, Nav, NavList, StyledNavLink } from "./styled";

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
            to={toTasks()}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Zadania
          </StyledNavLink>

          <StyledNavLink
            to={toAbout()}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            O autorze
          </StyledNavLink>
        </NavList>
      </Nav>
    </>
  );
};
