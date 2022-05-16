import React from "react";
import "react-slideshow-image/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { storage } from "firebase/storage";

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
      <br></br>
      <div className="box">
        <div className="generalDocuments">
          <h3>מסמכים כלליים:</h3>
          <div class="upload-btn-wrapper">
            <button class="button-10">צילום ת"ז וספח</button>
            <input type="file" name="ID_photo" />
          </div>
          <br />
          <div class="upload-btn-wrapper">
            <button class="button-10">מכתב הפנייה מהמועמדת</button>
            <input type="file" name="reference_note" />
          </div>
          <br />
          <div class="upload-btn-wrapper">
            <button class="button-10">חו"ד הורי בית/אומנה/פנימייה</button>
            <input type="file" name="supervisors_opinion" />
          </div>
          <br />
          <div class="upload-btn-wrapper">
            <button class="button-10">טופס ויתור סודיות</button>
            <input type="file" name="waiver_of_confidentiality" />
          </div>
          <br />
          <div class="waiver_of_confidentiality">
            {" "}
            להורדת טופס ויתור סודיות:
            <a href="https://drive.google.com/file/d/1U2eN7XRYQB7CsBNsVpz_BZSur9ockUOD/view?usp=sharing">
              לחצו כאן{" "}
            </a>
          </div>
        </div>
        <div className="medicalDocuments">
          <h3>מסמכים רפואיים:</h3>
          <div class="upload-btn-wrapper">
            <button class="button-10">אבחון דיאגנוסטי</button>
            <input type="file" name="siagnostic_diagnosis" />
          </div>
          <br />
          <div class="upload-btn-wrapper">
            <button class="button-10">סיכום מידע רפואי</button>
            <input type="file" name="medical_info_summary" />
          </div>
          <br />
          <div class="upload-btn-wrapper">
            <button class="button-10">הערכה פסיכולוגית</button>
            <input
              type="file"
              name="psychological_assessment"
              disabled="true"
            />
          </div>
          <br />
          <div class="upload-btn-wrapper">
            <button class="button-10">אבחון פסיכו סוציאלי</button>
            <input type="file" name="psychological_diagnosis" />
          </div>
          <br />
          <div class="upload-btn-wrapper">
            <button class="button-10">אבחון לקויות למידה</button>
            <input type="file" name="diagnosis_of_learning_disabilities" />
          </div>
          <br />
          <div class="upload-btn-wrapper">
            <button class="button-10">סיכום טיפול שנה וחו"ד מטפל</button>
            <input type="file" name="summary_and_opinion" />
          </div>
        </div>
        <div className="bankDocuments">
          <h3>טפסי בנק:</h3>
          <div class="upload-btn-wrapper">
            <button class="button-10">אישור ניהול חשבון בנק</button>
            <input type="file" name="bank_account_management_certificate" />
          </div>
          <br />
          <div class="upload-btn-wrapper">
            <button class="button-10">הצהרה על אי קיום חובות</button>
            <input type="file" name="dent_statement" />
          </div>
          <br />
          <div class="upload-btn-wrapper">
            <button class="button-10">תדפיסי חשבון בנק (3 חודשים)</button>
            <input type="file" name="bank_printout" />
          </div>
        </div>
      </div>
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
