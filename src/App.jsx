//! React Libraries
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//* Components
import LandingPage from "./components/logoutWindows/LandingPage";
import LoggedInLandingPage from "./components/loggedInWindows/LoggedInLandingPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [toggleTheme, setToggleTheme] = useState("light");
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="h-screen relative">
              <LandingPage isLoggedIn={false} toggleTheme={toggleTheme} setToggleTheme={setToggleTheme} />
            </div>
          }
        />
        <Route path="/logged-in-landing-page" element={<LoggedInLandingPage isLoggedIn={true} toggleTheme={toggleTheme} setToggleTheme={setToggleTheme} />} />
        <Route path="/landing-page" element={<LandingPage isLoggedIn={false} toggleTheme={toggleTheme} setToggleTheme={setToggleTheme} />} />
      </Routes>
    </Router>
  );
}

export default App;
