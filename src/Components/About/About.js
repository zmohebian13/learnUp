import React from "react";

import "./About.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="col-lg-10 about-container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 about-container-right">
              <h3>
                مسیرهای <span>یادگیری</span> و مجموعه های آموزشی
              </h3>
              <p>
                حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
                خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. برای شرایط فعلی
                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
                شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و
                فرهنگ پیشرو در زبان فارسی ایجاد کرد.
              </p>
              <div className="about-items">
                <div className="about-item">
                  <p>+7</p>
                  <span>ساعت آموزش</span>
                </div>
                <div className="about-item">
                  <p>77</p>
                  <span>نفر دانشجو</span>
                </div>
                <div className="about-item">
                  <p>84+</p>
                  <span>حوزه تخصصی</span>
                </div>
              </div>
              <div className="about-button">
                <button className="button-48" role="button">
                  <span class="text">
                    درباره ما
                    <ArrowBackIosNewIcon className="about-button-icon" />
                  </span>
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 about-container-left">
              <img
                src="./assests/images/about/edu_2.png"
                alt=""
                className="img-fluid about-left-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
