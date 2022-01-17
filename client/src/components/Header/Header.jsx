import React from "react";
import logo from "../../img/start-gif.gif";
import './Header.css'

const Header = () => {
  return (
    <>
      <div>
        <img className="img" 
        src={logo} 
        alt="logo"  
        width={"150"}
        height={"150"}/>
        <h1 className="title">The Players</h1>
      </div>
    </>
  );
};
export default Header;
