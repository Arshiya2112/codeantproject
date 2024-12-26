import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import RepoRight from "../../components/RepoRight/RepoRight";
import "./RepoPage.css";

const RepoPage = () => {
  const [menu, setMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleScreen);

    return () => {
      window.removeEventListener("resize", handleScreen);
    };
  }, []);

  return (
    <div className="repo-page">
      <Sidebar isMobile={isMobile} menu={menu} setMenu={setMenu} />
      <RepoRight />
    </div>
  );
};

export default RepoPage;
