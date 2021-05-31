import React from "react";
import "../Header/Header.css";

const Header = () => {
  return (
    <div>
      <span className="header" onClick={() => window.scroll(0, 0)}>
        Entertainment hub 🎥
      </span>
    </div>
  );
};

export default Header;
