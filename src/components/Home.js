import {React,useEffect} from "react";
import "./Home.css";
import TextCrousel from "./TextCrousel";
import MyPhoto from "../assets/me_in_red-removebg.png";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      once:false,
      duration:1000,
      delay:200,
    });
  }, [])
  return (
    <div id="home" data-aos="fade-right">
      <TextCrousel></TextCrousel>
      <div className="flex-r home-wrapper">
        <div className="flex-c home-left">
          <div className="pre-name">Hello, My Name is</div>
          <div className="name"> Akash Mishra</div>
          <div className="title">
            <div className="title-wrapper">
              <div className="title-item">Web Developer</div>
              <div className="title-item">Frontend Designer</div>
              <div className="title-item">Tech Enthusiast</div>
              <div className="title-item">Thinker</div>
            </div>
          </div>
          <div className="my-desc">
            I design and create various types of Web UI, specializing in creating
            modern websites using REACT, created 70+ projects using HTML, CSS, JS.
          </div>
        </div>
        <div className="home-right">
          <div className="image-wrapper">
            <img className="myimageinred" src={MyPhoto} alt="myimage" />
          </div>
        </div>
      </div>
    </div>
  );
}
