import React, { useState } from "react";
import imagelogo from "../../assets/imagelogo.png";
import dropimg from "../../assets/dropimg.png";
import homeimg from "../../assets/homeimg.png";
import arrowimg from "../../assets/arrowimg.png";
import cloudimg from "../../assets/cloudimg.png";
import bookimg from "../../assets/bookimg.png";
import settingsimg from "../../assets/settingsimg.png";
import phoneimg from "../../assets/phoneimg.png";
import signoutimg from "../../assets/sign-out.png";
import menuimg from "../../assets/bars.png";
import closeimg from "../../assets/close.png";
import "./Sidebar.css";

const Sidebar = ({ isMobile, menu, setMenu }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="header">
          <img src={imagelogo} alt="Form Logo" />
          <span>CodeAnt AI</span>
        </div>
        {isMobile && (
          <div onClick={() => setMenu(!menu)} className="menu-icon">
            {menu ? <img src={closeimg} alt="" /> : <img src={menuimg} alt="" />}
          </div>
        )}
      </div>

      {(menu || !isMobile) && (
        <div className="sidebar-options">
          <div className="sidebar-name" onClick={() => setMenu(false)}>
            <span>UtkarshDhairyaPanwar</span>
            <img src={dropimg} alt="Dropdown Icon" />
          </div>
          <div className="sidebar-repo-button" onClick={() => setMenu(false)}>
            <img src={homeimg} className="homeimg" alt="Home Icon" />
            <span>Repositories</span>
          </div>
          {[{ src: arrowimg, text: "AI Code Review" },
            { src: cloudimg, text: "Cloud Security" },
            { src: bookimg, text: "How to Use" },
            { src: settingsimg, text: "Settings" },
            { src: phoneimg, text: "Support" },
            { src: signoutimg, text: "Logout" },
          ].map((item, index) => (
            <div className="sidebar-options-items" key={index} onClick={() => setMenu(false)}>
              <img src={item.src}  />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;