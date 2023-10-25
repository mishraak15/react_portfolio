import React, { useState } from "react";
import "./Card.css";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidSchool, BiSolidNavigation } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import {toast} from 'react-toastify';

export default function Card({ data, mode }) {
  const title = data.title;
  const institute = data.institute;
  const location = data.location;
  const year = data.year;
  const site = data.site;
  const img = data.img;
  const percentage = data.percentage;
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  function likedHandler() {
    if (like) {
      setLike(false);
      toast.error("Removed Liked",{
        theme:`${mode==="Light"?"light":"dark"}`
      })
    } else {
      setLike(true);
      toast.success("Liked a Qualification",{
        theme:`${mode==="Light"?"light":"dark"}`
      })
    }
  }

  function dislikedHandler() {
    if (dislike) {
      setDislike(false);
      toast.success("Removed Dislike",{
        theme:`${mode==="Light"?"light":"dark"}`
      })
    } else {
      setDislike(true);
      toast.error("Disliked a Qualification",{
        theme:`${mode==="Light"?"light":"dark"}`
      })
    }
  }

  return (
    <div className="card flex-c">
      <img className="card-image" src={img} alt="college..." />
      <h2 style={{ alignSelf: "center", textAlign: "center", margin: "5px 0" }}>
        {title}
      </h2>
      <div className="flex-r">
        <BiSolidSchool fontSize="1.5em" />
        <div>{institute}</div>
      </div>
      <div className="flex-r">
        <FaLocationDot fontSize="1.5em" color="var(--orange-d)" />
        <div>{location}</div>
      </div>
      <div className="flex-r percentage-box">
        <div className="flex-r">
          <BsCalendarDate fontSize="1.5em" />
          <div>{year}</div>
        </div>
        <div style={{ color: "var(--orange-l)" }}>{percentage}</div>
      </div>
      <div className="flex-r card-icons">
        {like ? (
          <AiFillLike onClick={likedHandler} fontSize="2em" />
        ) : (
          <AiOutlineLike onClick={likedHandler} fontSize="2em" />
        )}
        {dislike ? (
          <AiFillDislike onClick={dislikedHandler} fontSize="2em" />
        ) : (
          <AiOutlineDislike onClick={dislikedHandler} fontSize="2em" />
        )}
        <NavLink
          target="_blank"
          to={site}
          className={`institue-link ${
            mode === "Light" ? "color-b" : "color-w"
          }`}
        >
          <BiSolidNavigation fontSize="2em" />
        </NavLink>
      </div>
    </div>
  );
}
