import React from "react";
import "react-slideshow-image/dist/styles.css";
import { useNavigate } from "react-router-dom";

export function HabitantProject() {
  const navigate = useNavigate();

  const habitantDocPage = () => {
    navigate("/HabitantProject/doc");
  };
  return (
    <div class="allThePage">
      <div class="AllDetails">
        <br />
        <div class="titleToHabitantProject">
          <h1>פרויקט דירת בוגרות </h1>
        </div>
        <div class="Details">
          בעמותה ע"ש אהרן שנדור מזמינים בוגרות להשמה חוץ ביתית בגילאי 18-24
          <br />
          אשר בעלות תפקוד ואחריות ברמה עצמאית סבירה, להצטרף אל דירת הבוגרות
          <br />
          הממוקמת במעלה אדומים ובה מתגוררות עד כ-6 צעירות. השהות בדירה היא
          <br />
          לתקופה של עד 4 שנים, שבהם על הצעירה לפעול על מנת לקדם את חייה בתחומים
          שונים.
          <br /> הדירה מלווה על ידי מדריכה ועובדת סוציאלית של העמותה.
          <br />
          <br />
          התכנית כוללת: <br />
          *ליווי אישי *סיוע רגשי *השתלבות בשירות לאומי/צבאי
          <br />
          *הכוונה לימודית/תעסוקתית *תכנית כלכלית *לימודי מיומנויות בינאישיות
          <br />
          *הכוונה לחיים עצמאיים *מיצוי זכויות *שכר דירה מסובסד
          <br />
          <br />
          <div class="ProcessDetails">
            <h2>תהליך ההרשמה:</h2>
            תהליך הרשמה לשנת 2021-2022 בנוי מהשלבים הבאים:
            <ul>
              <li>
                -פתיחת תיק מועמדת עד לתאריך ה-30.06.2021 על ידי פנייה בכתב מאת
                עו"ס מטפל. מילוי כל הטפסים הנדרשים (מצ"ב בהמשך).
              </li>
              <li>
                -ראיון אישי - לאחר אישור הועדה מטעם העמותה, תזומן הצעירה בליווי
                עו"ס מפנה לראיון במשרדי העמותה.{" "}
              </li>
              <li>
                - אינטייק - במידה והצעירה עברה את שלב הריאיון , תופנה אל
                פסיכולוגית העמותה להערכה אישית.
                <br /> החלטה לגבי קבלת הצעירה לדירה, תינתן לעו"ס המפנה (במייל)
                שבועיים מסיום התהליך.
              </li>
              <li>
                - צעירה אשר תקבל תשובה חיובית של הועדה, תתבקש לעדכן את עו"ס
                העמותה לגבי החלטתה האישית תוך שבוע מיום ההודעה.{" "}
              </li>
              <li>
                - חתימת חוזה מול העמותה. צעירה המעוניינת להתרשם מהדירה, תוכל
                לעשות זאת בתיאום מראש ובליווי צוות העמותה.{" "}
              </li>
              <li>
                - כניסה לדירה תתקיים החל מחודש אוגוסט, המעבר של הצעירה לדירה
                יתואם וילווה (פיזית) גם ע"י העו"ס המפנה.
              </li>
            </ul>
            <b>
              מיום שהחל תהליך הקבלה יש לעדכן את העמותה לגבי כל החלטה שתשפיע על
              עתידה של הצעירה.
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
      <div class="SubmitRequest">
        <div class="title1">
          <h1>הגשת בקשה לפרויקט דירת בוגרות</h1>
        </div>
        <br />
        <fieldset>
          <legend class="legendTitle">פרטים אישיים</legend>
          <form>
            <label for="fname">שם פרטי : </label>
            <input type="text" id="fname" name="fname" required />
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
            <label for="born_country">ארץ לידה : </label>
            <input type="text" id="born_country" name="born_country" required />
            <label for="year_of_immigration">שנת לידה : </label>
            <input
              type="number"
              id="year_of_immigration"
              name="year_of_immigration"
            />
            <label for="hmo">קופת חולים : </label>
            <input type="text" id="hmo" name="hmo" required />
            <label for="doctor">רופא מטפל : </label>
            <input type="text" id="doctor" name="doctor" required />
            <br />
            <br />
            <label for="hmo_branch">סניף קופ"ח : </label>
            <input type="text" id="hmo_branch" name="hmo_branch" required />
            <label for="hmo_phone">טלפון קופ"ח : </label>
            <input type="tel" id="hmo_phone" name="hmo_phone" required />
          </form>
        </fieldset>

        <br />
        <br />

        <fieldset>
          <legend class="legendTitle">פרטים כלליים</legend>
          <form>
            <label for="current_framework">מסגרת נוכחית : </label>
            <select id="current_framework">
              <option id="boardingSchool">פנימייה</option>
              <option id="custody">אומנה</option>
              <option id="nursery">משפחתון</option>
            </select>
            <label for="framework_name">שם המסגרת : </label>
            <input
              type="text"
              id="framework_name"
              name="framework_name"
              required
            />
            <label for="framework_address">כתובת המסגרת : </label>
            <input
              type="text"
              id="framework_address"
              name="framework_address"
              required
            />
            <label for="framework_after_school">מסגרת אחרי לימודים : </label>
            <select id="framework_after_school">
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
          <form>
            <legend class="legendTitle">פרטי הקשר (של הצעירה)</legend>
            <label for="phone_number"> נייד: </label>
            <input
              type="number"
              id="phone_number"
              name="phone_number"
              required
            />
            <label for="email"> מייל : </label>
            <input type="email" id="email" name="email" />
            <br />
            <br />
          </form>
        </fieldset>

        <br />
        <br />

        <fieldset>
          <form>
            <legend class="legendTitle">גורם מפנה</legend>

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
          <legend class="legendTitle">שיוך ללשכה</legend>

          <label for="bureau_name"> שם הלשכה : </label>
          <input type="text" id="bureau_name" name="bureau_name" />
          <label for="social_worker_name"> שם העו"ס : </label>
          <input
            type="text"
            id="social_worker_name"
            name="social_worker_name"
          />
          <label for="social_worker_role"> תפקיד : </label>
          <input
            type="text"
            id="social_worker_role"
            name="social_worker_role"
          />
          <label for="social_worker_phone"> טלפון : </label>
          <input
            type="number"
            id="social_worker_phone"
            name="social_worker_phone"
          />
          <br />
          <br />
          <label for="social_worker_email"> מייל : </label>
          <input
            type="email"
            id="social_worker_email"
            name="social_worker_email"
          />

          <br />
          <br />
        </fieldset>

        <br />
        <br />

        <fieldset>
          <legend class="legendTitle">רקע משפחתי</legend>
          <label for="family_background"> רקע משפחתי קצר : </label>
          <input type="text" id="family_background" name="family_background" />
          <label for="parents_status"> מצב הורים : </label>
          <select id="framework_after_school">
            <option id="married">נשואים </option>
            <option id="divorced">גרושים</option>
            <option id="separated">פרודים</option>
          </select>
          <label for="family_status"> מצב משפחתי : </label>
          <select id="framework_after_school">
            <option id="orphan_from_mother">יתום מאם </option>
            <option id="orphan_from_father">יתום מאב</option>
            <option id="orphan_from_both_parents">יתום משני ההורים</option>
          </select>
          <br />
          <br />

          <label for="mother_name"> שם האם : </label>
          <input type="text" id="mother_name" name="mother_name" />
          <label for="mother_address"> כתובת האם : </label>
          <input type="text" id="mother_address" name="mother_address" />
          <label for="connection_with_mother"> קשר עם האם : </label>
          <select id="connection_with_mother">
            <option id="have_connection_with_mother">כן </option>
            <option id="not_connection_with_mother">לא</option>
          </select>

          <br />
          <br />

          <label for="father_name"> שם האב : </label>
          <input type="text" id="fther_name" name="fther_name" />
          <label for="father_address"> כתובת האב : </label>
          <input type="text" id="father_address" name="father_address" />
          <label for="connection_with_father"> קשר עם האב : </label>
          <select id="connection_with_father">
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
            type="text"
            id="connection_with_relatives"
            name="connection_with_relatives"
          />
          <label for="relative_first name"> שם פרטי: </label>
          <input
            type="text"
            id="relative_first_name"
            name="relative_first_name"
          />
          <label for="relative_last_name"> שם משפחה : </label>
          <input
            type="text"
            id="relative_last_name"
            name="relative_last_name"
          />
          <br />
          <br />
          <label for="relative_address"> כתובת : </label>
          <input type="text" id="relative_address" name="relative_address" />
          <label for="relative_phone"> טלפון : </label>
          <input type="number" id="relative_phone" name="relative_phone" />
          <br />
          <br />
        </fieldset>

        <br />
        <br />

        <fieldset>
          <legend class="legendTitle">שאלון כללי</legend>
          <label for="graduation"> סיום לימודים : </label>
          <select id="graduation">
            <option id="full">בגרות מלאה </option>
            <option id="partial">בגרות חלקית </option>
            <option id="other">אחר </option>
          </select>
          <label for="graduation_details"> פירוט אודות הלימודים : </label>
          <textarea
            type="text"
            id="graduation_details"
            name="graduation_details"
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
          <textarea
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

export default HabitantProject;
