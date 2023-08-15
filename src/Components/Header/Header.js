import React from "react";

import "./Header.css";
import Topbar from "../Topbar/Topbar";
import SearchIcon from "@mui/icons-material/Search";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Header() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="header">
      <Topbar />
      <div className="landing">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-12">
              <div className="landing-content">
                <h1>
                  <span className="landing-title">تمدید جشنواره بهار</span>
                  <br />
                  <span className="landing-title-time">به مدت 30 روز</span>
                </h1>
                <p className="landing-subtitle">
                  بهترین پلتفرم یادگیری و دوره های آموزشی که با مناسب ترین قیمت
                  توسط مدرسین مجرب آموزش داده می شود تا به شما در کسب مهارت های
                  جدید کمک کند.
                </p>
                <div className="landing-search">
                  <div className="landing-form-group">
                    <SearchIcon className="landing-form-search-icon" />
                    <input
                      type="text"
                      className="col-lg-10 col-md-10 col-sm-12 landing-form-input"
                      placeholder="دوره آموزشی"
                    />
                    <div className="landing-form-btn">
                      <button>برو</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brands">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-12 col-sm-12 slider-brand">
              <Slider {...settings}>
                <div>
                  <img
                    src="./assests/images/brands/lg-1.png"
                    alt=""
                    className="brands-img img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="./assests/images/brands/lg-2.png"
                    alt=""
                    className="brands-img img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="./assests/images/brands/lg-3.png"
                    alt=""
                    className="brands-img img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="./assests/images/brands/lg-4.png"
                    alt=""
                    className="brands-img img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="./assests/images/brands/lg-5.png"
                    alt=""
                    className="brands-img img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="./assests/images/brands/lg-6.png"
                    alt=""
                    className="brands-img img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="./assests/images/brands/lg-7.png"
                    alt=""
                    className="brands-img img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="./assests/images/brands/lg-8.png"
                    alt=""
                    className="brands-img img-fluid"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
