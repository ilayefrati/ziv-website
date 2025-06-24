import React, { useRef, useEffect } from "react";
import "../styles/MainSecondPage.css";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

function MainSecondPage() {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const infoPointsRef = useRef(null);

  // Track visibility of main section
  const isSectionVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
  });

  // Handle video play
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
                overlayRef.current.style.display = "none";
              }
            })
            .catch((error) => {
              // Auto-play was prevented or another error occurred
              console.log("Video play was prevented:", error);
            });
        }
      } catch (error) {
        console.log("Error playing video:", error);
      }
    }
  };

  // Apply animation classes when elements are visible
  useEffect(() => {
    if (isSectionVisible) {
      if (headerRef.current) {
        headerRef.current.classList.add("animate-fade-in");
      }

      if (videoContainerRef.current) {
        setTimeout(() => {
          videoContainerRef.current.classList.add("animate-slide-in-left");
        }, 200);
      }

      if (infoPointsRef.current) {
        setTimeout(() => {
          infoPointsRef.current.classList.add("animate-slide-in-right");

          // Animate each info point with staggered delay
          const infoPoints =
            infoPointsRef.current.querySelectorAll(".info-point");
          infoPoints.forEach((point, index) => {
            setTimeout(() => {
              point.classList.add("animate-fade-in-up");
            }, 400 + index * 150);
          });
        }, 400);
      }
    }
  }, [isSectionVisible]);

  return (
    <div className="main-second-page" ref={sectionRef}>
      <div className="second-page-content">
        <div className="second-page-header" ref={headerRef}>
          <h2>למה לבחור במערכת זיו?</h2>
        </div>

        <div className="info-section">
          <div className="info-video" ref={videoContainerRef}>
            <div className="video-container">
              <video
                ref={videoRef}
                controls
                preload="metadata"
              >
                <source src={`${process.env.PUBLIC_URL}/media/ZivVideo.mp4`} type="video/mp4" />
                הדפדפן שלך אינו תומך בתגית וידאו.
              </video>
              <div
                className="video-overlay"
                ref={overlayRef}
                onClick={handleVideoPlay}
              >
                <div className="play-button">
                  <i className="fa-solid fa-play"></i>
                </div>
                <p className="overlay-text">צפו במערכת בפעולה</p>
              </div>
            </div>
          </div>
          <div className="info-points" ref={infoPointsRef}>
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
    </div>
  );
}

export default MainSecondPage;
