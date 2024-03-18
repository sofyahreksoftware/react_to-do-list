import { HashRouter, Route, Routes } from "react-router-dom";

import { Nav, NavList, StyledNavLink } from "./styledApp";
import Tasks from "./features/tasks/Tasks";
import About from "./features/about/About";

function App() {
  return (
    <HashRouter>
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

      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
