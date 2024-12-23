import React from "react";
import "./RepositorySidebar.css";
import logoimg from "../../assets/formlogo.png";
import dropimg from "../../assets/dropimg.png";
import homeimg from "../../assets/homeimg.png";
import arrowimg from "../../assets/arrowimg.png";
import cloudimg from "../../assets/cloudimg.png";
import bookimg from "../../assets/bookimg.png";
import settingsimg from "../../assets/settingsimg.png";
import phoneimg from "../../assets/phoneimg.png";
import signoutimg from "../../assets/sign-out.png";

const RepositorySidebar = ({ }) => {
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo">
        <img src={logoimg} alt="Logo" />
      </div>

      {/* Selector */}
      <div className="selector">
        <input type="text" value="UtkarshDhairyaPa..." readOnly />
        <img src={dropimg} alt="" />
      </div>

      {/* Repositories Button */}
      <button className="repositories-button">
        <img src={homeimg} alt="" />
        Repositories
      </button>

      {/* Menu */}
      <div className="menu">
        <div className="menu-item">
          <span className="icon">
            <img src={arrowimg} alt="" /></span> AI Code Review
        </div>
        <div className="menu-item">
          <span className="icon">
            <img src={cloudimg} alt="" /></span> Cloud Security
        </div>
        <div className="menu-item">
          <span className="icon">
            <img src={bookimg} alt="" /></span> How to Use
        </div>
        <div className="menu-item">
          <span className="icon">
            <img src={settingsimg} alt="" /></span> Settings
        </div>
      </div>


      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="bottom-item">
          <img src={phoneimg} alt="" /> Support
        </div>
        <div className="bottom-item">
          <img src={signoutimg} alt="" /> Logout
        </div>
      </div>
    </div>
  );
};

export default RepositorySidebar;
