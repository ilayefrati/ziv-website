import React, { useRef } from "react";
import "./MainSecondPage.css";
import { Link } from "react-router-dom";

function MainSecondPage() {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  
  const handleVideoPlay = () => {
    if (videoRef.current) {
      // Use a try-catch block to handle potential errors
      try {
        const playPromise = videoRef.current.play();
        
        // Modern browsers return a promise from play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Playback started successfully
              if (overlayRef.current) {
                overlayRef.current.style.display = 'none';
              }
            })
            .catch(error => {
              // Auto-play was prevented or another error occurred
              console.log("Video play was prevented:", error);
            });
        }
      } catch (error) {
        console.log("Error playing video:", error);
      }
    }
  };

  return (
    <div className="main-second-page">
      <div className="second-page-content">
        <div className="second-page-header">
          <h2>למה לבחור במערכת זיו?</h2>
        </div>
        
        <div className="info-section">
          <div className="info-video">
            <div className="video-container">
              <video 
                ref={videoRef} 
                controls 
                poster="/media/video-poster.jpg"
                preload="metadata"
              >
                <source src="/media/ZivVideo.mp4" type="video/mp4" />
                הדפדפן שלך אינו תומך בתגית וידאו.
              </video>
              <div className="video-overlay" ref={overlayRef} onClick={handleVideoPlay}>
                <div className="play-button">
                  <i className="fa-solid fa-play"></i>
                </div>
                <div className="overlay-text">צפו במערכת בפעולה</div>
              </div>
            </div>
          </div>
          
          <div className="info-points">
            <div className="info-point">
              <i className="fa-solid fa-check-circle"></i>
              <p>מערכת מוכחת עם למעלה מ-18 שנות ניסיון בשוק</p>
            </div>
            <div className="info-point">
              <i className="fa-solid fa-check-circle"></i>
              <p>חיסכון משמעותי בעלויות תפעול צי הרכב</p>
            </div>
            <div className="info-point">
              <i className="fa-solid fa-check-circle"></i>
              <p>ממשק ידידותי למשתמש וקל לתפעול</p>
            </div>
            <div className="info-point">
              <i className="fa-solid fa-check-circle"></i>
              <p>מערכת התראות חכמה למניעת תקלות</p>
            </div>
            <div className="info-point">
              <i className="fa-solid fa-check-circle"></i>
              <p>תמיכה טכנית מקצועית וזמינה</p>
            </div>
            <div className="info-point">
              <i className="fa-solid fa-check-circle"></i>
              <p>התאמה אישית לצרכי הארגון שלך</p>
            </div>
            
            <Link to="/about" className="learn-more-btn">
              למידע נוסף <i className="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSecondPage;