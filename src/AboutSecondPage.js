import React from "react";
import "./AboutSecondPage.css";
import TitleAndLines from "./TitleAndLines";
import AdvantageContainer from "./AdvantageContainer";

function AboutSecondPage() {
  return (
    <div className="about-second-page">
      <TitleAndLines />
      <div className="advantages">
        <AdvantageContainer
          link="/about/advantages/page1"
          icon="fa-solid fa-car"
          title="ניהול תיקי רכב"
          text="מערכת זיו מאפשרת לנהל תיק רכב מפורט לכל הרכבים בצי"
        />
        <AdvantageContainer
          link="/about/advantages/page2"
          icon="fa-solid fa-file-invoice"
          title="מערכת הזמנות"
          text="מערכת זיו מאפשרת הוצאת הזמנות לספק הליסינג ולספקים הנוספים המקושרים לרכב"
        />
        <AdvantageContainer
          link="/about/advantages/page3"
          icon="fa-solid fa-id-card"
          title="ניהול תיקי נהג"
          text="מערכת זיו מאפשרת לקצין הבטיחות לנהל בקלות את פרטי המידע הנדרשים עבור הנהגים בחברה"
        />
        <AdvantageContainer
          link="/about/advantages/page4"
          icon="fa-solid fa-handshake"
          title="ניהול ספקים"
          text="מערכת זיו מבצעת מעקב צמוד אל מול ספקים ובכך מאפשרת להבין היכן יש בזבוז מיותר או הוצאות לא מוצדקות"
        />
        <AdvantageContainer
          link="/about/advantages/page5"
          icon="fa-solid fa-chart-line"
          title="בקרת תקציב"
          text="מערכת זיו יודעת להצביע על מוקדים שמייצרים הוצאות גבוהות או לא נחוצות"
        />
        <AdvantageContainer
          link="/about/advantages/page6"
          icon="fa-solid fa-bell"
          title="מערכת התראות"
          text="מערכת זיו יודעת להתריע לקצין הבטיחות על נקודות תורפה בעייתיות או נושאים שיש לטפל בהם"
        />
      </div>
    </div>
  );
}

export default AboutSecondPage;
