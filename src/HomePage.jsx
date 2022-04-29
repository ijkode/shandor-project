import React from "react";
import "react-slideshow-image/dist/styles.css";

import { Slide } from "react-slideshow-image";

const slideImages = [
  "images/slide_2.jpg",
  "images/slide_3.jpg",
  "images/slide_4.jpg",
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const HomePage = () => {
  return (
    <div>
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
        </div>
      </Slide>
      <br />
      <br />
      <div class="about">
        <h1>קצת עלינו</h1>
        <br></br>
        <div>
          סיוע והכוון לצעירים בסיכון מגורים ומעטפת טיפולית בצעירות בסיכון חסרי
          עורף משפחתי
        </div>
        <br></br>
        <br />
        <br />
        <div class="bothProjects">
          <div class="Habitant">
            <h2>פרויקט דירת בוגרות</h2>
            בעמותה ע"ש אהרן שנדור מזמינים בוגרות להשמה חוץ ביתית בגילאי 18-24
            <br />
            אשר בעלות תפקוד ואחריות ברמה עצמאית סבירה, להצטרף אל דירת הבוגרות
            <br />
            הממוקמת במעלה אדומים ובה מתגוררות עד כ-6 צעירות. השהות בדירה היא
            <br />
            לתקופה של עד 4 שנים, שבהם על הצעירה לפעול על מנת לקדם את חייה
            בתחומים שונים.
            <br /> הדירה מלווה על ידי מדריכה ועובדת סוציאלית של העמותה.
            <br />
            <br />
            <br />
            <button class="button-55">לפרטים נוספים והרשמה לפרויקט</button>
          </div>
          <div class="Assistance">
            <h2>פרויקט הכוון</h2>
            בעמותה ע"ש אהרן שנדור מזמינים צעירים המעוניינים להתחיל ללמוד לימודים
            <br />
            תואר ראשון/לימודי מקצוע ותעודה בראש שקט ולתרום לקהילה וחוששים לעשות
            <br />
            זאת לבד, להגיש מועמדות לתכנית פרויקט הכוון. <br /> תכנית זו שמה לה
            למטרה לסייע ולהכווין צעירים וצעירות בסיכון. התכנית כוללת <br />
            הענקת מלגות סיוע עבור לימודים בהשכלה גבוהה ולימודים מקצועיים במסגרות
            <br />
            השונות. בנוסף, יוענק ליווי לאותם צעירים על מנת לשלבם בחברה בצורה
            המיטבית
            <br /> ביותר.
            <br />
            <button class="button-55">לפרטים נוספים והרשמה לפרויקט</button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default HomePage;
