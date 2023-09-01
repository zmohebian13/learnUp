import React from "react";

import "./CourseInfo.css";
import Topbar from "../../Components/Topbar/Topbar";
import Footer from "../../Components/Footer/Footer";
import JoinInNews from "../../Components/JoinInNews/JoinInNews";
import CourseDetails from "../../Components/CourseDetails/CourseDetails";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function CourseInfo() {
  return (
    <div>
      <Topbar />
      <div className="course-info">
        <div className="container">
          <div className="row ">
            <CourseDetails />
          </div>
        </div>
      </div>
      <JoinInNews />
      <Footer />
    </div>
  );
}
