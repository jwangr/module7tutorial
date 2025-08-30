import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar bg-body-tertiary fixed-top p-2 justify-content-center">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/bitcoin">
            Bitcoin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
