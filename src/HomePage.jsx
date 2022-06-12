import React from "react";
import "react-slideshow-image/dist/styles.css";
import slide2 from "./slide_2.jpg";
import slide3 from "./slide_3.jpg";
import slide4 from "./slide_4.jpg";
import { Slide } from "react-slideshow-image";
import { useNavigate } from "react-router-dom";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const HomePage = () => {
  const navigate = useNavigate();

  const habitantPage = () => {
    navigate("/HabitantProject");
  };
  const assistancePage = () => {
    navigate("/AssistanceProject");
  };
  return (
    <div>
      <ul id="scr2" className="tilesWrap1">
        <li>
          <h2>פרויקט דיור</h2>
          {/* <h3>פרויקט דיור</h3> */}
          <br />
          <br />
          <p id="pbold">
            בעמותה ע"ש אהרן שנדור מזמינים בוגרות להשמה חוץ ביתית בגילאי 18-24
            אשר בעלות תפקוד ואחריות ברמה עצמאית סבירה, להצטרף אל דירת הבוגרות
            הממוקמת במעלה אדומים ובה מתגוררות עד כ-6 צעירות. השהות בדירה היא
            לתקופה של עד 4 שנים, שבהם על הצעירה לפעול על מנת לקדם את חייה
            בתחומים שונים. הדירה מלווה על ידי מדריכה ועובדת סוציאלית של העמותה.
          </p>
          <br />
          <br />
          <br />
          <button onClick={habitantPage}>הרשמה לפרויקט</button>
        </li>
        <li>
          <h2>פרויקט הכוון</h2>
          {/* <h3>פרויקט הכוון</h3> */}
          <br />
          <p id="pbold">
            <br />
            בעמותה ע"ש אהרן שנדור מזמינים צעירים המעוניינים להתחיל ללמוד לימודים
            תואר ראשון/לימודי מקצוע ותעודה בראש שקט ולתרום לקהילה וחוששים לעשות
            זאת לבד, להגיש מועמדות לתכנית פרויקט הכוון. תכנית זו שמה לה למטרה
            לסייע ולהכווין צעירים וצעירות בסיכון. התכנית כוללת הענקת מלגות סיוע
            עבור לימודים בהשכלה גבוהה ולימודים מקצועיים במסגרות השונות. בנוסף,
            יוענק ליווי לאותם צעירים על מנת לשלבם בחברה בצורה המיטבית ביותר.
          </p>
          <br />
          <button onClick={assistancePage}>הרשמה לפרויקט</button>
        </li>
      </ul>
      <section className="banner1">
        <h1 id="difh1">מי אנחנו?</h1>
        <p id="pbold">
          עמותה ע"ש אהרון שנדור נוסדה בשנת 2009 ומציעה שירותי רווחה לאוכלוסיות
          שונות , העמותה פועלת לשם טיפול, סיוע והכוון לצעירים בסיכון מגורים
          ומעטפת טיפולית בצעירות בסיכון חסרות עורף משפחתי.
        </p>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default HomePage;
