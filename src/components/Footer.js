import React from "react";
import './Footer.css';
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer flex-r">
      <div className="flex-r">
      <NavLink to="https://github.com/mishraak15" className="footer-link">
        <AiFillGithub fontSize="1.7em"/>
      </NavLink>
      <NavLink to="https://www.linkedin.com/in/akash-mishra-8b695222a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="footer-link">
        <AiFillLinkedin fontSize="1.7em"/>
      </NavLink>
      </div>
      <div className="footer-copyright">
        Copyright © @akashmishra15703
      </div>
      <div className="flex-r">
      <NavLink to="#" className="footer-link">
        <BsFacebook fontSize="1.7em"/>
      </NavLink>
      <NavLink to="https://www.instagram.com/akash_mishra_1507/" className="footer-link">
        <AiFillInstagram fontSize="1.7em"/>
      </NavLink>
      <NavLink to="#" className="footer-link">
        <RiTwitterXFill fontSize="1.7em"/>
      </NavLink>
      </div>
    </div>
  );
}
