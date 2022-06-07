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

export function HabitantProjectRegister() {
  console.log(auth.currentUser);
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
  });
  const nextPage = () => {
    navigate("/HabitantProject/doc");
  };
  const handleChange = (e) => {
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
      })
        .then(() => {
          // alert("success");
        })
        .catch((err) => {
          // alert("error");
        });
    navigate("/HabitantProject/doc");
  };

  console.log(user);
  if (!user) {
    return (
      <div className="loggedIn">
        <div class="allThePage">
          <div class="AllDetails">
            <br />
            <div class="titleToHabitantProject"></div>
            <div class="Details">
              <div>
                <h1>פרויקט דירת בוגרות </h1>
                <h2>מידע כללי</h2>
                בעמותה ע"ש אהרן שנדור מזמינים בוגרות להשמה חוץ ביתית בגילאי
                18-24
                <br />
                אשר בעלות תפקוד ואחריות ברמה עצמאית סבירה, להצטרף אל דירת
                הבוגרות
                <br />
                הממוקמת במעלה אדומים ובה מתגוררות עד כ-6 צעירות. השהות בדירה היא
                <br />
                לתקופה של עד 4 שנים, שבהם על הצעירה לפעול על מנת לקדם את חייה
                בתחומים שונים.
                <br /> הדירה מלווה על ידי מדריכה ועובדת סוציאלית של העמותה.
                <br />
                <br />
                <br />
              </div>
              <div class="ProcessDetails">
                <h2>תהליך ההרשמה</h2>
                תהליך הרשמה לשנת 2021-2022 בנוי מהשלבים הבאים:
                <br />
                פתיחת תיק מועמדת עד לתאריך ה-30.06.2021 על ידי פנייה בכתב מאת
                עו"ס מטפל. מילוי כל הטפסים הנדרשים (מצ"ב בהמשך).
                <br />
                <br />
                ראיון אישי - לאחר אישור הועדה מטעם העמותה, תזומן הצעירה בליווי
                עו"ס מפנה לראיון במשרדי העמותה. <br />
                אינטייק - במידה והצעירה עברה את שלב הריאיון , תופנה אל
                פסיכולוגית העמותה להערכה אישית.
                <br /> החלטה לגבי קבלת הצעירה לדירה, תינתן לעו"ס המפנה (במייל)
                שבועיים מסיום התהליך.
                <br />
                צעירה אשר תקבל תשובה חיובית של הועדה, תתבקש לעדכן את עו"ס העמותה
                לגבי החלטתה האישית תוך שבוע מיום ההודעה. <br />
                חתימת חוזה מול העמותה. צעירה המעוניינת להתרשם מהדירה, תוכל לעשות
                זאת בתיאום מראש ובליווי צוות העמותה. <br />
                כניסה לדירה תתקיים החל מחודש אוגוסט, המעבר של הצעירה לדירה יתואם
                וילווה (פיזית) גם ע"י העו"ס המפנה.
                <br />
                <b>
                  מיום שהחל תהליך הקבלה יש לעדכן את העמותה לגבי כל החלטה שתשפיע
                  על עתידה של הצעירה.
                </b>
                <br />
                <b>
                  <h3>
                    העמותה שומרת לעצמה זכות לסיים את תהליך הקבלה בכל שלב שהוא.
                  </h3>
                </b>
              </div>
            </div>
          </div>
          <br /> <br />
          <button className="button-55" onClick={nav}>
            להתחברות לחץ כאן
          </button>
        </div>
      </div>
    );
  }
  return (
    <div class="allThePage">
      <div class="AllDetails">
        <br />
        <div class="titleToHabitantProject">
          <h1>פרויקט דירת בוגרות </h1>
        </div>
        <br />
        <div class="Details">
          <div class="ProcessDetails">
            <h2>הוראות להרשמה לפרויקט דירת בוגרות:</h2>
            אנא מלא את כל הפרטים הנדרשים ולאחר מכן לחץ על הכפתור בתחתית המסך בכדי לעבור להעלאת הקבצים הרלוונטים
    
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class="SubmitRequest">
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
              required
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
            <label for="born_country">ארץ לידה : </label>
            <input
              className="input1"
              type="text"
              id="born_country"
              name="born_country"
              required
              value={formData.born_country}
              onChange={(e) => handleChange(e)}
            />
            <label for="hmo">קופת חולים : </label>
            <input
              className="input1"
              type="text"
              id="hmo"
              name="hmo"
              required
              value={formData.hmo}
              onChange={(e) => handleChange(e)}
            />
            <label for="doctor">רופא מטפל : </label>
            <input
              className="input1"
              type="text"
              id="doctor"
              name="doctor"
              required
              value={formData.doctor}
              onChange={(e) => handleChange(e)}
            />
            <label for="hmo_branch">סניף קופ"ח : </label>
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

            <label for="hmo_phone">טלפון קופ"ח : </label>
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
          <legend class="legendTitle">פרטים כלליים</legend>
          <form>
            <label for="current_framework">מסגרת נוכחית : </label>
            <select id="current_framework" className="select1">
              <option id="boardingSchool">פנימייה</option>
              <option id="custody">אומנה</option>
              <option id="nursery">משפחתון</option>
            </select>
            <label for="framework_name">שם המסגרת : </label>
            <input
              className="input1"
              type="text"
              id="framework_name"
              name="framework_name"
              required
              value={formData.framework_name}
              onChange={(e) => handleChange(e)}
            />
            <label for="framework_address">כתובת המסגרת : </label>
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
            <label for="framework_after_school">מסגרת אחרי לימודים : </label>
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
          <legend class="legendTitle">פרטי הקשר (של הצעירה)</legend>
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
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
        </fieldset>

        <br />
        <br />

        <fieldset>
          <legend class="legendTitle">גורם מפנה</legend>

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
        </fieldset>

        <br />
        <br />

        <fieldset>
          <legend class="legendTitle">שיוך ללשכה</legend>

          <label for="bureau_name"> שם הלשכה : </label>
          <input
            className="input1"
            type="text"
            id="bureau_name"
            name="bureau_name"
            value={formData.bureau_name}
            onChange={(e) => handleChange(e)}
          />
          <label for="social_worker_name"> שם העו"ס : </label>
          <input
            className="input1"
            type="text"
            id="social_worker_name"
            name="social_worker_name"
            value={formData.social_worker_name}
            onChange={(e) => handleChange(e)}
          />
          <label for="social_worker_role"> תפקיד : </label>
          <input
            className="input1"
            type="text"
            id="social_worker_role"
            name="social_worker_role"
            value={formData.social_worker_role}
            onChange={(e) => handleChange(e)}
          />
          <label for="social_worker_phone"> טלפון : </label>
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
          <label for="social_worker_email"> מייל : </label>
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
          <legend class="legendTitle">רקע משפחתי</legend>
          <label for="family_background"> רקע משפחתי קצר : </label>
          <input
            className="input1"
            type="text"
            id="family_background"
            name="family_background"
            value={formData.family_background}
            onChange={(e) => handleChange(e)}
          />
          <label for="parents_status"> מצב הורים : </label>
          <select id="framework_after_school" className="select1">
            <option id="married">נשואים </option>
            <option id="divorced">גרושים</option>
            <option id="separated">פרודים</option>
          </select>
          <label for="family_status"> מצב משפחתי : </label>
          <select id="framework_after_school" className="select1">
            <option id="orphan_from_mother">יתום מאם </option>
            <option id="orphan_from_father">יתום מאב</option>
            <option id="orphan_from_both_parents">יתום משני ההורים</option>
          </select>
          <br />
          <br />

          <label for="mother_name"> שם האם : </label>
          <input
            className="input1"
            type="text"
            id="mother_name"
            name="mother_name"
            value={formData.mother_name}
            onChange={(e) => handleChange(e)}
          />
          <label for="mother_address"> כתובת האם : </label>
          <input
            className="input1"
            type="text"
            id="mother_address"
            name="mother_address"
            value={formData.mother_address}
            onChange={(e) => handleChange(e)}
          />
          <label for="connection_with_mother"> קשר עם האם : </label>
          <select id="connection_with_mother" className="select1">
            <option id="have_connection_with_mother">כן </option>
            <option id="not_connection_with_mother">לא</option>
          </select>

          <br />
          <br />

          <label for="father_name"> שם האב : </label>
          <input
            className="input1"
            type="text"
            id="father_name"
            name="father_name"
            value={formData.father_name}
            onChange={(e) => handleChange(e)}
          />
          <label for="father_address"> כתובת האב : </label>
          <input
            className="input1"
            type="text"
            id="father_address"
            name="father_address"
            value={formData.father_address}
            onChange={(e) => handleChange(e)}
          />
          <label for="connection_with_father"> קשר עם האב : </label>
          <select id="connection_with_father" className="select1">
            <option id="have_connection_with_father">כן </option>
            <option id="not_connection_with_father">לא</option>
          </select>

          <br />
          <br />

          <label for="connection_with_relatives">
            {" "}
            קרובי משפחה נוספים עימם יש קשר :{" "}
          </label>
          <input
            className="input1"
            type="text"
            id="connection_with_relatives"
            name="connection_with_relatives"
            value={formData.connection_with_relatives}
            onChange={(e) => handleChange(e)}
          />
          <label for="relative_first name"> שם פרטי: </label>
          <input
            className="input1"
            type="text"
            id="relative_first_name"
            name="relative_first_name"
            value={formData.relative_first_name}
            onChange={(e) => handleChange(e)}
          />
          <label for="relative_last_name"> שם משפחה : </label>
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
          <label for="relative_address"> כתובת : </label>
          <input
            className="input1"
            type="text"
            id="relative_address"
            name="relative_address"
            value={formData.relative_address}
            onChange={(e) => handleChange(e)}
          />
          <label for="relative_phone"> טלפון : </label>
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
          <legend class="legendTitle">שאלון כללי</legend>
          <label for="graduation"> סיום לימודים : </label>
          <select id="graduation" className="select1">
            <option id="full">בגרות מלאה </option>
            <option id="partial">בגרות חלקית </option>
            <option id="other">אחר </option>
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
          <br /> <br />
          <label for="teenage_status">
            {" "}
            נא לסמן מה מהבאים מתאים לצעירה המופנה :{" "}
          </label>
          <br />
          <input
            type="checkbox"
            id="medical_problems"
            name="medical_problems"
            value="medical_problems"
          />
          <label for="medical_problems"> בעיות רפואיות</label>
          <br />
          <input
            type="checkbox"
            id="drugs_and_alcohol"
            name="drugs_and_alcohol"
            value="drugs_and_alcohol"
          />
          <label for="drugs_and_alcohol"> סמים ואלכוהול</label>
          <br />
          <input
            type="checkbox"
            id="violent_incidents"
            name="violent_incidents"
            value="violent_incidents"
          />
          <label for="violent_incidents"> אירועים אלימים</label>
          <br />
          <input
            type="checkbox"
            id="eatind_disorders"
            name="eatind_disorders"
            value="eatind_disorders"
          />
          <label for="eatind_disorders"> הפרעות אכילה</label>
          <br />
          <input
            type="checkbox"
            id="suicidal_attempts"
            name="suicidal_attempts"
            value="suicidal_attempts"
          />
          <label for="suicidal_attempts"> נסיונות אובדניים</label>
          <br />
          <input
            type="checkbox"
            id="criminal_record"
            name="criminal_record"
            value="criminal_record"
          />
          <label for="criminal_record">
            רישום פלילי/עבירות שנסגרו ללא רישום פלילי
          </label>
          <br />
          <input
            type="checkbox"
            id="learning_disabilities"
            name="learning_disabilities"
            value="learning_disabilities"
          />
          <label for="learning_disabilities"> לקויות למידה</label>
          <br />
          <input
            type="checkbox"
            id="allowances"
            name="allowances"
            value="allowances"
          />
          <label for="allowances"> קצבאה מביטוח לאומי </label>
          <br />
          <br />
          <label for="teenage_status_details"> הרחבה : </label>
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

        <button class="button-55" onClick={habitantDocPage}>
          {" "}
          הבא
        </button>
      </div>
    </div>
  );
}

export default HabitantProjectRegister;
