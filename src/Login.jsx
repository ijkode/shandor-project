import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import { app, auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
function Register() {
  const [user1, loggedIn] = useAuthState(auth);
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});
  // useEffect(() => {
  //   app.auth().onAuthStateChanged((user) => {
  //     setUser(user);
  //   });
  // }, []);
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      swal("התחברת בהצלחה");
      navigate("/");
    } catch (error) {
      swal("משתמש לא קיים");
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };
  if (user) {
    return (
      <div className="App">
        <div>
          <div>
            <br />
            <input
              class="form__input"
              placeholder="אימייל"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
            <br />
            <br />
            <input
              type="password"
              class="form__input"
              placeholder="סיסמא"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
            <br />
            <br />
            <button onClick={login} class="button-55">
              {" "}
              כניסה
            </button>
            <br />
            <br />
          </div>
          <a href="/Registration">הרשמה</a>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <div>
        <div>
          <br />
          <input
            class="form__input"
            placeholder="אימייל"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="password"
            class="form__input"
            placeholder="סיסמא"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <br />
          <br />
          <button onClick={login} class="button-55">
            {" "}
            כניסה
          </button>
          <br />
          <br />
          <a href="/Registration">הרשמה</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
