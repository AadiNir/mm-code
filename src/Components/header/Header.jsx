import React, { useState } from "react";
import "../../css/style.css";

function Header({ handleHTMLClick, handleJavaScriptClick, handleCSSClick ,id}) {
  const [activeTab, setActiveTab] = useState("html");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  

  return (
    <div id={id}>
    <header  class="headero">
  
      <div id="logo">
        <h1 className="logo-title">MM-Code</h1>
      </div>
          <nav className="navbar">
            <p
              className={`nav-item-html nav-link ${
                activeTab === "html" ? "active" : ""
              }`}
              onClick={() => {
                handleTabClick("html");
                handleHTMLClick();
              }}
            >
              html
            </p>
            <p
              className={`nav-item-css nav-link ${
                activeTab === "css" ? "active" : ""
              }`}
              onClick={() => {
                handleTabClick("css");
                handleCSSClick();
              }}
            >
              css
            </p>
            <p
              className={`nav-item-javascript nav-link ${
                activeTab === "javascript" ? "active" : ""
              }`}
              onClick={() => {
                handleTabClick("javascript");
                handleJavaScriptClick();
              }}
            >
              javascript
            </p>
          </nav>
      </header>
    </div>
  );
}

export default Header;
