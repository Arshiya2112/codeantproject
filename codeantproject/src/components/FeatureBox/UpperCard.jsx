import React from "react";
import imagelogo from "../../assets/imagelogo.png";
import './UpperCard.css';

const UpperCard = () => {
  return (
    <>
      <div className="upper-card">
        <span className="logohead">
          <img src={imagelogo} alt="CodeAnt AI" className="logoimg" />
          <h1>AI To Detect & Autofix Bad Code</h1>
        </span>
        <hr className="breaklogo" />
        <div className="featurelist">
          <ul>
            <li>
              <span>30+</span>
              <p>Language Support</p>
            </li>
            <li>
              <span>10K+</span>
              <p>Developers</p>
            </li>
            <li>
              <span>100K+</span>
              <p>Hours Saved</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UpperCard;
