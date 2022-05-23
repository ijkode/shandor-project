import React from "react";
import "react-slideshow-image/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes } from "firebase/storage";
import Swal from "sweetalert2";
export function AssistanceProjectDocuments() {
  const [imageUpload, setImageUpload] = useState(null);
  const navigate = useNavigate();

  const assistancePage = () => {
    navigate("/AssistanceProject");
  };
  const submitPage = () => {
    navigate("/SubmitionPage");
  };
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `files/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      Swal.fire("הקובץ הועלה בהצלחה");
    });
  };
  return (
    <div class="allDocPage">
      <div class="titleOfPage">
        <h1>העלאת קבצים בפורמט JPG או PDF </h1>
        <h5>
          לאחר לחיצה על כפתור הגש יש להמתין כמה רגעים עד לקבלת הודעת שהקובץ
          הועלה בהצלחה{" "}
        </h5>
      </div>
      <br></br>
      <div className="box">
        <div className="generalDocuments">
          <h3>מסמכים אישיים:</h3>
          <br></br>
          <label for="file"> צילום ת"ז וספח </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button class="button-84" onClick={uploadImage}>
              הגש
            </button>
          </div>
          <br />
          <label for="file"> מכתב בקשה מהפונה הכולל רקע אישי </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button class="button-84" onClick={uploadImage}>
              הגש
            </button>
          </div>
          <br />
          <label for="file">
            {" "}
            תעודת שחרור משירות צבאי/לאומי או תעודת פטור משירות{" "}
          </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button class="button-84" onClick={uploadImage}>
              הגש
            </button>
          </div>
          <br />
          <label for="file"> גיליון ציונים </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button class="button-84" onClick={uploadImage}>
              הגש
            </button>
          </div>
          <br />
          <label for="file"> צילום רישיון רכב (במידה וקיים) </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button class="button-84" onClick={uploadImage}>
              הגש
            </button>
          </div>
          <br />
          <label for="file"> צילום רישיון נשק (במידה וקיים) </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button class="button-84" onClick={uploadImage}>
              הגש
            </button>
          </div>
          <br />
          <label for="file"> טופס ויתור סודיות </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button class="button-84" onClick={uploadImage}>
              הגש
            </button>
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
          <br />
          <label for="file"> דוח סוציאלי מגורם מפנה </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button class="button-84" onClick={uploadImage}>
              הגש
            </button>
          </div>
          <br />
          <label for="file"> אבחון לקויות למידה </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button class="button-84" onClick={uploadImage}>
              הגש
            </button>
          </div>
          <br />
          <label for="file"> הערכה פסיכולוגית </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button class="button-84" onClick={uploadImage}>
              הגש
            </button>
          </div>
          <br />
          <br />
          <br />
        </div>
        <div className="bankDocuments">
          <h3>טפסי בנק:</h3>
          <br />
          <label for="file"> אישור ניהול חשבון בנק </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button class="button-84" onClick={uploadImage}>
              הגש
            </button>
          </div>
          <br />
          <label for="file"> תדפיסי חשבון בנק (3 חודשים) </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button class="button-84" onClick={uploadImage}>
              הגש
            </button>
          </div>
          <br />
          <label for="file"> אישור על תשלום משכנתא/שכ"ד/חובות/אחר </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button class="button-84" onClick={uploadImage}>
              הגש
            </button>
          </div>
          <br />
          <label for="file"> אישורי הכנסות אחרות/קצבאות </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button class="button-84" onClick={uploadImage}>
              הגש
            </button>
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
