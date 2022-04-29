import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <div class="topnav">
      <div class="topnav-right">
        <Link to="/"> דף הבית </Link>
        <Link to="Habitant Project"> פרויקט דיור </Link>
        <Link to="Assistance Project"> פרויקט הכוון </Link>
      </div>
      <div class="topnav-left">
        <Link to="Registrarion" class="Registration-Button">
          {" "}
          התחבר{" "}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;