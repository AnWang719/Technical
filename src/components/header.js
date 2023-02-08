import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

//Header component to render navheader

function Header() {
  return (
    <Nav className="justify-content-end px-5 pt-5">
      <NavLink to="Octopus">Octopus</NavLink>
      <NavLink to="SouthIsland" className="px-3">
        SouthIsland
      </NavLink>
    </Nav>
  );
}

export default Header;
