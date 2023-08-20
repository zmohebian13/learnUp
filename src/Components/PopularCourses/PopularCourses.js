import React from "react";
import "./PopularCourses.css";
import "../../PopularCoursesDatas";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PopularCoursesBox from "../PopularCoursesBox/PopularCoursesBox";
import PopularCoursesDatas from "../../PopularCoursesDatas";

export default function PopularCourses() {
  return (
    <div className="popular-courses">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 suggested-title">
            <p>دوره های آموزشی پرمخاطب</p>
            <h3>
              <FavoriteBorderIcon className="suggusted-course-icon" />
              <span className="suggested-red-title">محبوب ترین</span> دوره ها{" "}
            </h3>
          </div>
        </div>
        <div className="col-lg-10 suggested-course-box-content ">
          <div className="row">
            {PopularCoursesDatas.map((course) => (
              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <PopularCoursesBox {...course}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
