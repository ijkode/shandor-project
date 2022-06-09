import React from "react";
import "react-slideshow-image/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { storage, app, auth } from "./firebase";
import { useState, useEffect } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { LinearProgress } from "@mui/material";
import Swal from "sweetalert2";
export function HabitantProjectDoc() {
  const [imageUpload, setImageUpload] = useState([]);
  const navigate = useNavigate();
  const user = auth.currentUser.email;
  const prevPage = () => {
    navigate("/HabitantProject");
  };
  const submitPage = () => {
    navigate("/SubmitionPage");
  };
  const uploadImage = () => {
    if (imageUpload == null) return;
    if (imageUpload.length < 13) {
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
          if (i == 12) {
            Swal.fire("הקבצים הועלו בהצלחה");
            setImageUpload([]);
            navigate("/");
          }
        });
      }
    }
  };
  return (
    <div className="allDocPage">
      <section className="banner">
        <h1 id="difh1">העלאת קבצים בפורמט JPG או PDF</h1>
        <br />
        <p>
          לאחר לחיצה על כפתור הגש יש להמתין מספר רגעים עד לקבלת הודעה שהקבצים
          הועלו בהצלחה
        </p>
      </section>
      <br></br>
      <div className="box">
        <div className="generalDocuments">
          <h3>מסמכים כלליים:</h3>
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
          <label htmlFor="file"> מכתב הפנייה מהמועמדת </label>
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
          <label htmlFor="file"> חו"ד הורי בית/אומנה/פנימייה </label>
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
          <br></br>
          <label htmlFor="file"> אבחון דיאגנוסטי </label>
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
          <label htmlFor="file"> סיכום מידע רפואי </label>
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
          <label htmlFor="file"> אבחון פסיכו סוציאלי </label>
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
          <label htmlFor="file"> סיכום טיפול שנה וחו"ד מטפל </label>
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
        <div className="bankDocuments">
          <h3>טפסי בנק:</h3>
          <br></br>
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
          <label htmlFor="file"> הצהרה על אי קיום חובות </label>
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
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="back">
        <a href="#" onClick={prevPage}>
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

export default HabitantProjectDoc;
