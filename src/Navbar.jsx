import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <div class="topnav">
      <div class="topnav-right">
        <Link to="/"> דף הבית </Link>
        <Link to="HabitantProject"> פרויקט דיור </Link>
        <Link to="AssistanceProject"> פרויקט הכוון </Link>
      </div>
      <div class="topnav-left">
        <Link to="Login" class="Registration-Button">
          התחבר
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
