import {
  addDoc,
  collection,
  setDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import { auth, db } from "./firebase";
import register from "./register.png";
import $ from "jquery";
export function HabitantProject() {
  $("body").on("click", "#scr3", function () {
    navigate("/Login");
  });
  const [user, loggedIn] = useAuthState(auth);
  const formRef = collection(db, "Candidates for assistance project");
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    ID: "",
    date_of_birth: "",
    born_country: "",
    year_of_immigration: "",
    hmo: "",
    doctor: "",
    hmo_branch: "",
    hmo_phone: "",
    current_framework: "",
    framework_name: "",
    framework_address: "",
    framework_after_school: "",
    phone_number: "",
    email: "",
    referrer_name: "",
    referrer_proffesion: "",
    referrer_phone: "",
    referrer_email: "",
    bureau_name: "",
    social_worker_name: "",
    social_worker_role: "",
    social_worker_phone: "",
    social_worker_email: "",
    family_background: "",
    parents_status: "",
    family_status: "",
    mother_name: "",
    mother_address: "",
    connection_with_mother: "",
    father_name: "",
    father_address: "",
    connection_with_father: "",
    connection_with_relatives: "",
    relative_first_name: "",
    relative_last_name: "",
    relative_address: "",
    relative_phone: "",
    graduation: "",
    graduation_details: "",
    teenage_status_details: "",
    timestamp: "",
    medical_problem: false,
    drugs_and_alcohol: false,
    violent_incidents: false,
    eating_disorders: false,
    suicidal_attempts: false,
    criminal_record: false,
    learning_disabilities: false,
    allowances: false,
  });
  const handlecheckBoxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: true });
  };
  const handleChange = (e) => {
    // if (e.target.value === false) {
    //   e.target.value = true;
    // }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  function nav() {
    navigate("/Login");
  }
  const habitantDocPage = () => {
    const uid = auth.currentUser.uid;

    const formRef = collection(db, "Candidates for assistance project");
    if (uid != null)
      setDoc(doc(formRef, uid), {
        fname: formData.fname,
        lname: formData.lname,
        ID: formData.ID,
        date_of_birth: formData.date_of_birth,
        born_country: formData.born_country,
        year_of_immigration: formData.year_of_immigration,
        hmo: formData.hmo,
        doctor: formData.doctor,
        hmo_branch: formData.hmo_branch,
        hmo_phone: formData.hmo_phone,
        current_framework: formData.current_framework,
        framework_name: formData.framework_name,
        framework_address: formData.framework_address,
        framework_after_school: formData.framework_after_school,
        phone_number: formData.phone_number,
        email: formData.email,
        referrer_name: formData.referrer_name,
        referrer_proffesion: formData.referrer_proffesion,
        referrer_phone: formData.referrer_phone,
        referrer_email: formData.referrer_email,
        bureau_name: formData.bureau_name,
        social_worker_name: formData.social_worker_name,
        social_worker_role: formData.social_worker_role,
        social_worker_phone: formData.social_worker_phone,
        social_worker_email: formData.social_worker_email,
        family_background: formData.family_background,
        parents_status: formData.parents_status,
        family_status: formData.family_status,
        mother_name: formData.mother_name,
        mother_address: formData.mother_address,
        connection_with_mother: formData.connection_with_mother,
        father_name: formData.father_name,
        father_address: formData.father_address,
        connection_with_father: formData.connection_with_father,
        connection_with_relatives: formData.connection_with_relatives,
        relative_first_name: formData.relative_first_name,
        relative_last_name: formData.relative_last_name,
        relative_address: formData.relative_address,
        relative_phone: formData.relative_phone,
        graduation: formData.graduation,
        graduation_details: formData.graduation_details,
        teenage_status_details: formData.teenage_status_details,
        timestamp: serverTimestamp(),
        medical_problem: formData.medical_problem,
        drugs_and_alcohol: formData.drugs_and_alcohol,
        violent_incidents: formData.violent_incidents,
        eating_disorders: formData.eating_disorders,
        suicidal_attempts: formData.suicidal_attempts,
        criminal_record: formData.criminal_record,
        learning_disabilities: formData.learning_disabilities,
        allowances: formData.allowances,
      })
        .then(() => {
          // alert("success");
        })
        .catch((err) => {
          // alert("error");
        });
    navigate("/HabitantProject/doc");
  };

  if (!user) {
    return (
      <div className="loggedIn">
        <div className="allThePage">
          <section className="banner">
            <h1 id="difh1">פרויקט דיור בוגרות</h1>
            {/* <p>Company Mission Statement goes here</p> */}
            <a id="scr3" className="btn-bgstroke">
              להתחברות לחץ
            </a>
          </section>
          <div className="Details">
            <div className="regImg">
              <ul className="tilesWrap">
                <li>
                  <h2>01</h2>
                  <p>סיוע והכוון כלכלי לצעירות</p>
                </li>
                <li>
                  <h2>02</h2>
                  <p>הקניית כלים ומיומניות להתנהל בחיי היום יום</p>
                </li>
                <li>
                  <h2>03</h2>
                  <p>
                    עבודה על תהליכים בסיסיים עם המדריכות, העובדות הסוציאליות
                    והגורמים הטיפוליים המתאימים
                  </p>
                </li>
                <li>
                  <h2>04</h2>
                  <p>טיפול רפואי במידת הצורך</p>
                </li>
                <li>
                  <h2>05</h2>
                  <p>
                    ליווי הדוק ומבוקר של כל דבר שקורה בדירה ובחייה של הצעירה
                  </p>
                </li>
              </ul>
            </div>
            <br />
          </div>
          <br />
        </div>
      </div>
    );
  }
  return (
    <div className="allThePage">
      <div className="AllDetails">
        <section className="banner">
          <h1 id="difh1">פרויקט דיור בוגרות</h1>
          {/* <p>Company Mission Statement goes here</p> */}
          <a href="#scr" className="btn-bgstroke">
            להרשמה לחץ
          </a>
        </section>
        <br />
      </div>
      <ul className="tilesWrap">
        <li>
          <h2>01</h2>
          <p>סיוע והכוון כלכלי לצעירות</p>
        </li>
        <li>
          <h2>02</h2>
          <p>הקניית כלים ומיומניות להתנהל בחיי היום יום</p>
        </li>
        <li>
          <h2>03</h2>
          <p>
            עבודה על תהליכים בסיסיים עם המדריכות, העובדות הסוציאליות והגורמים
            הטיפוליים המתאימים
          </p>
        </li>
        <li>
          <h2>04</h2>
          <p>טיפול רפואי במידת הצורך</p>
        </li>
        <li>
          <h2>05</h2>
          <p>ליווי הדוק ומבוקר של כל דבר שקורה בדירה ובחייה של הצעירה</p>
        </li>
      </ul>
      <section className="banner2">
        {/* <p>Company Mission Statement goes here</p> */}
        <a href="#private" className="btn-bgstroke1">
          פרטים אישיים
        </a>
        <a href="#general" className="btn-bgstroke1">
          פרטים כלליים
        </a>
        <a href="#phone" className="btn-bgstroke1">
          פרטי הקשר
        </a>
        <a href="#social" className="btn-bgstroke1">
          גורם מפנה
        </a>
        <a href="#beauru" className="btn-bgstroke1">
          שיוך ללשכה
        </a>
        <a href="#family" className="btn-bgstroke1">
          רקע משפחתי
        </a>
      </section>
      <div id="scr" className="SubmitRequest">
        <br />
        <br />
        <fieldset>
          <legend id="private" className="legendTitle">
            פרטים אישיים
          </legend>
          <form>
            <label htmlFor="fname">שם פרטי : </label>
            <input
              className="input1"
              type="text"
              id="fname"
              name="fname"
              required
              value={formData.fname}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="lname">שם משפחה : </label>
            <input
              className="input1"
              type="text"
              id="lname"
              name="lname"
              required
              value={formData.lname}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="ID">תעודת זהות : </label>
            <input
              className="input1"
              type="number"
              id="ID"
              name="ID"
              required
              value={formData.ID}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="date_of_birth">תאריך לידה:</label>
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
            <label htmlFor="born_country">ארץ לידה : </label>
            <input
              className="input1"
              type="text"
              id="born_country"
              name="born_country"
              required
              value={formData.born_country}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="hmo">קופת חולים : </label>
            <input
              className="input1"
              type="text"
              id="hmo"
              name="hmo"
              required
              value={formData.hmo}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="doctor">רופא מטפל : </label>
            <input
              className="input1"
              type="text"
              id="doctor"
              name="doctor"
              required
              value={formData.doctor}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="hmo_branch">סניף קופ"ח : </label>
            <input
              className="input1"
              type="text"
              id="hmo_branch"
              name="hmo_branch"
              required
              value={formData.hmo_branch}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />

            <label htmlFor="hmo_phone">טלפון קופ"ח : </label>
            <input
              className="input1"
              type="tel"
              id="hmo_phone"
              name="hmo_phone"
              required
              value={formData.hmo_phone}
              onChange={(e) => handleChange(e)}
            />
          </form>
        </fieldset>

        <br />
        <br />

        <fieldset>
          <legend id="general" className="legendTitle">
            פרטים כלליים
          </legend>
          <form>
            <label htmlFor="current_framework">מסגרת נוכחית : </label>
            <select id="current_framework" className="select1">
              <option id="boardingSchool">פנימייה</option>
              <option id="custody">אומנה</option>
              <option id="nursery">משפחתון</option>
            </select>
            <label htmlFor="framework_name">שם המסגרת : </label>
            <input
              className="input1"
              type="text"
              id="framework_name"
              name="framework_name"
              required
              value={formData.framework_name}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="framework_address">כתובת המסגרת : </label>
            <input
              className="input1"
              type="text"
              id="framework_address"
              name="framework_address"
              required
              value={formData.framework_address}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
            <label htmlFor="framework_after_school">
              מסגרת אחרי לימודים :{" "}
            </label>
            <select id="framework_after_school" className="select1">
              <option id="militaryService">שירות צבאי</option>
              <option id="nationalService">שירות לאומי</option>
              <option id="other">אחר</option>
            </select>
            <br />
            <br />
          </form>
        </fieldset>

        <br />
        <br />

        <fieldset>
          <legend id="phone" className="legendTitle">
            פרטי הקשר (של הצעירה)
          </legend>
          <label htmlFor="phone_number"> נייד: </label>
          <input
            className="input1"
            type="number"
            id="phone_number"
            name="phone_number"
            required
            value={formData.phone_number}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="email"> מייל : </label>
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

          <label htmlFor="referrer_name"> שם : </label>
          <input
            className="input1"
            type="text"
            id="referrer_name"
            name="referrer_name"
            required
            value={formData.referrer_name}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="referrer_proffesion"> תפקיד : </label>
          <input
            className="input1"
            type="text"
            id="referrer_proffesion"
            name="referrer_proffesion"
            required
            value={formData.referrer_proffesion}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="referrer_phone"> טלפון : </label>
          <input
            className="input1"
            type="number"
            id="referrer_phone"
            name="referrer_phone"
            required
            value={formData.referrer_phone}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="referrer_email"> מייל : </label>
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
        </fieldset>

        <br />
        <br />

        <fieldset>
          <legend id="beauru" className="legendTitle">
            שיוך ללשכה
          </legend>

          <label htmlFor="bureau_name"> שם הלשכה : </label>
          <input
            className="input1"
            type="text"
            id="bureau_name"
            name="bureau_name"
            value={formData.bureau_name}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="social_worker_name"> שם העו"ס : </label>
          <input
            className="input1"
            type="text"
            id="social_worker_name"
            name="social_worker_name"
            value={formData.social_worker_name}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="social_worker_role"> תפקיד : </label>
          <input
            className="input1"
            type="text"
            id="social_worker_role"
            name="social_worker_role"
            value={formData.social_worker_role}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="social_worker_phone"> טלפון : </label>
          <input
            className="input1"
            type="number"
            id="social_worker_phone"
            name="social_worker_phone"
            value={formData.social_worker_phone}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
          <label htmlFor="social_worker_email"> מייל : </label>
          <input
            className="input1"
            type="email"
            id="social_worker_email"
            name="social_worker_email"
            value={formData.social_worker_email}
            onChange={(e) => handleChange(e)}
          />

          <br />
          <br />
        </fieldset>

        <br />
        <br />

        <fieldset>
          <legend className="legendTitle">רקע משפחתי</legend>
          <label htmlFor="family_background"> רקע משפחתי קצר : </label>
          <input
            className="input1"
            type="text"
            id="family_background"
            name="family_background"
            value={formData.family_background}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="parents_status"> מצב הורים : </label>
          <select id="framework_after_school" className="select1">
            <option id="married">נשואים </option>
            <option id="divorced">גרושים</option>
            <option id="separated">פרודים</option>
          </select>
          <label htmlFor="family_status"> מצב משפחתי : </label>
          <select id="framework_after_school" className="select1">
            <option id="orphan_from_mother">יתום מאם </option>
            <option id="orphan_from_father">יתום מאב</option>
            <option id="orphan_from_both_parents">יתום משני ההורים</option>
          </select>
          <br />
          <br />

          <label htmlFor="mother_name"> שם האם : </label>
          <input
            className="input1"
            type="text"
            id="mother_name"
            name="mother_name"
            value={formData.mother_name}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="mother_address"> כתובת האם : </label>
          <input
            className="input1"
            type="text"
            id="mother_address"
            name="mother_address"
            value={formData.mother_address}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="connection_with_mother"> קשר עם האם : </label>
          <select id="connection_with_mother" className="select1">
            <option id="have_connection_with_mother">כן </option>
            <option id="not_connection_with_mother">לא</option>
          </select>

          <br />
          <br />

          <label htmlFor="father_name"> שם האב : </label>
          <input
            className="input1"
            type="text"
            id="father_name"
            name="father_name"
            value={formData.father_name}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="father_address"> כתובת האב : </label>
          <input
            className="input1"
            type="text"
            id="father_address"
            name="father_address"
            value={formData.father_address}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="connection_with_father"> קשר עם האב : </label>
          <select id="connection_with_father" className="select1">
            <option id="have_connection_with_father">כן </option>
            <option id="not_connection_with_father">לא</option>
          </select>

          <br />
          <br />

          <label htmlFor="connection_with_relatives">
            {" "}
            קרוב משפחה נוסף עימו יש קשר :{" "}
          </label>
          <input
            className="input1"
            type="text"
            id="connection_with_relatives"
            name="connection_with_relatives"
            value={formData.connection_with_relatives}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="relative_first name"> שם פרטי: </label>
          <input
            className="input1"
            type="text"
            id="relative_first_name"
            name="relative_first_name"
            value={formData.relative_first_name}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="relative_last_name"> שם משפחה : </label>
          <input
            className="input1"
            type="text"
            id="relative_last_name"
            name="relative_last_name"
            value={formData.relative_last_name}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
          <label htmlFor="relative_address"> כתובת : </label>
          <input
            className="input1"
            type="text"
            id="relative_address"
            name="relative_address"
            value={formData.relative_address}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="relative_phone"> טלפון : </label>
          <input
            className="input1"
            type="number"
            id="relative_phone"
            name="relative_phone"
            value={formData.referrer_phone}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
        </fieldset>

        <br />
        <br />

        <fieldset>
          <legend id="family" className="legendTitle">
            שאלון כללי
          </legend>
          <label htmlFor="graduation"> סיום לימודים : </label>
          <select id="graduation" className="select1">
            <option
              id="full"
              value={formData.graduation}
              onChange={(e) => handleChange(e)}
            >
              בגרות מלאה{" "}
            </option>
            <option
              id="partial"
              value={formData.graduation}
              onChange={(e) => handleChange(e)}
            >
              בגרות חלקית{" "}
            </option>
            <option
              id="other"
              value={formData.graduation}
              onChange={(e) => handleChange(e)}
            >
              אחר{" "}
            </option>
          </select>
          <label htmlFor="graduation_details"> פירוט אודות הלימודים : </label>
          <input
            className="input1"
            type="text"
            id="graduation_details"
            name="graduation_details"
            value={formData.graduation_details}
            onChange={(e) => handleChange(e)}
          />
          <br /> <br />
          <label htmlFor="teenage_status">
            {" "}
            נא לסמן מה מהבאים מתאים לצעירה המופנה :{" "}
          </label>
          <br />
          <input
            type="checkbox"
            id="medical_problem"
            name="medical_problem"
            className="switch_1"
            value={formData.medical_problem}
            onChange={(e) => handlecheckBoxChange(e)}
          />
          <label htmlFor="medical_problems"> בעיות רפואיות</label>
          <br />
          <input
            type="checkbox"
            id="drugs_and_alcohol"
            name="drugs_and_alcohol"
            className="switch_1"
            value={formData.drugs_and_alcohol}
            onChange={(e) => handlecheckBoxChange(e)}
          />
          <label htmlFor="drugs_and_alcohol"> סמים ואלכוהול</label>
          <br />
          <input
            type="checkbox"
            id="violent_incidents"
            name="violent_incidents"
            className="switch_1"
            value={formData.violent_incidents}
            onChange={(e) => handlecheckBoxChange(e)}
          />
          <label htmlFor="violent_incidents"> אירועים אלימים</label>
          <br />
          <input
            type="checkbox"
            id="eating_disorders"
            name="eating_disorders"
            className="switch_1"
            value={formData.eating_disorders}
            onChange={(e) => handlecheckBoxChange(e)}
          />
          <label htmlFor="eatind_disorders"> הפרעות אכילה</label>
          <br />
          <input
            type="checkbox"
            id="suicidal_attempts"
            name="suicidal_attempts"
            className="switch_1"
            value={formData.suicidal_attempts}
            onChange={(e) => handlecheckBoxChange(e)}
          />
          <label htmlFor="suicidal_attempts"> נסיונות אובדניים</label>
          <br />
          <input
            type="checkbox"
            id="criminal_record"
            name="criminal_record"
            className="switch_1"
            value={formData.criminal_record}
            onChange={(e) => handlecheckBoxChange(e)}
          />
          <label htmlFor="criminal_record">
            רישום פלילי/עבירות שנסגרו ללא רישום פלילי
          </label>
          <br />
          <input
            type="checkbox"
            id="learning_disabilities"
            name="learning_disabilities"
            className="switch_1"
            value={formData.learning_disabilities}
            onChange={(e) => handlecheckBoxChange(e)}
          />
          <label htmlFor="learning_disabilities"> לקויות למידה</label>
          <br />
          <input
            type="checkbox"
            id="allowances"
            name="allowances"
            className="switch_1"
            value={formData.allowances}
            onChange={(e) => handlecheckBoxChange(e)}
          />
          <label htmlFor="allowances"> קצבאה מביטוח לאומי </label>
          <br />
          <br />
          <label htmlFor="teenage_status_details"> הרחבה : </label>
          <input
            className="input1"
            type="text"
            id="teenage_status_details"
            name="teenage_status_details"
          />
          <br />
          <br />
        </fieldset>

        <br />
        <br />

        <button className="button-55" onClick={habitantDocPage}>
          {" "}
          הבא
        </button>
      </div>
    </div>
  );
}

export default HabitantProject;
