import React from "react";
import './Landingpage.css';

function LandingPage() {
  return (
    <div className="landingpage-container">
      <div className="landingpage-content">
        <h2>Adventure and Tourist</h2>
        <h4>Good Times & Amazing Experiences</h4>
      </div>
      <div className="arrow bounce">
        <i className="fa fa-angle-down fa-5x"></i>
      </div>

      <video autoPlay muted loop id="myVideo">
        <source src="/videos/water.mp4" type="video/mp4" />
       
      </video>
    </div>
  );
}

export default LandingPage;
