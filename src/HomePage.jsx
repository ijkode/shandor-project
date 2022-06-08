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
      {/* <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slide2})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slide3})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slide4})` }}></div>
        </div>
      </Slide> */}
      {/* <section class="banner">
        <h1 id="difh1">עמותת שנדור</h1>
        <br />
        סיוע והכוון לצעירים בסיכון מגורים ומעטפת טיפולית בצעירות בסיכון חסרי
        עורף משפחתי
        <br />
        <a href="#scr2" className="btn-bgstroke">
          למידע על הפרויקטים
        </a>
      </section> */}
      <ul id="scr2" class="tilesWrap1">
        <li>
          <h2>פרויקט דיור</h2>
          {/* <h3>פרויקט דיור</h3> */}
          <br />
          <p id="pbold">
            בעמותה ע"ש אהרן שנדור מזמינים בוגרות להשמה חוץ ביתית בגילאי 18-24
            אשר בעלות תפקוד ואחריות ברמה עצמאית סבירה, להצטרף אל דירת הבוגרות
            הממוקמת במעלה אדומים ובה מתגוררות עד כ-6 צעירות. השהות בדירה היא
            לתקופה של עד 4 שנים, שבהם על הצעירה לפעול על מנת לקדם את חייה
            בתחומים שונים. הדירה מלווה על ידי מדריכה ועובדת סוציאלית של העמותה.
          </p>
          <button onClick={habitantPage}>הרשמה לפרויקט</button>
        </li>
        <li>
          <h2>פרויקט הכוון</h2>
          {/* <h3>פרויקט הכוון</h3> */}
          <p id="pbold">
            <br />
            בעמותה ע"ש אהרן שנדור מזמינים צעירים המעוניינים להתחיל ללמוד לימודים
            תואר ראשון/לימודי מקצוע ותעודה בראש שקט ולתרום לקהילה וחוששים לעשות
            זאת לבד, להגיש מועמדות לתכנית פרויקט הכוון. תכנית זו שמה לה למטרה
            לסייע ולהכווין צעירים וצעירות בסיכון. התכנית כוללת הענקת מלגות סיוע
            עבור לימודים בהשכלה גבוהה ולימודים מקצועיים במסגרות השונות. בנוסף,
            יוענק ליווי לאותם צעירים על מנת לשלבם בחברה בצורה המיטבית ביותר.
          </p>
          <button onClick={assistancePage}>הרשמה לפרויקט</button>
        </li>
      </ul>
      <section class="banner1">
        <h1 id="difh1">מי אנחנו?</h1>
        <p id="pbold">
          אנו מעניקים סיוע והכוון לצעירים בסיכון מגורים ומעטפת טיפולית בצעירות
          בסיכון חסרי עורף משפחתי
        </p>
      </section>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default HomePage;
