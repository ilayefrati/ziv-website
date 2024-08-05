import React from "react";
import "./MainSecondPage.css";

function MainSecondPage() {
  return (
    <div className="main-second-page">
      <div className="video-container">
        <video width="100%" height="100%" controls playsInline autoPlay muted>
          {/* playsInline prevents autoplay on full screen on mobile */}
          <source src="./media/ZivVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default MainSecondPage;