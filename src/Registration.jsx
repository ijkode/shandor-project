import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase";

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
          <h1>הרשמה</h1>
          <br />
        </div>
        <input class="form__input" placeholder="שם פרטי" />
        <br />
        <input class="form__input" placeholder="שם משפחה" />
        <br />
        <label for="gender"> </label>
        <select id="gender" class="form__input">
          <option id="female">נקבה </option>
          <option id="male">זכר</option>
        </select>
        <br />
        <input class="form__input" placeholder="מספר טלפון" />
        <br />
        <input
          class="form__input"
          placeholder="אימייל"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <br />
        <input
          class="form__input"
          placeholder="סיסמא"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <br />
        <label for="usertype"> </label>
        <select id="type" class="form__input">
          <option id="proffesional">איש מקצוע </option>
          <option id="private">אדם פרטי</option>
        </select>
        <br />
        <input type="checkbox" id="approve" name="approve" />
        <label for="approve">מאשר את תנאי השימוש באתר</label>
        <br />
        <br />
        <button onClick={register} class="button-55">
          {" "}
          צור משתמש
        </button>
      </div>
    </div>
  );
}

export default Register;
