import React from "react";
import { Camera } from "react-feather";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <NavLink to="other">
        <Camera />
      </NavLink>
    </div>
  );
};

export default Footer;
