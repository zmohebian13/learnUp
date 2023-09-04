import React from "react";

import "./ContactUs.css";
import Topbar from "../../Components/Topbar/Topbar";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import JoinInNews from "../../Components/JoinInNews/JoinInNews";
import Footer from "../../Components/Footer/Footer";
import { AiOutlineHome } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { TfiMobile } from "react-icons/tfi";

export default function ContactUs() {
  return (
    <>
      <Topbar />
      <div className="courses-top"></div>
      <div className="contact">
        <div className="contact-top">
          <div className="container">
            <div className="row mb-5 align-items-center">
              <div className="col-lg-12 col-md-12">
                <h1 className="courses-title">تماس با ما</h1>
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
                    to="/contact"
                  >
                    تماس با ما
                  </Link>
                </Breadcrumbs>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-7">
                <div className="contact-right-form">
                  <div className="contact-form-title">
                    <h4>فرم ثبت نام</h4>
                  </div>
                  <form className="contact-form-group">
                    <div className="contact-form-item">
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <label>نام کامل</label>
                          <input
                            type="text"
                            placeholder="نام خود را وارد کنید"
                          />
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <label>ایمیل</label>
                          <input
                            type="email"
                            placeholder="ایمیل خود را وارد کنید"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <label>عنوان</label>
                          <input type="text" placeholder="عنوان را وارد کنید" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <label>پیام</label>
                          <textarea
                            type="text"
                            placeholder="پیام خود را بنویسید"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      className="button-48 login-form-btn contact-form-btn"
                      role="button"
                    >
                      <span className="text">ارسال درخواست</span>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-5">
                <div className="contact-left">
                  <div className="contact-left-title">
                    <h4>راه های ارتباطی</h4>
                  </div>
                  <div className="contact-left-subtitle">
                    <p>
                      برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                      هدف بهبود ابزارهای کاربردی می باشد.
                    </p>
                    <ul className="contact-left-list">
                      <li className="contact-left-item">
                        <AiOutlineHome className="contact-left-item-icon" />
                        <div className="contact-form-item-address">
                          <h5>آدرس ما</h5>
                          <p>
                            ایران، تهران خیابان سعادت آباد، خیابان کاج شمال غربی
                          </p>
                        </div>
                      </li>
                      <li className="contact-left-item">
                        <TfiEmail className="contact-left-item-icon" />
                        <div className="contact-form-item-address">
                          <h5>پست الکترونیکی</h5>
                          <p>
                            support@example.com
                            <br />
                            example@gmail.com
                          </p>
                        </div>
                      </li>
                      <li className="contact-left-item">
                        <TfiMobile className="contact-left-item-icon" />
                        <div className="contact-form-item-address">
                          <h5>شماره تماس</h5>
                          <p>
                            02188888888
                            <br />
                            09360000000
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JoinInNews />
      <Footer />
    </>
  );
}
