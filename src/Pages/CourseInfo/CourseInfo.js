import React from "react";

import "./CourseInfo.css";
import Topbar from "../../Components/Topbar/Topbar";
import Footer from "../../Components/Footer/Footer";
import JoinInNews from '../../Components/JoinInNews/JoinInNews'
import CourseDetails from "../../Components/CourseDetails/CourseDetails";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function CourseInfo() {
  return (
    <div>
      <Topbar />
      <div className="course-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  خانه
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  href="/courses"
                  aria-current="page"
                >
                  دوره های آموزشی
                </Link>
                <Link
                  underline="hover"
                  color="text.primary"
                  href="/course-info/react"
                  aria-current="page"
                >
                  دوره آموزش پلاگین نویسی وردپرس{" "}
                </Link>
              </Breadcrumbs>
            </div>
          </div>
          <CourseDetails />
        </div>
      </div>
      <JoinInNews />
      <Footer />
    </div>
  );
}
