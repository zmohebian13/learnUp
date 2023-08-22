import React from "react";

import "./TopProfessors.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function TopProfessors() {
  return (
    <div className="top-professors">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 top-professors-header">
            <p>اساتید برتر</p>
            <h3>
              دوره های <span>ویژه</span> با مدرسان
            </h3>
          </div>
        </div>
        <div className="row">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slider-container">
                <img
                  src="./assests/images/teacher/user-1.jpg"
                  alt=""
                  className="slider-img"
                />
                <div className="slider-info">
                  <h5>مهرداد نوروزی</h5>
                  <p>طراح وب</p>
                  <div className="slider-social">
                    <TwitterIcon className="slider-social-icon" />
                    <FacebookIcon className="slider-social-icon" />
                    <LinkedInIcon className="slider-social-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-container">
                <img
                  src="./assests/images/teacher/user-2.jpg"
                  alt=""
                  className="slider-img"
                />
                <div className="slider-info">
                  <h5>نازنین عبدی</h5>
                  <p>مدیر تیم</p>
                  <div className="slider-social">
                    <TwitterIcon className="slider-social-icon" />
                    <FacebookIcon className="slider-social-icon" />
                    <LinkedInIcon className="slider-social-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-container">
                <img
                  src="./assests/images/teacher/user-3.jpg"
                  alt=""
                  className="slider-img"
                />
                <div className="slider-info">
                  <h5>علی صالحی</h5>
                  <p>مدیر فروش</p>
                  <div className="slider-social">
                    <TwitterIcon className="slider-social-icon" />
                    <FacebookIcon className="slider-social-icon" />
                    <LinkedInIcon className="slider-social-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-container">
                <img
                  src="./assests/images/teacher/user-4.jpg"
                  alt=""
                  className="slider-img"
                />
                <div className="slider-info">
                  <h5>نیلوفر موسوی</h5>
                  <p>مدیر عامل</p>
                  <div className="slider-social">
                    <TwitterIcon className="slider-social-icon" />
                    <FacebookIcon className="slider-social-icon" />
                    <LinkedInIcon className="slider-social-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-container">
                <img
                  src="./assests/images/teacher/user-5.jpg"
                  alt=""
                  className="slider-img"
                />
                <div className="slider-info">
                  <h5>مسعود قاسمی</h5>
                  <p>برنامه نویس</p>
                  <div className="slider-social">
                    <TwitterIcon className="slider-social-icon" />
                    <FacebookIcon className="slider-social-icon" />
                    <LinkedInIcon className="slider-social-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-container">
                <img
                  src="./assests/images/teacher/user-1.jpg"
                  alt=""
                  className="slider-img"
                />
                <div className="slider-info">
                  <h5>مهرداد نوروزی</h5>
                  <p>طراح وب</p>
                  <div className="slider-social">
                    <TwitterIcon className="slider-social-icon" />
                    <FacebookIcon className="slider-social-icon" />
                    <LinkedInIcon className="slider-social-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-container">
                <img
                  src="./assests/images/teacher/user-2.jpg"
                  alt=""
                  className="slider-img"
                />
                <div className="slider-info">
                  <h5>نازنین عبدی</h5>
                  <p>مدیر تیم</p>
                  <div className="slider-social">
                    <TwitterIcon className="slider-social-icon" />
                    <FacebookIcon className="slider-social-icon" />
                    <LinkedInIcon className="slider-social-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-container">
                <img
                  src="./assests/images/teacher/user-3.jpg"
                  alt=""
                  className="slider-img"
                />
                <div className="slider-info">
                  <h5>علی صالحی</h5>
                  <p>مدیر فروش</p>
                  <div className="slider-social">
                    <TwitterIcon className="slider-social-icon" />
                    <FacebookIcon className="slider-social-icon" />
                    <LinkedInIcon className="slider-social-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-container">
                <img
                  src="./assests/images/teacher/user-4.jpg"
                  alt=""
                  className="slider-img"
                />
                <div className="slider-info">
                  <h5>نیلوفر موسوی</h5>
                  <p>مدیر عامل</p>
                  <div className="slider-social">
                    <TwitterIcon className="slider-social-icon" />
                    <FacebookIcon className="slider-social-icon" />
                    <LinkedInIcon className="slider-social-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-container">
                <img
                  src="./assests/images/teacher/user-5.jpg"
                  alt=""
                  className="slider-img"
                />
                <div className="slider-info">
                  <h5>مسعود قاسمی</h5>
                  <p>برنامه نویس</p>
                  <div className="slider-social">
                    <TwitterIcon className="slider-social-icon" />
                    <FacebookIcon className="slider-social-icon" />
                    <LinkedInIcon className="slider-social-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
