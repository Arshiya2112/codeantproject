import React from "react";;
import logo from "../../assets/formlogo.png";
import bucketimg from "../../assets/bitbucket.png";
import devopsimg from "../../assets/devops.png";
import githubimg from "../../assets/github.png";
import gitlabimg from "../../assets/gitlab.png";
import ssoimg from "../../assets/sso.png";
import "./Login.css";

const Login = () => {
  return (
    <div className="main-login">
      <div className="login-form">
        <div className="login-header">
          <img src={logo} alt="CodeAnt AI" className="login-logo" />
          <h1>Welcome to CodeAnt AI</h1>
        </div>
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
        <hr className="lbreak" />
        {activeButton === "SAAS" && (
          <div className="form-options">
            <button>
              <img src={githubimg} />
              Sign in with GitHub
            </button>
            <button>
              <img src={bucketimg} alt="" />
              Sign in with Bitbucket
            </button>
            <button>
              <img src={devopsimg} alt="" />
              Sign in with Azure Devops
            </button>
            <button>
              <img src={gitlabimg} alt="" />
              Sign in with GitLab
            </button>
          </div>
        )}
        {activeButton === "Self Hosted" && (
          <div className="form-options">
            <button>
              <img src={gitlabimg} alt="" />
              Self Hosted GitLab
            </button>
            <button>
              <img src={ssoimg} alt="" />
              Sign in with SSO
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
