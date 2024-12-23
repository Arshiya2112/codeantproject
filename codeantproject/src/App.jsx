import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RepositoryPage from "./pages/RepositoryPage/RepositoryPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/repositories" element={<RepositoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
