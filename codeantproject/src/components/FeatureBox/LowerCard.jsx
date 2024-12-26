import React from "react";
import graphimage from "../../assets/graph.png";
import "./LowerCard.css";

const LowerCard = () => {
  return (
    <>
      <div className="bottom">
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
    </>
  );
};

export default LowerCard;
