import React from "react";
import "./RepositoryList.css";
import databaseimg from "../../assets/database.png";

const repositories = [
  { name: "design-system", info: "React", size: "7320 KB", visibility: "Public", updated: "Updated 1 day ago" },
  { name: "codeant-ci-app", info: "Javascript", size: "5871 KB", visibility: "Private", updated: "Updated 2 days ago" },
  { name: "analytics-dashboard", info: "Python", size: "4521 KB", visibility: "Private", updated: "Updated 5 days ago" },
  { name: "mobile-app", info: "Swift", size: "3096 KB", visibility: "Private", updated: "Updated 3 days ago" },
  { name: "e-commerce-platform", info: "Java", size: "6210 KB", visibility: "Private", updated: "Updated 6 days ago" },
  { name: "blog-website", info: "HTML/CSS", size: "1876 KB", visibility: "Public", updated: "Updated 4 days ago" },
  { name: "social-network", info: "PHP", size: "5432 KB", visibility: "Private", updated: "Updated 7 days ago" },
];

const RepositoryList = () => {
  return (
    <div className="repository-list">
      {repositories.map((repo, index) => (
        <div key={index} 
        className="repository-item">
          {/* Name and Visibility */}
          <div className="repository-header">
            <h4>
              {repo.name} <span className="visibility-label">{repo.visibility}</span>
            </h4>
          </div>
          {/* Info */}
          <div className="repository-info">
            <div className="first-info">
            {repo.info}
            <span className="blue-dot"></span>
            </div>
            <span className="icon">
              <img src={databaseimg} alt="" />
              <span className="size">{repo.size}</span>
            </span>
            <span className="updated">{repo.updated}</span>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default RepositoryList;
