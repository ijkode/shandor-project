import React from "react";
import "react-slideshow-image/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { storage, app, auth } from "./firebase";
import { ref, uploadBytes } from "firebase/storage";
import Swal from "sweetalert2";
export function AssistanceProjectDocuments() {
  const [imageUpload, setImageUpload] = useState([]);
  const navigate = useNavigate();
  const user = auth.currentUser.email;
  const assistancePage = () => {
    navigate("/AssistanceProject");
  };
  const submitPage = () => {
    navigate("/SubmitionPage");
  };
  const uploadImage = () => {
    if (imageUpload == null) return;
    if (imageUpload.length < 14) {
      Swal.fire({
        title: "שגיאה",
        icon: "error",
        html: "יש להעלות את כל הקבצים הנדרשים",
        focusConfirm: false,
      });
    } else {
      for (let i = 0; i < imageUpload.length; i++) {
        const imageRef = ref(storage, `${user}/${imageUpload[i].name}`);
        uploadBytes(imageRef, imageUpload[i]).then(() => {
          if (i == 13) {
            Swal.fire("הקבצים הועלו בהצלחה");
            navigate("/");
          }
        });
      }
    }
  };
  return (
    <div className="allDocPage">
      <section className="banner">
        <h1 id="difh1">העלאת קבצים</h1>
        <br />
        <p>
          לאחר לחיצה על כפתור הגש יש להמתין מספר רגעים עד לקבלת הודעה שהקבצים
          הועלו בהצלחה
        </p>
      </section>
      <br></br>
      <div className="box">
        <div className="generalDocuments">
          <h3>מסמכים אישיים:</h3>
          <br></br>
          <label htmlFor="file"> צילום ת"ז וספח </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                imageUpload.push(event.target.files[0]);
              }}
            />
          </div>
          <br />
          <label htmlFor="file"> מכתב בקשה מהפונה הכולל רקע אישי </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                imageUpload.push(event.target.files[0]);
              }}
            />
          </div>
          <br />
          <label htmlFor="file">
            {" "}
            תעודת שחרור משירות צבאי/לאומי או תעודת פטור משירות{" "}
          </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                imageUpload.push(event.target.files[0]);
              }}
            />
          </div>
          <br />
          <label htmlFor="file"> גיליון ציונים </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                imageUpload.push(event.target.files[0]);
              }}
            />
          </div>
          <br />
          <label htmlFor="file"> צילום רישיון רכב (במידה וקיים) </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                imageUpload.push(event.target.files[0]);
              }}
            />
          </div>
          <br />
          <label htmlFor="file"> צילום רישיון נשק (במידה וקיים) </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                imageUpload.push(event.target.files[0]);
              }}
            />
          </div>
          <br />
          <label htmlFor="file"> טופס ויתור סודיות </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                imageUpload.push(event.target.files[0]);
              }}
            />
          </div>
          <br />
          <div className="waiver_of_confidentiality">
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
          <label htmlFor="file"> דוח סוציאלי מגורם מפנה </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                imageUpload.push(event.target.files[0]);
              }}
            />
          </div>
          <br />
          <label htmlFor="file"> אבחון לקויות למידה </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                imageUpload.push(event.target.files[0]);
              }}
            />
          </div>
          <br />
          <label htmlFor="file"> הערכה פסיכולוגית </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                imageUpload.push(event.target.files[0]);
              }}
            />
          </div>
          <br />
          <br />
          <br />
        </div>
        <div className="bankDocuments">
          <h3>טפסי בנק:</h3>
          <br />
          <label htmlFor="file"> אישור ניהול חשבון בנק </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                imageUpload.push(event.target.files[0]);
              }}
            />
          </div>
          <br />
          <label htmlFor="file"> תדפיסי חשבון בנק (3 חודשים) </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                imageUpload.push(event.target.files[0]);
              }}
            />
          </div>
          <br />
          <label htmlFor="file"> אישור על תשלום משכנתא/שכ"ד/חובות/אחר </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                imageUpload.push(event.target.files[0]);
              }}
            />
          </div>
          <br />
          <label htmlFor="file"> אישורי הכנסות אחרות/קצבאות </label>
          <div>
            <input
              type="file"
              className="customfile"
              onChange={(event) => {
                imageUpload.push(event.target.files[0]);
              }}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="back">
        <a href="#" onClick={assistancePage}>
          {" "}
          הקודם
        </a>
        <button className="button-55" onClick={uploadImage}>
          {" "}
          הגש
        </button>
      </div>
    </div>
  );
}

export default AssistanceProjectDocuments;
