import React, { useState } from "react";
import { navbarData } from "./navbarData";
import "./Navbar.css";
import { Dehaze, Close } from "@mui/icons-material";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const handleShow = () => {
    setMobile((pre) => !pre);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home" onClick={() => setMobile(false)}>
          Logo
        </a>
      </div>
      <div className="right-itm">
        <div className="mobile">
          {mobile ? (
            <Close onClick={handleShow} />
          ) : (
            <Dehaze onClick={handleShow} />
          )}
        </div>
        <ul className="desktop">
          {navbarData.map((dt, indx) => {
            return (
              <li className={dt.dcn}>
                <a href={`#${dt.path}`}>
                  <span>{dt.icon}</span>
                  {dt.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className={mobile ? "mobile-view active" : "mobile-view"}>
        {navbarData.map((dt, indx) => {
          return (
            <li className={dt.cn}>
              <a href={`#${dt.path}`} onClick={handleShow}>
                <span>{dt.icon}</span>
                {dt.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
