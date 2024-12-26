import React, { useState } from "react";
import "./Signin.css";
import githubimg from "../../assets/github.png";
import bucketimg from "../../assets/bitbucket.png";
import devopsimg from "../../assets/devops.png";
import gitlabimg from "../../assets/gitlab.png";
import ssoimg from "../../assets/sso.png";
import formlogo from "../../assets/formlogo.png";

export default function SignIn() {
  const [activeOption, setActiveOption] = useState("saas");

  const saasOptions = [
    { name: "Sign in with Github", icon: githubimg },
    { name: "Sign in with Bitbucket", icon: bucketimg },
    { name: "Sign in with Azure Devops", icon: devopsimg },
    { name: "Sign in with GitLab", icon: gitlabimg },
  ];

  const selfHostedOptions = [
    { name: "Self Hosted GitLab", icon: gitlabimg },
    { name: "Sign in with SSO", icon: ssoimg },
  ];

  const currentOptions =
    activeOption === "saas" ? saasOptions : selfHostedOptions;

  return (
    <>
      <div className="signin-container">
        <img src={formlogo} alt="CodeAnt AI" className="logo" />
        <h1 className="title">Welcome to CodeAnt AI</h1>

        <div className="toggle-container">
          <button
            className={`toggle-button ${
              activeOption === "saas" ? "active" : ""
            }`}
            onClick={() => setActiveOption("saas")}
          >
            SAAS
          </button>
          <button
            className={`toggle-button ${
              activeOption === "selfhosted" ? "active" : ""
            }`}
            onClick={() => setActiveOption("selfhosted")}
          >
            Self Hosted
          </button>
        </div>

        <hr className="form-divider" />

        <div className="signin-options">
          {currentOptions.map((option, index) => (
            <button
              key={index}
              className="signin-button"
              onClick={() => console.log(`${option.name}`)}
            >
              <img
                src={option.icon}
                alt={option.name}
                className="signin-icon"
              />
              <span>{option.name}</span>
            </button>
          ))}
        </div>
      </div>
      <p className="privacy-notice">
        By signing up you agree to the <b>Privacy Policy</b>.
      </p>
    </>
  );
}
