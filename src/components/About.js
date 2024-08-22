import { React, useState, useEffect } from "react";
import "./About.css";
import ReactSimplyCarousel from "react-simply-carousel";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import Html from "../assets/icon-html.svg";
import Css from "../assets/icon-css.svg";
import Javascript from "../assets/clipart1474351.png";
import ReactImg from "../assets/react.png";
import Bootstrap from "../assets/bootstrap-logo-shadow.png";
import Node from "../assets/nodejs-logo.png";
import Express from "../assets/express-logo.png";
import Mongo from "../assets/mongo_DB-logo-removebg-preview.png";
import Git from "../assets/github-logo.png";
import Mysql from "../assets/mysql-logo.png";
import Cpp from "../assets/cpp-logo.png";
import qualification_data from "../assets/qualification_data";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import Resume from "../assets/Resume(Akash Mishra).pdf";

export default function About({ mode }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
      delay: 200,
    });
  }, []);
  return (
    <div id="about">
      <div data-aos="fade-left">
        <h3 className="about-heading">SKILLS</h3>
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            className: "forward-btn",
            children: (
              <span>
                <AiOutlineRightCircle fontSize="2em" />
              </span>
            ),
          }}
          backwardBtnProps={{
            className: "backward-btn",
            children: (
              <span>
                <AiOutlineLeftCircle fontSize="2em" />
              </span>
            ),
          }}
          responsiveProps={[
            {
              itemsToShow: 1,
              itemsToScroll: 1,
              minWidth: 768,
            },
          ]}
          speed={400}
          easing="linear"
        >
          <div className="skill-crousel">
            <img src={Cpp} alt="" />
            <div className="skill-heading">C++</div>
            <p className="skill-desc">5 Star HackerRank, 1000 Points in LeetCode, 350+ questions across plateforms</p>
          </div>
          <div className="skill-crousel">
            <img src={Html} alt="" />
            <div className="skill-heading">HTML</div>
            <p className="skill-desc">50+ Projects using Html</p>
          </div>
          <div className="skill-crousel">
            <img src={Css} alt="" />
            <div className="skill-heading">CSS</div>
            <p className="skill-desc">50+ Projects using Css</p>
          </div>
          <div className="skill-crousel">
            <img src={Javascript} alt="" />
            <div className="skill-heading">JavaScript</div>
            <p className="skill-desc">
              30+ Projects using Simple JS and 15+ Projects using Advanced JS
            </p>
          </div>
          <div className="skill-crousel">
            <img src={ReactImg} alt="" />
            <div className="skill-heading">React JS</div>
            <p className="skill-desc">10+ MultiPage Projects using React JS</p>
          </div>
          <div className="skill-crousel">
            <img src={Node} alt="" />
            <div className="skill-heading">NodeJS</div>
            <p className="skill-desc">10+ Projects using NodeJS as Backend</p>
          </div>
          <div className="skill-crousel">
            <img src={Express} alt="" />
            <div className="skill-heading">ExpressJS</div>
            <p className="skill-desc">10+ Projects using Express for creating server</p>
          </div>
          <div className="skill-crousel">
            <img src={Mongo} alt="" />
            <div className="skill-heading">MongoDB</div>
            <p className="skill-desc">5+ Project and indepth knowledge of Mongo Atlas and Compass</p>
          </div>
          <div className="skill-crousel">
            <img src={Mysql} alt="" />
            <div className="skill-heading">MySQL</div>
            <p className="skill-desc">Indepth knowledge of Structured Query Language</p>
          </div>
          <div className="skill-crousel">
            <img src={Git} alt="" style={{width:"24rem"}}/>
            <div className="skill-heading">Git & Github</div>
            <p className="skill-desc">
              Indepth Knowledge of all the commands related to git and github repository.
            </p>
          </div>
          <div className="skill-crousel">
            <img src={Bootstrap} alt="" />
            <div className="skill-heading">Bootstrap</div>
            <p className="skill-desc">
              Indepth Knowledge of Bootstrap and its components
            </p>
          </div>
        </ReactSimplyCarousel>
      </div>
      <div data-aos="fade-right">
        <h3 className="about-heading">QUALIFICATIONS</h3>
        <div className="card-container">
          {" "}
          {qualification_data.map((data) => (
            <Card key={data.id} data={data} mode={mode} />
          ))}
        </div>
      </div>
      <NavLink
        className="download-resume-link submit-btn"
        target="_blank"
        to={Resume}
        download="Resume(Akash Mishra)"
        style={{ width: "fit-content" }}
      >
        Download Resume
      </NavLink>
    </div>
  );
}
