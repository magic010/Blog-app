import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Our awesome</span>
        <span className="headerTitleLg my-5">Blogs</span>
      </div>
      <img
        className="headerImg"
        src="https://picsum.photos/400/1500"
        alt=""
      />
    </div>
  );
}

export default Header;
