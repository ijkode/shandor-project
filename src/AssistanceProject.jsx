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
import dateFormat, { masks } from "dateformat";
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
    address: "",
    phone_number: "",
    email: "",
    referrer_name: "",
    referrer_proffesion: "",
    referrer_phone: "",
    referrer_email: "",
    framework_name: "",
    framework_field: "",
    framework_years: "",
    tuition: "",
    graduation_details: "",
    scholarships_details: "",
    full: "",
    partial: "",
    graduation: "",
    insurance_institute_allowance: "",
    insurance_institute_allowance_details: "",
    other: "",
    scholarship_details: "",
    timestamp: "",
  });
  const handleChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === "date_of_birth") {
      let date = dateFormat(e.target.value, "dd/mm/yyyy");
      setFormData({ ...formData, [e.target.name]: date });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  const handleSelecetChange = (e) => {
    // if (e.target.value === false) {
    //   e.target.value = true;
    // }

    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const navigate = useNavigate();
  function nav() {
    navigate("/Login");
  }

  const docPage = () => {
    let flag = 0;
    for (const [key, value] of Object.entries(formData)) {
      if (`${value}` === "") {
        let newid = key + "1";
        let html = document.getElementById(newid).innerHTML;
        let error = "הזן " + html;
        const editedError = error.slice(0, -2);
        let id = "#" + key;
        $(id).attr("placeholder", editedError);
        var element = document.getElementById(key);
        element.scrollIntoView();
        flag = 1;
        break;
      }
      if (key === "scholarships_details") {
        break;
      }
    }
    if (flag === 0) {
      const formRef = collection(db, "Candidates for habitant project");
      const uid = auth.currentUser.uid;
      if (uid != null)
        setDoc(doc(formRef, uid), {
          fname: formData.fname,
          lname: formData.lname,
          ID: formData.ID,
          date_of_birth: formData.date_of_birth,
          address: formData.address,
          framework_name: formData.framework_name,
          framework_field: formData.framework_field,
          framework_years: formData.framework_years,
          phone_number: formData.phone_number,
          email: formData.email,
          full: formData.full,
          partial: formData.partial,
          referrer_name: formData.referrer_name,
          referrer_proffesion: formData.referrer_proffesion,
          referrer_phone: formData.referrer_phone,
          referrer_email: formData.referrer_email,
          scholarships_details: formData.scholarships_details,
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
    }
  };
  if (!user) {
    return (
      <div className="loggedIn">
        <div className="allThePage">
          <div className="AllDetails">
            <section className="banner">
              <h1 id="difh1">פרויקט דיור בוגרות</h1>
              {/* <p>Company Mission Statement goes here</p> */}
              <a id="scr3" className="btn-bgstroke">
                להתחברות לחץ
              </a>
            </section>
            <br />
            <ul className="tilesWrap">
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
          <div className="SubmitRequest"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="allThePage">
      <div className="AllDetails">
        <section className="banner">
          <h1 id="difh1">פרויקט הכוון</h1>
          {/* <p>Company Mission Statement goes here</p> */}
          <a href="#scr1" className="btn-bgstroke">
            להרשמה לחץ
          </a>
        </section>
        <br />
        <ul className="tilesWrap">
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
      <section className="banner2">
        {/* <p>Company Mission Statement goes here</p> */}
        <a href="#private" className="btn-bgstroke1">
          פרטים אישיים
        </a>
        <a href="#social" className="btn-bgstroke1">
          גורם מפנה
        </a>
        <a href="#study" className="btn-bgstroke1">
          לימודים
        </a>
        <a href="#general" className="btn-bgstroke1">
          כללי
        </a>
      </section>
      <div id="scr1" className="SubmitRequest">
        <br />
        <br />
        <form>
          <fieldset>
            <legend id="private" className="legendTitle">
              פרטים אישיים
            </legend>

            <label id="fname1" htmlFor="fname">
              שם פרטי :{" "}
            </label>
            <input
              className="input1"
              type="text"
              id="fname"
              name="fname"
              requierd
              value={formData.fname}
              onChange={(e) => handleChange(e)}
            />
            <label id="lname1" htmlFor="lname">
              שם משפחה :{" "}
            </label>
            <input
              className="input1"
              type="text"
              id="lname"
              name="lname"
              required
              value={formData.lname}
              onChange={(e) => handleChange(e)}
            />
            <label id="ID1" htmlFor="ID">
              תעודת זהות :{" "}
            </label>
            <input
              className="input1"
              type="number"
              id="ID"
              name="ID"
              required
              value={formData.ID}
              onChange={(e) => handleChange(e)}
            />
            <label id="date_of_birth1" htmlFor="date_of_birth">
              תאריך לידה:
            </label>
            <input
              className="input1"
              type="date"
              id="date_of_birth"
              name="date_of_birth"
              required
              value={formData.date_of_birth}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />

            <label id="address1" htmlFor="address">
              {" "}
              כתובת:{" "}
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="input1"
              value={formData.address}
              onChange={(e) => handleChange(e)}
            />
            <label id="phone_number1" htmlFor="phone_number">
              {" "}
              נייד:{" "}
            </label>
            <input
              className="input1"
              type="number"
              id="phone_number"
              name="phone_number"
              required
              value={formData.phone_number}
              onChange={(e) => handleChange(e)}
            />
            <label id="email1" htmlFor="email">
              {" "}
              מייל :{" "}
            </label>
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
          </fieldset>
          <br />
          <br />

          <fieldset>
            <legend id="social" className="legendTitle">
              גורם מפנה
            </legend>

            <label id="referrer_name1" htmlFor="referrer_name">
              {" "}
              שם :{" "}
            </label>
            <input
              className="input1"
              type="text"
              id="referrer_name"
              name="referrer_name"
              required={true}
              value={formData.referrer_name}
              onChange={(e) => handleChange(e)}
            />
            <label id="referrer_proffesion1" htmlFor="referrer_proffesion">
              {" "}
              תפקיד :{" "}
            </label>
            <input
              className="input1"
              type="text"
              id="referrer_proffesion"
              name="referrer_proffesion"
              required={true}
              value={formData.referrer_proffesion}
              onChange={(e) => handleChange(e)}
            />
            <label id="referrer_phone1" htmlFor="referrer_phone">
              {" "}
              טלפון :{" "}
            </label>
            <input
              className="input1"
              type="number"
              id="referrer_phone"
              name="referrer_phone"
              required={true}
              value={formData.referrer_phone}
              onChange={(e) => handleChange(e)}
            />
            <label id="referrer_email1" htmlFor="referrer_email">
              {" "}
              מייל :{" "}
            </label>
            <input
              className="input1"
              type="email"
              id="referrer_email"
              name="referrer_email"
              required={true}
              value={formData.referrer_email}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
          </fieldset>
          <br />
          <br />

          <fieldset>
            <legend id="study" className="legendTitle">
              לימודים
            </legend>
            <label id="framework_name1" htmlFor="framework_name">
              {" "}
              מוסד לימודים :{" "}
            </label>
            <input
              className="input1"
              type="text"
              id="framework_name"
              name="framework_name"
              required={true}
              value={formData.framework_name}
              onChange={(e) => handleChange(e)}
            />
            <label id="framework_field1" htmlFor="framework_field">
              {" "}
              תחום לימודים :{" "}
            </label>
            <input
              className="input1"
              type="text"
              id="framework_field"
              name="framework_field"
              required={true}
              value={formData.framework_field}
              onChange={(e) => handleChange(e)}
            />
            <label id="framework_years1" htmlFor="framework_years">
              {" "}
              מספר שנות לימודים :{" "}
            </label>
            <input
              className="input1"
              type="text"
              id="framework_years"
              name="framework_years"
              required={true}
              value={formData.framework_years}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
            <label id="tuition1" htmlFor="tuition">
              {" "}
              היקף שכר לימוד :{" "}
            </label>
            <input
              className="input1"
              type="text"
              id="tuition"
              name="tuition"
              required={true}
              value={formData.tuition}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
            <label htmlFor="graduation"> סיום לימודים : </label>
            <select
              id="graduation"
              required
              className="select1"
              onChange={(e) => handleSelecetChange(e)}
            >
              <option value="" selected disabled hidden>
                בחר
              </option>
              <option id="full" value="בגרות מלאה">
                בגרות מלאה{" "}
              </option>
              <option id="partial" value="בגרות חלקית">
                בגרות חלקית{" "}
              </option>
              <option id="full" value="אחר">
                אחר{" "}
              </option>
            </select>
            <label id="graduation_details1" htmlFor="graduation_details">
              {" "}
              פירוט אודות הלימודים :{" "}
            </label>
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
            <legend id="general" className="legendTitle">
              כללי
            </legend>
            <label htmlFor="other_schilarships">
              {" "}
              האם הוגשו בקשות למלגות נוספות :{" "}
            </label>
            <select
              id="other_schilarships"
              className="select1"
              onChange={(e) => handleSelecetChange(e)}
            >
              <option value="" selected disabled hidden>
                בחר
              </option>
              <option id="other_schilarships" value="כן">
                כן{" "}
              </option>
              <option id="not_other_schilarships" value="לא">
                לא
              </option>
            </select>
            <label id="scholarships_details1" htmlFor="scholarships_details">
              {" "}
              פירוט אודות המלגות :{" "}
            </label>
            <input
              className="input1"
              type="text"
              id="scholarships_details"
              name="scholarships_details"
              value={formData.scholarships_details}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
            <label htmlFor="insurance_institute_allowance">
              האם מקבל/ת קצבאות מביטוח לאומי/משרד הביטחון? :{" "}
            </label>
            <select
              id="insurance_institute_allowance"
              className="select1"
              onChange={(e) => handleSelecetChange(e)}
            >
              <option value="" selected disabled hidden>
                בחר
              </option>
              <option id="insurance_institute_allowance" value="כן">
                כן{" "}
              </option>
              <option id="not_insurance_institute_allowance" value="לא">
                לא
              </option>
              <option id="other">אחר</option>
            </select>
            <label
              id="insurance_institute_allowance_details1"
              htmlFor="insurance_institute_allowance_details"
            >
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
        </form>
        <button className="button-55" onClick={docPage}>
          {" "}
          הבא
        </button>
      </div>
    </div>
  );
}

export default AssistanceProject;
