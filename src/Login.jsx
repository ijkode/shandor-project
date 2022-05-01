import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
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
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

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
          <button onClick={logout} class="button-55">
            {" "}
            התנתק
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
