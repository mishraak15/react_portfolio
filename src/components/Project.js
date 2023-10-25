import {React,useEffect} from 'react';
import '../components/Project.css';
import codingNinjas from '../assets/Coding_ninjas_clone.png';
import myntraClone from '../assets/myntra_clone.png';
import weatherApp from '../assets/Weather_App.png';
import bootstrapClone from '../assets/bootstrap-clone.png';
import worldClock from '../assets/World_Clock (1).png';
import spotifyClone from '../assets/Spotify_Clone.png';
import tictactoe from '../assets/tic_tac_toe (1).png';
import gotIt from '../assets/Gotit_Online_Recruiter.png';
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
        <img src={spotifyClone} alt="" />
         <NavLink target='_blank' to="https://mishraak15.github.io/Spotify_Clone/"> <h4>Spotify Clone</h4></NavLink>
         <p>A fully responsive Music Player similar to Spotify that plays the song already present in database. You can pause/play and can change the time stamp using <span>Javascript</span></p>
        </div>

        <div className='project'>
        <img src={gotIt} alt="" />
         <NavLink target='_blank' to="#"> <h4>GotIt: Online Recruiting Company</h4></NavLink>
         <p>A multi-page site with About, Blog and Contact page. Also it contain a page having the names of selected candidates where you can serach your name using <span>CSS</span>, <span>ExpressJS</span> & <span>Javascript</span></p>
        </div>

        <div className='project'>
        <img src={tictactoe} alt="" />
         <NavLink target='_blank' to="https://mishraak15.github.io/Tic-Tac-Toe/"> <h4>Tic-Tac-Toe</h4></NavLink>
         <p> A tic-tac-toe game with animation and music in which two player can play on the same PC using <span> CSS</span> & <span>Javascript</span></p>
        </div>
        
        <div className='project'>
        <img src={bootstrapClone} alt="" />
         <NavLink target='_blank' to="https://mishraak15.github.io/Bootystrap_Clone/"> <h4>Bootstrap Clone</h4></NavLink>
         <p>Exact Frontend Clone of Bootstrap with same color combination and all other features using <span>HTML</span> & <span>CSS</span></p>
        </div>
        
        <div className='project'>
        <img src={papaZon} alt="" />
         <NavLink target='_blank' to=" https://mishraak15.github.io/react_shopping_cart/"> <h4>PapaZon: E-Commerce site</h4></NavLink>
         <p>An E-Commerce site like Amazon where you can select your favorite item and can put them in your cart. Also a seperate Cart page to show all selected items and total price using <span>axios API</span> & <span>React</span></p>
        </div>

        <div className='project'>
        <img src={worldClock} alt="" />
         <NavLink target='_blank' to="https://mishraak15.github.io/World_Clock_with_Alarm/"> <h4>World Clock with Alarm</h4></NavLink>
         <p>A fully resposive webpage that shows a complete data of any country that you search. Data consits of capital, flag, continent & current time in that place. You can also set an alarm also using <span>HTML</span>, <span>JS</span> & <span> Fetch API </span></p>
        </div>

      </div>
    </div>
  )
}
