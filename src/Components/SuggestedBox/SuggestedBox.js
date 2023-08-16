import React from "react";

import "./SuggestedBox.css";
import { BiMovie } from "react-icons/bi";

export default function SuggestedBox({ title, subTitle, img, backgroundColor, titleColor }) {
  return (
    <div className="suggested-course-box">
      <div className="suggested-box-content" style={{ backgroundColor }}>
        <div className="suggested-box-right">
          <div className="suggested-box-right-img">
            <img src={img} alt="" className="suggested-box-img" />
          </div>
        </div>
        <div className="suggested-box-left">
          <p
            className="suggested-box-left-title"
            style={{ color: titleColor }}
          >
            {title}
          </p>
          <p className="suggested-box-left-subtitle">
            <BiMovie />
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
