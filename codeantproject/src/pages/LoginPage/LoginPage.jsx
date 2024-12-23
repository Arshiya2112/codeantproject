import React from "react";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import LoginForm from "../../components/LoginForm/LoginForm";
import './LoginPage.css';

const LoginPage = () => {
  return (
    <>
      <div className="login-page">
        <FeatureSection />
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
