import React from "react";
import formlogo from "../../assets/formlogo.png";
import "./LoginHeader.css";

const LoginHeader = ({ activeButton, setActiveButton }) => {
  return (
    <div className="login-header">
      <img src={formlogo} alt="CodeAnt AI" className="login-logo" />
      <h1>Welcome to CodeAnt AI</h1>
      <div className="select-buttons">
        <button
          className={activeButton === "SAAS" ? "active" : ""}
          onClick={() => setActiveButton("SAAS")}
        >
          SAAS
        </button>
        <button
          className={activeButton === "Self Hosted" ? "active" : ""}
          onClick={() => setActiveButton("Self Hosted")}
        >
          Self Hosted
        </button>
      </div>
    </div>
  );
};

export default LoginHeader;
