import React from "react";
import repodata from "../../Data/repo-data.json";
import RepoCard from "../RepoCard/RepoCard";
import refreshimg from "../../assets/refresh.png";
import searchimg from "../../assets/search.png";
import "./RepoRight.css";

const RepoRight = () => {
  return (
    <div className="repo-right">
      <div className="repo-list">
        <div className="repo-header">
          <div className="repo-heading">
            <span className="title">Repositories</span>
            <span className="title-number">33 total repositories</span>
          </div>
          <div className="head-buttons">
            <button className="head-button">
              <img src={refreshimg} alt="Refresh Icon" />
              <span>Refresh All</span>
            </button>
            <button className="repo-add">
              + Add Repository
            </button>
          </div>
        </div>
        <div className="search-bar">
          <img src={searchimg} alt="Search Icon" />
          <span>Search Repositories</span>
        </div>
        <div className="repo-info">
          {repodata.map((cards, i) => (
            <RepoCard cards={cards} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepoRight;
