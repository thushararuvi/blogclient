import React from "react";
import "./header.css";
import back from "../../images/pexels-polina-kovaleva-6954509.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={back} />
    </div>
  );
}
