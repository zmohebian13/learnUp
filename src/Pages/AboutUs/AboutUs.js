import React from "react";

import "./AboutUs.css";
import Topbar from "../../Components/Topbar/Topbar";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { MdMonitorHeart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineStatusOnline } from "react-icons/hi";
import JoinInNews from "../../Components/JoinInNews/JoinInNews";
import Footer from "../../Components/Footer/Footer";
import TopProfessors from "../../Components/TopProfessors/TopProfessors";

export default function AboutUs() {
  return (
    <>
      <Topbar />
      <div className="courses-top"></div>
      <div className="about">
        <div className="about-content">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 col-md-12">
                <h1 className="courses-title">درباره ما</h1>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center" }}
                    color="inherit"
                    href="/"
                    to="/"
                  >
                    <HomeIcon sx={{ ml: 0.5 }} fontSize="inherit" />
                    خانه
                  </Link>
                  <Link
                    underline="hover"
                    color="text.primary"
                    href="/courses"
                    aria-current="page"
                    to="/about"
                  >
                    درباره ما
                  </Link>
                </Breadcrumbs>
              </div>
            </div>
            <div className="row align-items-center mb-5 pb-5">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="about-right">
                  <ul className="about-right-list">
                    <li className="about-right-item">
                      <MdMonitorHeart className="about-right-item-icon" />
                      <div className="about-right-item-title">
                        <p>نظارت دقیق و ارزیابی عملکرد معلمان</p>
                        <h5>
                          هر کجای ایران یا دنیا که هستید، معلم های ما به صورت
                          زنده به شما تدریس می کنند.
                        </h5>
                      </div>
                    </li>
                    <li className="about-right-item">
                      <AiOutlineHeart className="about-right-item-icon" />
                      <div className="about-right-item-title">
                        <p>شفافیت قیمت و تضمین پایین‌ترین قیمت‌ها</p>
                        <h5>
                          در زمان ثبت درخواست امکان نحوه برگزاری کلاس بصورت
                          حضوری یا آنلاین وجود دارد.
                        </h5>
                      </div>
                    </li>
                    <li className="about-right-item">
                      <HiOutlineStatusOnline className="about-right-item-icon" />
                      <div className="about-right-item-title">
                        <p>امکان برگزاری کلاس بصورت حضوری یا آنلاین</p>
                        <h5>
                          از بین بیش از 2000 معلم فعال با استفاده از فیلتر‌ها
                          بهترین استاد متناسب با شرایط خود را بیابید.
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <img
                  src="/assests/images/about/edu_2.png"
                  alt=""
                  className="about-left-img img-fluid"
                />
              </div>
            </div>
            <div className="row">
              <TopProfessors />
            </div>
          </div>
        </div>
      </div>
      <JoinInNews />
      <Footer />
    </>
  );
}
