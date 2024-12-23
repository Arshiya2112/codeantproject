import React from "react";
import imagelogo from "../../assets/imagelogo.png";
import graphimage from "../../assets/graph.png";
import antonly from "../../assets/codeantonly.png";
import "./FeatureSection.css";

const FeatureSection = () => {
  return (
    <>
      <div className="feature-section">
        <div className="top">
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
        <div className="bottom">
          <div className="weekly-status">
            <div className="weekly-left">
              <img src={graphimage} alt="CodeAnt AI" className="graphimg" />
              <p>Issues Fixed</p>
              <h2>500K+</h2>
            </div>
            <div className="weekly-right">
              <p className="increase">
                <span className="measure">⬆ 14%</span>
              </p>
              <p className="week">This week</p>
            </div>
          </div>
        </div>
        <img src={antonly} alt="" className="bottomimage" />
      </div>
    </>
  );
};

export default FeatureSection;
