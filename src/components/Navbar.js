import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { ThemeContext } from "./../context/theme.context";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={"Navbar " + theme}>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "selected" : undefined)}
        >
          Home
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "selected" : undefined)}
        >
          Projects
        </NavLink>
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "dark 🌜" : "light 🟡"}
      </button>
    </nav>
  );
}

export default Navbar;
