import React, { useRef } from "react";
import "../styles/MainTestimonials.css";

function MainTestimonials() {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  
  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      if (overlayRef.current) {
        overlayRef.current.style.display = 'none';
      }
    }
  };

  const testimonials = [
    {
      name: "יוסי כהן",
      position: "מנהל צי רכב, חברת הייטק",
      text: "מערכת זיו שינתה לחלוטין את האופן בו אנו מנהלים את צי הרכב שלנו. חסכנו למעלה מ-25% בעלויות התפעול השנתיות ושיפרנו משמעותית את היעילות."
    },
    {
      name: "מיכל לוי",
      position: "קצינת בטיחות בתעבורה, חברת הובלות",
      text: "מערכת ההתראות החכמה של זיו מאפשרת לי לזהות בעיות פוטנציאליות לפני שהן מתרחשות. הממשק ידידותי למשתמש והתמיכה הטכנית מעולה."
    },
    {
      name: "אבי שמעוני",
      position: "סמנכ\"ל תפעול, חברת שירותים",
      text: "ההחלטה לעבור למערכת זיו הייתה אחת ההחלטות העסקיות הטובות ביותר שקיבלנו. המערכת מספקת תובנות עסקיות חשובות ומאפשרת לנו לקבל החלטות מבוססות נתונים."
    }
  ];

  return (
    <div className="main-testimonials">
      <div className="testimonials-header">
        <h2>מה לקוחותינו אומרים</h2>
        <div className="header-underline"></div>
      </div>
      
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote-icon">
              <i className="fa-solid fa-quote-right"></i>
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src={`/media/avatar${index + 1}.jpg`} alt={testimonial.name} onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/media/avatar-default.jpg";
                }} />
              </div>
              <div className="author-info">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="video-section">
        <h3>צפו במערכת בפעולה</h3>
        <div className="video-container">
          <video ref={videoRef} controls poster="/media/video-poster.jpg">
            <source src="/media/ZivVideo.mp4" type="video/mp4" />
            הדפדפן שלך אינו תומך בתגית וידאו.
          </video>
          <div className="video-overlay" ref={overlayRef} onClick={handleVideoPlay}>
            <div className="play-button">
              <i className="fa-solid fa-play"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainTestimonials; 