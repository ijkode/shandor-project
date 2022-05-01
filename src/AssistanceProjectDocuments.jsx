import React from "react";
import "react-slideshow-image/dist/styles.css";
import { useNavigate } from "react-router-dom";

export function AssistanceProjectDocuments() {
  const navigate = useNavigate();

  const assistancePage = () => {
    navigate("/AssistanceProject");
  };
  const submitPage = () => {
    navigate("/SubmitionPage");
  };
  return (
    <div class="allDocPage">
      <div class="titleOfPage">
        <h1>העלאת קבצים בפורמט JPG או PDF </h1>
      </div>
      <label for="ID_photo"> צילום ת.ז וספח : </label>
      <input type="file" id="ID_photo" name="ID_photo" /> <br />
      <label for="application_note"> מכתב בקשה מהפונה הכולל רקע אישי : </label>
      <input type="file" id="application_note" name="application_note" /> <br />
      <label for="social_report"> דוח סוציאלי מגורם מפנה : </label>
      <input type="file" id="social_report" name="social_report" /> <br />
      <label for="release_papers">
        {" "}
        תעודת שחרור משירות צבאי/לאומי או תעודת פטור משירות :{" "}
      </label>
      <input type="file" id="release_papers" name="release_papers" /> <br />
      <label for="bank_account_management_certificate">
        {" "}
        אישור ניהול חשבון :{" "}
      </label>
      <input
        type="file"
        id="bank_account_management_certificate"
        name="bank_account_management_certificate"
      />{" "}
      <br />
      <label for="bank_printout">תדפיסי חשבון בנק (3 חודשים) : </label>
      <input type="file" id="bank_printout" name="bank_printout" /> <br />
      <label for="housing_approval">
        {" "}
        אישור על תשלום משכנתא/שכ"ד/חובות/אחר:{" "}
      </label>
      <input type="file" id="housing_approval" name="housing_approval" /> <br />
      <label for="other_incomes_approval"> אישורי הכנסות אחרות/קצבאות: </label>
      <input
        type="file"
        id="other_incomes_approval"
        name="other_incomes_approval"
      />{" "}
      <br />
      <label for="grades_sheet">
        {" "}
        ציוני סמסטר קודמים במידה והינך סטודנט/ית ממשיך/ה- יש לצרף גיליון ציונים
        ממוסד הלימודים:{" "}
      </label>
      <input type="file" id="grades_sheet" name="grades_sheet" /> <br />
      <label for="diagnosis_of_learning_disabilities">
        {" "}
        אבחון לקויות למידה (במידה וקיים) :{" "}
      </label>
      <input
        type="file"
        id="diagnosis_of_learning_disabilities"
        name="diagnosis_of_learning_disabilities"
      />{" "}
      <br />
      <label for="drivind_license"> צילום רישיון רכב (במידה וקיים) : </label>
      <input type="file" id="drivind_license" name="drivind_license" /> <br />
      <label for="weapon_license">צילום רישיון נשק (במידה וקיים) : </label>
      <input type="file" id="weapon_license" name="weapon_license" /> <br />
      <div class="waiver_of_confidentiality">
        {" "}
        להורדת הטופס:
        <a href="https://drive.google.com/file/d/1U2eN7XRYQB7CsBNsVpz_BZSur9ockUOD/view?usp=sharing" />
      </div>
      <label for="waiver_of_confidentiality_signed">
        טופס ויתור סודיות חתום :{" "}
      </label>
      <input
        type="file"
        id="waiver_of_confidentiality_signed"
        name="waiver_of_confidentiality_signed"
      />{" "}
      <br />
      <label for="psychological_assessment">הערכה פסיכולוגית : </label>
      <input
        type="file"
        id="psychological_assessment"
        name="psychological_assessment"
      />{" "}
      <br />
      <br />
      <br />
      <button class="button-55" onClick={assistancePage}>
        {" "}
        הקודם
      </button>
      <button class="button-55" onClick={submitPage}>
        {" "}
        הגש
      </button>
    </div>
  );
}

export default AssistanceProjectDocuments;
