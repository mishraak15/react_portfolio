import { React, useEffect } from "react";
import "../components/Project.css";
import codingNinjas from "../assets/Coding_ninjas_clone.png";
import myntraClone from "../assets/myntra_clone.png";
import weatherApp from "../assets/Weather_App.png";
import gotIt from "../assets/Gotit_Online_Recruiter.png";
import taskmanager from "../assets/taskmanager.png";
import heliverse from "../assets/Heliverse.png";
import atg from "../assets/ATG.png";
import wanderlust from "../assets/wanderlust.png";
import trendify from "../assets/Trendify.png";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Project() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
      delay: 200,
    });
  }, []);

  return (
    <div id="projects" data-aos="fade-top">
      <h3 className="about-heading">PROJECTS</h3>
      <div className="project_slide_show">
        <div className="project">
          <img src={atg} alt="" />
          <NavLink target="_blank" to="https://connectingus.netlify.app/">
            {" "}
            <h4>Across The Globe: Professional Social Media Site</h4>
          </NavLink>
          <p>
            Across The Globe(ATG) is a social media site with jobs and
            internship section where you can create your post/job, send friend
            request, like , share, comment & download various posts using{" "}
            <span>ReactJS</span>, <span>CSS</span>, <span>Express</span>,
            <span>Cloudinary</span>, <span>Multer</span>, <span>JWT</span> &{" "}
            <span>MongoDB</span>
          </p>
        </div>

        <div className="project">
          <img src={wanderlust} alt="" />
          <NavLink target="_blank" to="https://wanderlust-g95s.onrender.com/">
            {" "}
            <h4>WanderLust: Room Booking Site</h4>
          </NavLink>
          <p>
            {" "}
            A fully responsive room booking site where you can add locations,
            edit them, review them and can delete them. It also include seperate
            User Section where you can change password and can edit your profile
            using <span>Express</span>, <span>EJS</span>, <span>CSS</span>,
            <span>Cloudinary</span>, <span>Multer</span>, <span>MapBox</span> &{" "}
            <span>MongoDB</span>
          </p>
        </div>

        <div className="project">
          <img src={trendify} alt="" />
          <NavLink target="_blank" to="https://trendifye-com.netlify.app/">
            {" "}
            <h4>Trendify: E-Commerce site</h4>
          </NavLink>
          <p>
            An e-commerce-site with full functionalities like login/signup,
            filtering-sorting, cart, wishlist, comparison section using{" "}
            <span>React JS</span>, <span>CSS</span>, <span>Cloudinary</span>,{" "}
            <span>Multer</span>& <span>MongoDB</span>
          </p>
        </div>

        <div className="project">
          <img src={heliverse} alt="" />
          <NavLink target="_blank" to="https://heliverseschool.netlify.app/">
            {" "}
            <h4>Heliverse: Professional School Site</h4>
          </NavLink>
          <p>
            A School site where Pricipal can see, add, edit or delete student
            and teacher also can add class. While teacher can see, add, edit and
            delete student only using <span>ReactJS</span>, <span>CSS</span>,{" "}
            <span>Express</span>, <span>JWT</span> & <span>MongoDB</span>
          </p>
        </div>

        <div className="project">
          <img src={taskmanager} alt="" />
          <NavLink
            target="_blank"
            to="https://akashmishra-taskmanager.netlify.app/"
          >
            {" "}
            <h4>TaskManager</h4>
          </NavLink>
          <p>
            Here you can add your daily tasks, edit them using and can delete
            them on completion using <span>ReactJS</span> &{" "}
            <span>LocalStorage</span>
          </p>
        </div>

        <div className="project">
          <img src={gotIt} alt="" />
          <NavLink target="_blank" to="#">
            {" "}
            <h4>GotIt: Online Recruiting Company</h4>
          </NavLink>
          <p>
            A multi-page site with About, Blog and Contact page. Also it contain
            a page having the names of selected candidates where you can serach
            your name using <span>CSS</span>, <span>ExpressJS</span> &{" "}
            <span>Javascript</span>
          </p>
        </div>

        <div className="project">
          <img src={weatherApp} alt="" />
          <NavLink
            target="_blank"
            to="https://mishraak15.github.io/Weather_App_with_country_flag/"
          >
            {" "}
            <h4>Weather App</h4>
          </NavLink>
          <p>
            It shows the weather of your location after getting the access of
            location & also can tell the weather info of any city around the
            world using <span>React</span> & <span>Fetch API</span>
          </p>
        </div>

        <div className="project">
          <img src={codingNinjas} alt="" />
          <NavLink
            target="_blank"
            to="https://mishraak15.github.io/Coding_ninjas_clone/"
          >
            <h4>Coding Ninjas Clone</h4>
          </NavLink>
          <p>
            Perfect Clone of Coding Ninjas, an online coding & learning site
            with the help of <span>HTML</span>,<span>CSS</span> &{" "}
            <span>JS</span>
          </p>
        </div>

        <div className="project">
          <img src={myntraClone} alt="" />
          <NavLink
            target="_blank"
            to="https://mishraak15.github.io/Myntra_Clone/"
          >
            {" "}
            <h4>Myntra Clone</h4>
          </NavLink>
          <p>
            Clone of a famous E-Commerce site- Myntra with the help of{" "}
            <span>HTML</span> , <span>CSS</span> & <span>JS</span>
          </p>
        </div>
      </div>
    </div>
  );
}
