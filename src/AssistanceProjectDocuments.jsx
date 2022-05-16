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
      <br></br>
      <div className="box">
        <div className="generalDocuments">
          <h3>מסמכים אישיים:</h3>
          <div class="upload-btn-wrapper">
            <button class="button-10">צילום ת"ז וספח</button>
            <input type="file" name="ID_photo" />
          </div>
          <br />
          <div class="upload-btn-wrapper">
            <button class="button-10">מכתב בקשה מהפונה הכולל רקע אישי</button>
            <input type="file" name="application_note" />
          </div>
          <br />
          <div class="upload-btn-wrapper">
            <button class="button-10">
              תעודת שחרור משירות צבאי/לאומי או תעודת פטור משירות
            </button>
            <input type="file" name="release_papers" />
          </div>
          <br />
          <div class="upload-btn-wrapper">
            <button class="button-10">גיליון ציונים</button>
            <input type="file" name="grade_sheet" />
          </div>
          <br />
          <div class="upload-btn-wrapper">
            <button class="button-10">צילום רישיון רכב (במידה וקיים)</button>
            <input type="file" name="drivind_license" />
          </div>
          <br />
          <div class="upload-btn-wrapper">
            <button class="button-10">צילום רישיון נשק (במידה וקיים)</button>
            <input type="file" name="weapon_license" />
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
            <button class="button-10">דוח סוציאלי מגורם מפנה</button>
            <input type="file" name="social_report" />
          </div>
          <br />
          <div class="upload-btn-wrapper">
            <button class="button-10">אבחון לקויות למידה</button>
            <input type="file" name="diagnosis_of_learning_disabilities" />
          </div>
          <br />
          <div class="upload-btn-wrapper">
            <button class="button-10">הערכה פסיכולוגית</button>
            <input type="file" name="psychological_assessment" id="demo-file" />
          </div>
          <br />
        </div>
        <div className="bankDocuments">
          <h3>טפסי בנק:</h3>
          <div class="upload-btn-wrapper">
            <button class="button-10">אישור ניהול חשבון בנק</button>
            <input type="file" name="bank_account_management_certificate" />
          </div>
          <br />
          <div class="upload-btn-wrapper">
            <button class="button-10">תדפיסי חשבון בנק (3 חודשים)</button>
            <input type="file" name="bank_printout" />
          </div>
          <br />
          <div class="upload-btn-wrapper">
            <button class="button-10">
              אישור על תשלום משכנתא/שכ"ד/חובות/אחר
            </button>
            <input type="file" name="housing_approval" />
          </div>
          <br />
          <div class="upload-btn-wrapper">
            <button class="button-10">אישורי הכנסות אחרות/קצבאות</button>
            <input type="file" name="other_incomes_approval" />
          </div>
        </div>
      </div>
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
