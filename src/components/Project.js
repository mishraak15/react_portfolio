import {React,useEffect} from 'react';
import '../components/Project.css';
import codingNinjas from '../assets/Coding_ninjas_clone.png';
import myntraClone from '../assets/myntra_clone.png';
import weatherApp from '../assets/Weather_App.png';
import gotIt from '../assets/Gotit_Online_Recruiter.png';
import taskmanager from '../assets/taskmanager.png';
import romiFinance from '../assets/romiFinance.png';
import trueHomes from '../assets/truehomes.png';
import wanderlust from '../assets/wanderlust.png';
import papaZon from '../assets/PapaZon_E_Commerce.png';
import { NavLink } from 'react-router-dom';
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Project() {
    useEffect(() => {
        AOS.init({
          once:false,
          duration:1000,
          delay:200,
        });
      }, [])

  return (
    <div id='projects'  data-aos="fade-top">
      <h3 className="about-heading">PROJECTS</h3>
      <div className='project_slide_show'>
        <div className='project'>
        <img src={codingNinjas} alt="" />
         <NavLink target='_blank' to="https://mishraak15.github.io/Coding_ninjas_clone/"><h4>Coding Ninjas Clone</h4></NavLink>
         <p>Perfect Clone of Coding Ninjas, an online coding & learning site with the help of <span>HTML</span>,<span>CSS</span> & <span>JS</span></p>
        </div>

        <div className='project'>
        <img src={myntraClone} alt="" />
         <NavLink target='_blank' to="https://mishraak15.github.io/Myntra_Clone/"> <h4>Myntra Clone</h4></NavLink>
         <p>Clone of a famous E-Commerce site- Myntra with the help of <span>HTML</span> , <span>CSS</span> & <span>JS</span></p>
        </div>

        <div className='project'>
        <img src={weatherApp} alt="" />
         <NavLink target='_blank' to="https://mishraak15.github.io/Weather_App_with_country_flag/"> <h4>Weather App</h4></NavLink>
         <p>It shows the weather of your location after getting the access of location & also can tell the weather info of any city around the world using <span>React</span> & <span>Fetch API</span></p>
        </div>

        <div className='project'>
        <img src={trueHomes} alt="" />
         <NavLink target='_blank' to="https://truehomes-real-estate.netlify.app/"> <h4>TrueHomes: Real-estate Site</h4></NavLink>
         <p>A frontend project on real-estate site where you can select your favorite location according to your budget using <span>ReactJS</span></p>
        </div>

        <div className='project'>
        <img src={gotIt} alt="" />
         <NavLink target='_blank' to="#"> <h4>GotIt: Online Recruiting Company</h4></NavLink>
         <p>A multi-page site with About, Blog and Contact page. Also it contain a page having the names of selected candidates where you can serach your name using <span>CSS</span>, <span>ExpressJS</span> & <span>Javascript</span></p>
        </div>

        <div className='project'>
        <img src={wanderlust} alt="" />
         <NavLink target='_blank' to="https://wanderlust-g95s.onrender.com/"> <h4>WanderLust: Room Booking Site</h4></NavLink>
         <p> A fully responsive room booking site where you can add locations, edit them, review them and can delete them. It also include seperate User Section where you can change password and can edit your profile using <span>Express</span> & <span>MongoDB</span></p>
        </div>
        
        <div className='project'>
        <img src={taskmanager} alt="" />
         <NavLink target='_blank' to="https://akashmishra-taskmanager.netlify.app/"> <h4>TaskManager</h4></NavLink>
         <p>Here you can add your daily tasks, edit them using and can delete them on completion using <span>ReactJS</span> & <span>LocalStorage</span></p>
        </div>
        
        <div className='project'>
        <img src={papaZon} alt="" />
         <NavLink target='_blank' to=" https://mishraak15.github.io/react_shopping_cart/"> <h4>PapaZon: E-Commerce site</h4></NavLink>
         <p>An E-Commerce site like Amazon where you can select your favorite item and can put them in your cart. Also a seperate Cart page to show all selected items and total price using <span>axios API</span> & <span>React</span></p>
        </div>

        <div className='project'>
        <img src={romiFinance} alt="" />
         <NavLink target='_blank' to="https://dashing-lolly-cdd224.netlify.app/"> <h4>RomiFinance: A Fianance Company</h4></NavLink>
         <p>A finance company where you get the data of different crypto-currency and you can access them on need using <span>CSS</span>, <span>ReactJS</span> & <span> Fetch API </span></p>
        </div>

      </div>
    </div>
  )
}
