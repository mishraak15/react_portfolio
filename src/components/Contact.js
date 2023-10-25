import {React,useEffect, useRef, useState} from "react";
import "./Contact.css";
import { NavLink } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import AOS from "aos";
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

export default function Contact({mode}) {
    const [formData,setFormData]=useState({user_name:"",user_subject:"",user_email:"",message:""});

    function changeHandler(event){
        setFormData((preData)=>{
            return {...preData,   
            [event.target.name]: event.target.value    
          }
        })
    }

    useEffect(() => {
        AOS.init({
          once:false,
          duration:800,
          delay:100,
        });
      }, [])

      const formref=useRef();

function submitHandler(e){
    e.preventDefault();
    
    emailjs.sendForm('service_9b1u065', 'template_kxptvye', formref.current, '0okgvwIy_SitRNdkD')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    toast.success("Form Submitted Successfully!!",{
        theme:`${mode==="Light"?"light":"dark"}`
      })
      console.log(formData);
      setFormData({user_name:"",user_subject:"",user_email:"",message:""});
}

  return (
    <div id="contacts" data-aos="fade-right">
      <div className="flex-r contact-container">
        <div className="contact-left flex-c">
          <h3 className="about-heading contact-heading ">Lets Talk about working together</h3>
          <div className="flex-c">
            <div className="flex-r">
              <BiSolidPhoneCall fontSize="2em" />
              <NavLink to="tel:+919695437432" className={mode==="Light"?"nav-col":"color-w"}>+91-9695437432</NavLink>
            </div>
            <div className="flex-r">
              <MdEmail fontSize="2em" />
              <NavLink to="mailto:akashmishra15703@gmail.com? subject= subject text" className={mode==="Light"?"nav-col":"color-w"}>
                akashmishra15703@gmail.com
              </NavLink>
            </div>
            <div className="flex-r">
              <FaLocationDot fontSize="2em" />
              <span style={{textDecoration:"none"}} className={mode==="Light"?"nav-col":"color-w"}>D-17, Sector-58, Noida (U.P.)</span>
            </div>
          </div>
        </div>
        <div className="contact-right flex-c">
          <p>
            <span>What's your story?</span> Get in touch. Always ready to work
            if a right project comes along me
          </p>
          <form ref={formref} onSubmit={submitHandler} className="contact-form flex-c">
            <input type="text" name="user_name" onChange={(event)=>changeHandler(event)} value={formData.user_name} placeholder="Enter your Name" className={mode==="Light"?"color-b":"color-w"} required/>

            <input type="text" name="user_subject" onChange={(event)=>changeHandler(event)} value={formData.user_subject}  placeholder="Subject/Department/Post" className={mode==="Light"?"color-b":"color-w"}  />

            <input type="email" name="user_email" onChange={(event)=>changeHandler(event)} value={formData.user_email}  placeholder="Enter your E-mail" className={mode==="Light"?"color-b":"color-w"}  required/>

            <textarea name="message" onChange={(event)=>changeHandler(event)}value={formData.message}  placeholder="Message" rows="5" className={mode==="Light"?"color-b":"color-w"} ></textarea>

            <button className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
