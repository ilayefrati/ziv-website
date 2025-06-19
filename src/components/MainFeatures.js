import React from "react";
import "../styles/MainFeatures.css";

function MainFeatures() {
  const features = [
    {
      icon: "fa-solid fa-car",
      title: "ניהול צי רכב",
      description: "ניהול מקיף של כל הרכבים בארגון, כולל מעקב אחר טיפולים, ביטוחים ורישיונות"
    },
    {
      icon: "fa-solid fa-user-tie",
      title: "ניהול נהגים",
      description: "מעקב אחר רישיונות נהיגה, הכשרות, עבירות תנועה והתנהגות נהגים"
    },
    {
      icon: "fa-solid fa-gas-pump",
      title: "ניהול דלק",
      description: "מעקב אחר צריכת דלק, זיהוי חריגות וניתוח מגמות לחיסכון בעלויות"
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "ניתוח נתונים",
      description: "דוחות מפורטים וניתוחים מתקדמים לקבלת החלטות מבוססות נתונים"
    },
    {
      icon: "fa-solid fa-bell",
      title: "התראות חכמות",
      description: "מערכת התראות מתקדמת המתריעה על בעיות פוטנציאליות לפני שהן מתרחשות"
    },
    {
      icon: "fa-solid fa-money-bill-wave",
      title: "חיסכון בעלויות",
      description: "זיהוי הזדמנויות לחיסכון וייעול תהליכים לצמצום הוצאות מיותרות"
    }
  ];

  return (
    <div className="main-features">
      <div className="features-header">
        <h2>הפתרון המושלם לניהול צי הרכב שלך</h2>
        <p>מערכת זיו מספקת מגוון כלים מתקדמים לניהול יעיל וחסכוני של צי הרכב בארגון שלך</p>
      </div>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              <i className={feature.icon}></i>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainFeatures; 