import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import logoSmall from "./logosmall.jpeg";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
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
  const navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="topnav">
      <div className="topnav-right">
        <Link to="/"> דף הבית </Link>
        <img src={logoSmall} alt="logo" className="photosmall" />
        <Link to="HabitantProject"> פרויקט דיור </Link>
        <Link to="AssistanceProject"> פרויקט הכוון </Link>
      </div>
      <div className="topnav-left">
        {loginStatus ? (
          <Link to="Logout" className="Registration-Button">
            <span id="Logout" onClick={logout}>
              {"התנתק"}
            </span>
          </Link>
        ) : (
          <Link to="Login" className="Registration-Button">
            <span id="login">{"התחבר"}</span>
          </Link>
        )}
        {adminStatus ? (
          <Link to="Admin" className="admin-button">
            <span id="admin">{"ניהול"}</span>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;
