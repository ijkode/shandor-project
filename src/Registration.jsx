import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

function Register() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    gender: "",
    email: "",
    password: "",
    phone_number: "",
    proffesion: "",
    approval: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  const register = async () => {
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
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
        <form>
          <input
            class="form__input"
            placeholder="שם פרטי"
            name="fname"
            value={formData.fname}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            class="form__input"
            placeholder="שם משפחה"
            name="lname"
            value={formData.lname}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <label for="gender"> </label>
          <select id="gender" class="form__input">
            <option id="female">נקבה </option>
            <option id="male">זכר</option>
          </select>
          <br />
          <input
            class="form__input"
            placeholder="מספר טלפון"
            name="phone_number"
            value={formData.phone_number}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            class="form__input"
            placeholder="אימייל"
            name="email"
            onChange={(event) => {
              handleChange(event);
              setRegisterEmail(event.target.value);
            }}
          />
          <br />
          <input
            type="password"
            class="form__input"
            placeholder="סיסמא"
            name="password"
            onChange={(event) => {
              handleChange(event);
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
          <input
            type="checkbox"
            id="approval"
            name="approval"
            value={formData.approval}
            onChange={(e) => handleChange(e)}
          />
          <label for="approve">מאשר את תנאי השימוש באתר</label>
          <br />
          <br />
          <button onClick={register} class="button-55">
            {" "}
            צור משתמש
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
