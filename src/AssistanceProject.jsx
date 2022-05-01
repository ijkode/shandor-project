import React from "react";
import "react-slideshow-image/dist/styles.css";
import { useNavigate } from "react-router-dom";

export function AssistanceProject() {
  const navigate = useNavigate();

  const docPage = () => {
    navigate("/AssistanceProject/documents");
  };
  return (
    <div class="allThePage">
      <div class="AllDetails">
        <br />
        <div class="titleToAssistnceProject">
          <h1>פרויקט הכוון </h1>
        </div>
        <div class="Details">
          העמותה ע"ש אהרן שנדור מזמינה צעירים/ות המעוניינים/ות ללמוד תואר/תעודה
          בראש שקט תוך כדי תרומה לקהילה.
          <br />
          <br />
        </div>
      </div>

      <div class="SubmitRequest">
        <div class="title1">
          <h1>הגשת בקשה לפרויקט הכוון</h1>
        </div>
        <br />
        <fieldset>
          <legend class="legendTitle">פרטים אישיים</legend>
          <form>
            <label for="fname">שם פרטי : </label>
            <input type="text" id="fname" name="fname" requierd />
            <label for="lname">שם משפחה : </label>
            <input type="text" id="lname" name="lname" required />
            <label for="ID">תעודת זהות : </label>
            <input type="number" id="ID" name="ID" required />
            <label for="date_of_birth">תאריך לידה:</label>
            <input
              type="date"
              id="date_of_birth"
              name="date_of_birth"
              required
            />
            <br />
            <br />

            <label for="address"> כתובת: </label>
            <input type="text" id="address" name="address" required />
            <label for="phone_number"> נייד: </label>
            <input
              type="number"
              id="phone_number"
              name="phone_number"
              required
            />
            <label for="email"> מייל : </label>
            <input type="email" id="email" name="email" required />
            <br />
            <br />
          </form>
        </fieldset>
        <br />
        <br />

        <fieldset>
          <legend class="legendTitle">גורם מפנה</legend>
          <form>
            <label for="referrer_name"> שם : </label>
            <input
              type="text"
              id="referrer_name"
              name="referrer_name"
              required
            />
            <label for="referrer_proffesion"> תפקיד : </label>
            <input
              type="text"
              id="referrer_proffesion"
              name="referrer_proffesion"
              required
            />
            <label for="referrer_phone"> טלפון : </label>
            <input
              type="number"
              id="referrer_phone"
              name="referrer_phone"
              required
            />
            <label for="referrer_email"> מייל : </label>
            <input
              type="email"
              id="referrer_email"
              name="referrer_email"
              required
            />
            <br />
            <br />
          </form>
        </fieldset>
        <br />
        <br />

        <fieldset>
          <form>
            <legend class="legendTitle">לימודים</legend>
            <label for="framework_name"> מוסד לימודים : </label>
            <input
              type="text"
              id="framework_name"
              name="framework_name"
              required
            />
            <label for="framework_field"> תחום לימודים : </label>
            <input
              type="text"
              id="framework_field"
              name="framework_field"
              required
            />
            <label for="framework_years"> מספר שנות לימודים : </label>
            <input
              type="text"
              id="framework_years"
              name="framework_years"
              required
            />
            <label for="tuition"> היקף שכר לימוד : </label>
            <input type="text" id="tuition" name="tuition" required />
            <br />
            <br />
            <label for="graduation"> סיום לימודים : </label>
            <select id="graduation" required>
              <option id="full">בגרות מלאה </option>
              <option id="partial">בגרות חלקית </option>
            </select>
            <label for="graduation_details"> פירוט אודות הלימודים : </label>
            <textarea
              type="text"
              id="graduation_details"
              name="graduation_details"
            />

            <br />
            <br />
          </form>
        </fieldset>
        <br />
        <br />

        <fieldset>
          <legend class="legendTitle">כללי</legend>
          <label for="other_schilarships">
            {" "}
            האם הוגשו בקשות למלגות נוספות :{" "}
          </label>
          <select id="other_schilarships">
            <option id="other_schilarships">כן </option>
            <option id="not_other_schilarships">לא</option>
          </select>
          <label for="schilarships_details"> פירוט אודות המלגות : </label>
          <textarea
            type="text"
            id="schilarships_details"
            name="schilarships_details"
          />
          <br />
          <label for="insurance_institute_allowance">
            האם מקבל/ת קצבאות מביטוח לאומי/משרד הביטחון? :{" "}
          </label>
          <select id="insurance_institute_allowance">
            <option id="insurance_institute_allowance">כן </option>
            <option id="not_insurance_institute_allowance">לא</option>
            <option id="other">אחר</option>
          </select>
          <label for="insurance_institute_allowance_details">
            {" "}
            פירוט אודות הקצבאות המתקבלות מביטוח לאומי :{" "}
          </label>
          <textarea
            type="text"
            id="insurance_institute_allowance_details"
            name="insurance_institute_allowance_details"
          />

          <br />
          <br />
        </fieldset>
        <br />
        <br />

        <button class="button-55" onClick={docPage}>
          {" "}
          הבא
        </button>
      </div>
    </div>
  );
}

export default AssistanceProject;
