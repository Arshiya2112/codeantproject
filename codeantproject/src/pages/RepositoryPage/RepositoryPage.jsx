import React from "react";
import { useState } from "react";
import RepositorySidebar from "../../components/RepositorySidebar/RepositorySidebar";
import RepositoryList from "../../components/RepositoryList/RepositoryList";
import './RepositoryPage.css';
import refreshimg from "../../assets/refresh.png";
import searchimg from "../../assets/search.png";
import menuicon from "../../assets/menuicon.png";

import "./RepositoryPage.css";

const RepositoryPage = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
};

  return (
    <div className="repository-page">
       <div className="menu-icon" onClick={toggleSidebar}>
        <img src={menuicon} alt="" />
      {/* Add icon image here (consider using SVG for better scalability) */}
    </div>
    <RepositorySidebar isVisible={isSidebarOpen} /> {/* Pass state to Sidebar */}
     {/* <RepositorySidebar/> */}
      {/* <RepositorySidebar /> */}
      <div className="main-content">
        <div className="header">
          <h1>Repositories</h1>
          <div className="header-actions">
            <button className="refresh-btn">
              <img src={refreshimg} alt="" />Refresh All</button>
            <button className="add-repo-btn">+ Add Repository</button>
          </div>
        </div>
        <div className="total-repositories">
          <span>33 Total Repositories</span> {/* Total Repositories count */}
        </div>
        <div className="search-bar">
          <img src={searchimg} alt="" />
          <input type="text" placeholder="Search Repositories" />
        </div>
        <RepositoryList />
      </div>
    </div>
  );
};


export default RepositoryPage;
