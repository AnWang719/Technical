import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Nav className="justify-content-end p-5">
      <NavLink to="Octopus">Octopus</NavLink>
      <NavLink to="SouthIsland">SouthIsland</NavLink>
    </Nav>
  );
}

export default Header;
