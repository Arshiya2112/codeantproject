import React from "react";
import "./RepoCard.css";
import databaseimg from "../../assets/database.png";
import bluedot from "../../assets/bluedot.png";

const RepoCard = ({ cards }) => {
  return (
    <div className="card-main">
      <div className="card-header">
        <span className="card-title">{cards.name}</span>
        <span className="visibility">{cards.visibility}</span>
      </div>
      <div className="card-details">
        <div className="card-detail-language">
          <span>{cards.language}</span>
          <img src={bluedot} alt="" />
        </div>
        <div className="card-detail-language">
          <img src={databaseimg} alt="" />
          <span>{cards.size} KB</span>
        </div>
        <div>
          <span>Updated {cards.day} day ago</span>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
