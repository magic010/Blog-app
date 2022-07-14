import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">eastern universtiy</span>
        <span className="headerTitleLg">Work sire</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
        alt=""
      />
    </div>
  );
}

export default Header;
