import React from "react";
import "./Login.css";
import LoginHeader from "../LoginHeader/LoginHeader";
import FormOptions from "../FormOptions/FormOptions";
import githubimg from "../../assets/github.png";
import bucketimg from "../../assets/bitbucket.png";
import devopsimg from "../../assets/devops.png";
import gitlabimg from "../../assets/gitlab.png";
import ssoimg from "../../assets/sso.png";

const Login = () => {
  const [activeButton, setActiveButton] = React.useState("SAAS");

  const saasOptions = [
    { imgSrc: githubimg, text: "Sign in with GitHub" },
    { imgSrc: bucketimg, text: "Sign in with Bitbucket" },
    { imgSrc: devopsimg, text: "Sign in with Azure DevOps" },
    { imgSrc: gitlabimg, text: "Sign in with GitLab" },
  ];

  const selfHostedOptions = [
    { imgSrc: gitlabimg, text: "Self Hosted GitLab" },
    { imgSrc: ssoimg, text: "Sign in with SSO" },
  ];

  return (
    <div className="main-login">
      <div className="login-form">
        <LoginHeader activeButton={activeButton} setActiveButton={setActiveButton} />
        <hr className="lbreak" />
        {activeButton === "SAAS" && <FormOptions options={saasOptions} />}
        {activeButton === "Self Hosted" && <FormOptions options={selfHostedOptions} />}
      </div>
    </div>
  );
};

export default Login;
