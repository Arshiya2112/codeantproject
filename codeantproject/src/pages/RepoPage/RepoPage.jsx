// import React, { useState, useEffect } from "react";
// import "./RepoPage.css";
// import repodata from "../../Data/repo-data.json";
// import RepositoriesCards from "../RepositoriesCards/RepositoriesCards";
// import arrowimg from "../../assets/arrowimg.png";
// import bookimg from "../../assets/bookimg.png";
// import cloudimg from "../../assets/cloudimg.png";
// import databaseimg from "../../assets/database.png";
// import dropimg from "../../assets/dropimg.png";
// import homeimg from "../../assets/homeimg.png";
// import phoneimg from "../../assets/phoneimg.png";
// import refreshimg from "../../assets/refresh.png";
// import searchimg from "../../assets/search.png";
// import settingsimg from "../../assets/settingsimg.png";
// import signoutimg from "../../assets/sign-out.png";
// import formlogo from "../../assets/formlogo.png";
// import closeimg from "../../assets/close.png";
// import menuimg from "../../assets/bars.png";

// const RepoPage = () => {
//     const [menu, setMenu] = useState(false);
//     const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
//     useEffect(() => {
//       const handleScreen = () => {
//         setIsMobile(window.innerWidth <= 768);
//       };
  
//       window.addEventListener("resize", handleScreen);
  
//       return () => {
//         window.removeEventListener("resize", handleScreen);
//       };
//     }, []);
  
//     return (
//       <div className="repo-page">
//         <div className="sidebar">
//           <div className="sidebar-header">
//             <div className="header">
//               <img src={formlogo} alt="" />
//               <span>CodeAnt AI</span>
//             </div>
//             {isMobile && (
//               <div
//                 onClick={() => setMenu(!menu)}
//                 className="menu-icon"
//               >
//                 {menuOpened ? (
//                   <img src={closeimg} />
//                 ) : (
//                   <img src={menuimg} alt="" />
//                 )}
//               </div>
//             )}
//           </div>
  
//           {(menuOpened || !isMobile) && (
//             <div className="sidebar-options">
//               <div
//                 className="sidebar-name"
//                 onClick={() => setMenuOpened(false)}
//               >
//                 <span>UtkarshDhairyaPanwar</span>
//                 <img src={dropimg} alt="" />
//               </div>
//               <div
//                 className="sidebar-repo-button"
//                 onClick={() => setMenuOpened(false)}
//               >
//                 <img src={homeimg} alt="" />
//                 <span>Repositories</span>
//               </div>
//               {[
//                 { src: arrowimg, text: "AI Code Review" },
//                 { src: cloudimg, text: "Cloud Security" },
//                 { src: bookimg, text: "How to Use" },
//                 { src: settingsimg, text: "Settings" },
//                 { src: phoneimg, text: "Support" },
//                 { src: signoutimg, text: "Logout" },
//               ].map((item, index) => (
//                 <div
//                   className="sidebar-options"
//                   key={index}
//                   onClick={() => setMenuOpened(false)}
//                 >
//                   <img src={item.src} alt={`${item.text} Icon`} />
//                   <span>{item.text}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
  
//         <div className="repo-right">
//           <div
//             className={`repo-list ${menuOpen ? "menu-opened" : ""}`}
//           >
//             <div className="repo-header">
//               <div className="repo-heading">
//                 <span>Repositories</span>
//                 <span>33 total repositories</span>
//               </div>
//               <div className="head-buttons">
//                 <button className="head-button">
//                   <img src={refreshimg} alt="Refresh Icon" />
//                   <span>Refresh All</span>
//                 </button>
//                 <button className="repo-add">
//                   {/* <img src="/plus.png" alt="Add Icon" /> */}
//                   <span>+ Add Repository</span>
//                 </button>
//               </div>
//             </div>
//             <div className="search-bar">
//               <img src={searchimg} alt="Search Icon" />
//               <span>Search Repositories</span>
//             </div>
//             <div className="repo-info">
//               {repodata.map((cards, i) => (
//                 <RepositoriesCards cards={cards} key={i} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default RepoPage;

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