import React from "react";
import imagelogo from "../../assets/imagelogo.png";
import "./UpperCard.css";

const UpperCard = () => {
  return (
    <div className="upper-card">
      <div className="logoheader">
        <img src={imagelogo} alt="CodeAnt AI" className="logoimg" />
        <h1 className="title">AI to Detect & Autofix Bad Code</h1>
      </div>
      <hr className="divider" />
      <div className="features">
        <div className="feature">
          <span className="feature-value">30+</span>
          <p className="feature-description">Language Support</p>
        </div>
        <div className="feature">
          <span className="feature-value">10K+</span>
          <p className="feature-description">Developers</p>
        </div>
        <div className="feature">
          <span className="feature-value">100K+</span>
          <p className="feature-description">Hours Saved</p>
        </div>
      </div>
    </div>
  );
};

export default UpperCard;
