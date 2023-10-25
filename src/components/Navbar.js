import React from "react";
import "./Navbar.css";
import logo from "../assets/A_logo.png";
import { BsGithub, BsLinkedin, BsFillMoonFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BiSolidSun } from "react-icons/bi";
import { useState } from "react";
import { HashLink as NavLink } from "react-router-hash-link";

export default function Navbar(props) {
  const mode = props.mode;
  const setMode = props.setMode;
  const [trans, setTrans] = useState(0);
  const [shadow,setShadow] = useState(false);

setInterval(() => {
      if(window.scrollY>"70"){
          setShadow(true);
      }
      else{
          setShadow(false);
        }
    }, 100);

  function modeChangeHandler() {
    if (mode === "Light") {
      setMode("Dark");
      setTrans(37);
    } else {
      setMode("Light");
      setTrans(0);
    }
  }

  return (
    <nav
      className={`navbar flex-r ${shadow ?"box-s":"box-no-s"}`}
      style={
        mode === "Light"
          ? { backgroundColor: "white" }
          : { backgroundColor: "black" }
      }
      id="nav"
    >
      <NavLink
        to="#home"
        className={`${mode === "Light" ? "color-b" : "color-w"} left flex-r`}
      >
        <img src={logo} alt="logo..." />
        <span>PortFolio</span>
      </NavLink>
      <div className="flex-r mid">
        <NavLink
          to="#about"
          className={mode === "Light" ? "nav-item color-b" : "nav-item color-w"}
        >
          About Me
        </NavLink>
        <NavLink
          to="#projects"
          className={mode === "Light" ? "nav-item color-b" : "nav-item color-w"}
        >
          Projects
        </NavLink>
        <NavLink
          to="#contacts"
          className={mode === "Light" ? "nav-item color-b" : "nav-item color-w"}
        >
          Contact
        </NavLink>
      </div>
      <div className="nav-icons flex-r">
        <NavLink
          target={"_blank"}
          to="https://github.com/mishraak15"
          className={
            mode === "Light"
              ? "nav-icon flex-r color-b"
              : "nav-icon flex-r color-w"
          }
        >
          <BsGithub fontSize="1.7em" />
        </NavLink>
        <NavLink
          target={"_blank"}
          to="https://www.instagram.com/akash_mishra_1507/"
          className={
            mode === "Light"
              ? "nav-icon flex-r color-b"
              : "nav-icon flex-r color-w"
          }
        >
          <AiFillInstagram fontSize="1.7em" />
        </NavLink>
        <NavLink
          target={"_blank"}
          to="https://www.linkedin.com/in/akash-mishra-8b695222a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className={
            mode === "Light"
              ? "nav-icon flex-r color-b"
              : "nav-icon flex-r color-w"
          }
        >
          <BsLinkedin fontSize="1.7em" />
        </NavLink>
        <button className="light-dark-mode" onClick={modeChangeHandler}>
          {mode === "Light" ? (
            <BsFillMoonFill
              className="mode-icon color-b"
              fontSize="1.7em"
              style={{ transform: `translateX(${trans}px)` }}
            />
          ) : (
            <BiSolidSun
              className="mode-icon color-y"
              fontSize="1.7em"
              style={{ transform: `translateX(${trans}px)` }}
            />
          )}
        </button>
      </div>
    </nav>
  );
}
