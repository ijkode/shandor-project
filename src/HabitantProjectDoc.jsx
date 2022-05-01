import React from "react";
import "react-slideshow-image/dist/styles.css";
import { useNavigate } from "react-router-dom";

export function HabitantProjectDoc() {
  const navigate = useNavigate();

  const prevPage = () => {
    navigate("/HabitantProject");
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
      <label for="reference_note"> מכתב הפנייה מהמועמדת : </label>
      <input type="file" id="reference_note" name="reference_note" /> <br />
      <label for="psychosocial_diagnosis"> אבחון פסיכו סוציאלי : </label>
      <input
        type="file"
        id="psychosocial_diagnosis"
        name="psychosocial_diagnosis"
      />{" "}
      <br />
      <label for="siagnostic_diagnosis"> אבחון דיאגנוסטי : </label>
      <input
        type="file"
        id="siagnostic_diagnosis"
        name="siagnostic_diagnosis"
      />{" "}
      <br />
      <label for="summary_and_opinion"> סיכום טיפול שנה וחוו"ד מטפל : </label>
      <input
        type="file"
        id="summary_and_opinion"
        name="summary_and_opinion"
      />{" "}
      <br />
      <label for="supervisors_opinion">
        {" "}
        חוו"ד הורי הבית/אומנה/פנימייה וכו :{" "}
      </label>
      <input
        type="file"
        id="supervisors_opinion"
        name="supervisors_opinion"
      />{" "}
      <br />
      <label for="diagnosis_of_learning_disabilities">
        {" "}
        אבחון לקויות למידה :{" "}
      </label>
      <input
        type="file"
        id="diagnosis_of_learning_disabilities"
        name="diagnosis_of_learning_disabilities"
      />{" "}
      <br />
      <label for="medical_info_summary"> סיכום מידע רפואי : </label>
      <input
        type="file"
        id="medical_info_summary"
        name="medical_info_summary"
      />{" "}
      <br />
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
      <label for="dent_statement">הצהרה על אי קיום חובות : </label>
      <input type="file" id="dent_statement" name="dent_statement" /> <br />
      <div class="waiver_of_confidentiality">
        {" "}
        להורדת הטופס:
        <a href="https://drive.google.com/file/d/1U2eN7XRYQB7CsBNsVpz_BZSur9ockUOD/view?usp=sharing">
          לחצו כאן{" "}
        </a>
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
      <button class="button-55" onClick={prevPage}>
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

export default HabitantProjectDoc;
