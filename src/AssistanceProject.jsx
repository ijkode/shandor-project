import React, { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { useNavigate } from "react-router-dom";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import $ from "jquery";
export function AssistanceProject() {
  $("body").on("click", "#scr3", function () {
    navigate("/Login");
  });
  const [user, loggedIn] = useAuthState(auth);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    ID: "",
    date_of_birth: "",
    phone_number: "",
    email: "",
    address: "",
    framework_field: "",
    framework_name: "",
    framework_years: "",
    full: "",
    partial: "",
    graduation: "",
    graduation_details: "",
    insurance_institute_allowance: "",
    insurance_institute_allowance_details: "",
    other: "",
    referrer_email: "",
    referrer_name: "",
    referrer_phone: "",
    referrer_proffesion: "",
    scholarship_details: "",
    tuition: "",
    timestamp: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  function nav() {
    navigate("/Login");
  }
  const docPage = () => {
    const formRef = collection(db, "Candidates for habitant project");
    const uid = auth.currentUser.uid;
    if (uid != null)
      setDoc(doc(formRef, uid), {
        fname: formData.fname,
        lname: formData.lname,
        ID: formData.ID,
        date_of_birth: formData.date_of_birth,
        framework_name: formData.framework_name,
        framework_field: formData.framework_field,
        framework_years: formData.framework_years,
        phone_number: formData.phone_number,
        email: formData.email,
        address: formData.address,
        full: formData.full,
        partial: formData.partial,
        referrer_name: formData.referrer_name,
        referrer_proffesion: formData.referrer_proffesion,
        referrer_phone: formData.referrer_phone,
        referrer_email: formData.referrer_email,
        graduation: formData.graduation,
        insurance_institute_allowance: formData.insurance_institute_allowance,
        insurance_institute_allowance_details:
          formData.insurance_institute_allowance_details,
        graduation_details: formData.graduation_details,
        other: formData.other,
        scholarship_details: formData.scholarship_details,
        tuition: formData.tuition,
        timestamp: serverTimestamp(),
      })
        .then(() => {
          // alert("success");
        })
        .catch((err) => {
          // alert("error");
        });
    navigate("/AssistanceProject/documents");
  };
  if (!user) {
    return (
      <div className="loggedIn">
        <div class="allThePage">
          <div class="AllDetails">
            <section className="banner">
              <h1 id="difh1">פרויקט דיור בוגרות</h1>
              {/* <p>Company Mission Statement goes here</p> */}
              <a id="scr3" className="btn-bgstroke">
                להתחברות לחץ
              </a>
            </section>
            <br />
            <ul class="tilesWrap">
              <li>
                <h2>01</h2>
                <p>פריסה ארצית ללא הגבלה גיאוגרפית</p>
              </li>
              <li>
                <h2>02</h2>
                <p>ליווי ועזרה בהתנהלות פיננסית של הצעירים/ות</p>
              </li>
              <li>
                <h2>03</h2>
                <p>עזרה במידת הצורך גם בדברים אישיים של הצעירים/ות</p>
              </li>
              <li>
                <h2>04</h2>
                <p>
                  תמיכה וסיוע בהיבטים בירוקרטיים עם גורמי חוץ כמו מוסדות לימוד
                  וכד'
                </p>
              </li>
            </ul>
          </div>
          <br />
          <div class="SubmitRequest"></div>
        </div>
      </div>
    );
  }

  return (
    <div class="allThePage">
      <div class="AllDetails">
        <section class="banner">
          <h1 id="difh1">פרויקט הכוון</h1>
          {/* <p>Company Mission Statement goes here</p> */}
          <a href="#scr1" className="btn-bgstroke">
            להרשמה לחץ
          </a>
        </section>
        <br />
        <ul class="tilesWrap">
          <li>
            <h2>01</h2>
            <p>פריסה ארצית ללא הגבלה גיאוגרפית</p>
          </li>
          <li>
            <h2>02</h2>
            <p>ליווי ועזרה בהתנהלות פיננסית של הצעירים/ות</p>
          </li>
          <li>
            <h2>03</h2>
            <p>עזרה במידת הצורך גם בדברים אישיים של הצעירים/ות</p>
          </li>
          <li>
            <h2>04</h2>
            <p>
              תמיכה וסיוע בהיבטים בירוקרטיים עם גורמי חוץ כמו מוסדות לימוד וכד'
            </p>
          </li>
        </ul>
      </div>
      <div id="scr1" class="SubmitRequest">
        <br />

        <br />
        <fieldset>
          <legend class="legendTitle">פרטים אישיים</legend>
          <form>
            <label for="fname">שם פרטי : </label>
            <input
              className="input1"
              type="text"
              id="fname"
              name="fname"
              requierd
              value={formData.fname}
              onChange={(e) => handleChange(e)}
            />
            <label for="lname">שם משפחה : </label>
            <input
              className="input1"
              type="text"
              id="lname"
              name="lname"
              required
              value={formData.lname}
              onChange={(e) => handleChange(e)}
            />
            <label for="ID">תעודת זהות : </label>
            <input
              className="input1"
              type="number"
              id="ID"
              name="ID"
              required
              value={formData.ID}
              onChange={(e) => handleChange(e)}
            />
            <label for="date_of_birth">תאריך לידה:</label>
            <input
              className="input1"
              type="text"
              id="date_of_birth"
              name="date_of_birth"
              placeholder="dd/mm/yyyy"
              required
              value={formData.date_of_birth}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />

            <label for="address"> כתובת: </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="input1"
            />
            <label for="phone_number"> נייד: </label>
            <input
              className="input1"
              type="number"
              id="phone_number"
              name="phone_number"
              required
              value={formData.phone_number}
              onChange={(e) => handleChange(e)}
            />
            <label for="email"> מייל : </label>
            <input
              className="input1"
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
          </form>
        </fieldset>
        <br />
        <br />

        <fieldset>
          <legend class="legendTitle">גורם מפנה</legend>
          <form>
            <label for="referrer_name"> שם : </label>
            <input
              className="input1"
              type="text"
              id="referrer_name"
              name="referrer_name"
              required
              value={formData.referrer_name}
              onChange={(e) => handleChange(e)}
            />
            <label for="referrer_proffesion"> תפקיד : </label>
            <input
              className="input1"
              type="text"
              id="referrer_proffesion"
              name="referrer_proffesion"
              required
              value={formData.referrer_proffesion}
              onChange={(e) => handleChange(e)}
            />
            <label for="referrer_phone"> טלפון : </label>
            <input
              className="input1"
              type="number"
              id="referrer_phone"
              name="referrer_phone"
              required
              value={formData.referrer_phone}
              onChange={(e) => handleChange(e)}
            />
            <label for="referrer_email"> מייל : </label>
            <input
              className="input1"
              type="email"
              id="referrer_email"
              name="referrer_email"
              required
              value={formData.referrer_email}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
          </form>
        </fieldset>
        <br />
        <br />

        <fieldset>
          <legend class="legendTitle">לימודים</legend>
          <label for="framework_name"> מוסד לימודים : </label>
          <input
            className="input1"
            type="text"
            id="framework_name"
            name="framework_name"
            required
            value={formData.framework_name}
            onChange={(e) => handleChange(e)}
          />
          <label for="framework_field"> תחום לימודים : </label>
          <input
            className="input1"
            type="text"
            id="framework_field"
            name="framework_field"
            required
            value={formData.framework_field}
            onChange={(e) => handleChange(e)}
          />
          <label for="framework_years"> מספר שנות לימודים : </label>
          <input
            className="input1"
            type="text"
            id="framework_years"
            name="framework_years"
            required
            value={formData.framework_years}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
          <label for="tuition"> היקף שכר לימוד : </label>
          <input
            className="input1"
            type="text"
            id="tuition"
            name="tuition"
            required
            value={formData.tuition}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
          <label for="graduation"> סיום לימודים : </label>
          <select id="graduation" required className="select1">
            <option id="full">בגרות מלאה </option>
            <option id="partial">בגרות חלקית </option>
          </select>
          <label for="graduation_details"> פירוט אודות הלימודים : </label>
          <input
            className="input1"
            type="text"
            id="graduation_details"
            name="graduation_details"
            value={formData.graduation_details}
            onChange={(e) => handleChange(e)}
          />

          <br />
          <br />
        </fieldset>
        <br />
        <br />

        <fieldset>
          <legend class="legendTitle">כללי</legend>
          <label for="other_schilarships">
            {" "}
            האם הוגשו בקשות למלגות נוספות :{" "}
          </label>
          <select id="other_schilarships" className="select1">
            <option id="other_schilarships">כן </option>
            <option id="not_other_schilarships">לא</option>
          </select>
          <label for="scholarships_details"> פירוט אודות המלגות : </label>
          <input
            className="input1"
            type="text"
            id="scholarships_details"
            name="scholarships_details"
            value={formData.scholarship_details}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
          <label for="insurance_institute_allowance">
            האם מקבל/ת קצבאות מביטוח לאומי/משרד הביטחון? :{" "}
          </label>
          <select id="insurance_institute_allowance" className="select1">
            <option id="insurance_institute_allowance">כן </option>
            <option id="not_insurance_institute_allowance">לא</option>
            <option id="other">אחר</option>
          </select>
          <label for="insurance_institute_allowance_details">
            {" "}
            פירוט אודות הקצבאות המתקבלות מביטוח לאומי :{" "}
          </label>
          <input
            className="input1"
            type="text"
            id="insurance_institute_allowance_details"
            name="insurance_institute_allowance_details"
            value={formData.insurance_institute_allowance_details}
            onChange={(e) => handleChange(e)}
          />

          <br />
          <br />
        </fieldset>
        <br />
        <br />

        <button class="button-55" onClick={docPage}>
          {" "}
          הבא
        </button>
      </div>
    </div>
  );
}

export default AssistanceProject;
