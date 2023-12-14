import React, { useState } from "react";
import Home from "./Home";
import Settings from "./Setting";
import CoinToss from "./CoinFlip";
import LiveScore from "./LiveScore"
import img1 from "./imgs/cricket01.png"


import "./MainLayout.css"; // Import a CSS file for styling

const MainLayout = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (page) => {
    setCurrentPage(page);
    setMenuOpen(false); // Close the menu after clicking a menu item
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`main-app ${menuOpen ? "menu-open" : ""}`}>
      <aside>
        <ul>
          <li onClick={() => handleMenuClick("home")}>Play Game</li>
          <li onClick={() => handleMenuClick("playtoss")}>Play Toss</li>
          {/* <li onClick={() => handleMenuClick("livescore")}>Live Match</li> */}
          <li onClick={() => handleMenuClick("settings")}>Settings</li>
        </ul>
      </aside>
      <main>
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className="fa-solid fa-gamepad"></i>
        </div>
        <h1>Gully Cricket Score</h1>
        {currentPage === "home" && <Home />}
        {currentPage === "playtoss" && <CoinToss />}
        {currentPage === "livescore" && <LiveScore />}
        {currentPage === "settings" && <Settings />}
        <footer>
          <p>
            I am trying my best for a better experience; this is just a testing
            app.
          </p>
        </footer>
        <img className="bg01" alt="shk" src={img1}/>
      </main>
    </div>
  );
};

export default MainLayout;
