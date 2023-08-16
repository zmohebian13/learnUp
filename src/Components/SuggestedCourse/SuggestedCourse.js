import React from "react";

import "./SuggestedCourse.css";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import SuggestedBox from "../SuggestedBox/SuggestedBox";
import SuggestBoxDetails from "../suggestBoxDetails/suggestBoxDetails";

export default function SuggestedCourse() {
  return (
    <div className="suggested-course">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 suggested-title">
            <p>دسته بندی های منتخب</p>
            <h3>
              <GolfCourseIcon className="suggusted-course-icon" />
              دوره های <span className="suggested-red-title">
                پیشنهادی
              </span>{" "}
              جشنواره
            </h3>
          </div>
          <div className="col-lg-10 suggested-course-box-content ">
            <div className="row">
              {SuggestBoxDetails.map((suggestBox) => (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <SuggestedBox key={suggestBox.id} {...suggestBox} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
