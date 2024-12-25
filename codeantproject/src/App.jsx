import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RepoPage from "./pages/RepoPage/RepoPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/repositories" element={<RepoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
