import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
export function Navbar() {
  const [loginStatus, setLoginStatus] = useState(0);
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setLoginStatus(1);
      } else {
        setLoginStatus(0);
      }
      console.log(user);
    });
  }, []);

  return (
    <div class="topnav">
      <div class="topnav-right">
        <Link to="/"> דף הבית </Link>
        <Link to="HabitantProject"> פרויקט דיור </Link>
        <Link to="AssistanceProject"> פרויקט הכוון </Link>
      </div>
      <div class="topnav-left">
        <Link to="Login" class="Registration-Button">
          <span id="login">{loginStatus ? "התנתק" : "התחבר"}</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
