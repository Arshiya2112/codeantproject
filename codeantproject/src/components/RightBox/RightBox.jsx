import React from "react";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import './RightBox.css';

const RightBox = () => {
  return (
    <>
      <div className="rightbox">
        <Login/>
        <Footer/>
      </div>
    </>
  );
};

export default RightBox;
