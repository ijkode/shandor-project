import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import logoSmall from "./logosmall.jpeg";
export function Navbar() {
  const [loginStatus, setLoginStatus] = useState(0);
  const [adminStatus, setAdminStatus] = useState(0);
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setLoginStatus(1);
        if (auth.currentUser.uid == "1TYjALnIrYVcUwqb5vVjbnHkTjm1") {
          setAdminStatus(1);
        }
      } else {
        setLoginStatus(0);
        setAdminStatus(0);
      }
    });
  }, []);
  return (
    <div className="topnav">
      <div className="topnav-right">
        <Link to="/"> דף הבית </Link>
        <img src={logoSmall} alt="logo" className="photosmall" />
        <Link to="HabitantProject"> פרויקט דיור </Link>
        <Link to="AssistanceProject"> פרויקט הכוון </Link>
      </div>
      <div className="topnav-left">
        <Link to="Login" class="Registration-Button">
          <span id="login">{loginStatus ? "התנתק" : "התחבר"}</span>
        </Link>
        <Link to="Admin" class="admin-button">
          <span id="admin">{adminStatus ? "ניהול" : ""}</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
