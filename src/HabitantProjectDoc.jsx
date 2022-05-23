import React from "react";
import "react-slideshow-image/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { storage } from "./firebase";
import { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import Swal from "sweetalert2";
export function HabitantProjectDoc() {
  const [imageUpload, setImageUpload] = useState(null);
  const navigate = useNavigate();

  const prevPage = () => {
    navigate("/HabitantProject");
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
          <h3>מסמכים כלליים:</h3>
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
          <label for="file"> מכתב הפנייה מהמועמדת </label>
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
          <label for="file"> חו"ד הורי בית/אומנה/פנימייה </label>
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
          <br></br>
          <label for="file"> אבחון דיאגנוסטי </label>
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
          <label for="file"> סיכום מידע רפואי </label>
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
          <label for="file"> אבחון פסיכו סוציאלי </label>
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
          <label for="file"> סיכום טיפול שנה וחו"ד מטפל </label>
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
        <div className="bankDocuments">
          <h3>טפסי בנק:</h3>
          <br></br>
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
          <label for="file"> הצהרה על אי קיום חובות </label>
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
