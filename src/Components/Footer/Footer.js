import React from "react";

import "./Footer.css";
import FooterWidget from "../FooterWidget/FooterWidget";
import {
  BiLogoFacebook,
  BiLogoFacebookCircle,
  BiLogoPlayStore,
} from "react-icons/bi";
import {
  AiFillApple,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsGithub, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <img
                src="./assests/images/logo-light.png"
                alt=""
                className="image-logo-footer"
              />
              <div className="footer-address">
                <p>تهران، خیابان سعادت آباد، خیابان کاج</p>
                <p>02188888888</p>
                <p>info@learnup.com</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3">
              <FooterWidget
                title="لینک مفید"
                item1="درباره ما"
                item2="سوالات متداول"
                item3="تسویه حساب"
                item4="تماس با ما"
                item5="وبلاگ"
              />
            </div>
            <div className="col-lg-2 col-md-3">
              <FooterWidget
                title="دسته بندی"
                item1="طراحی وب"
                item2="شبکه و امنیت"
                item3="برنامه نویسی وب"
                item4="پایگاه داده"
                item5="برنامه نویسی موبایل"
              />
            </div>
            <div className="col-lg-2 col-md-3">
              <FooterWidget
                title="راهنما و پشتیبانی"
                item1="اسناد"
                item2="چت آنلاین"
                item3="ارسال ایمیل"
                item4="قوانین و شرایط"
                item5="سوالات متداول"
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <h4 className="footer-widget-title">دانلود اپلیکیشن</h4>
              <div className="footer-download-app">
                <a href="#" className="footer-downlaod-link">
                  <BiLogoPlayStore className="footer-download-icon" />
                  <div className="footer-download-title">
                    <h5>گوگل پلی</h5>
                    <p>دریافت اپلیکیشن</p>
                  </div>
                </a>
              </div>
              <div className="footer-download-app">
                <a href="#" className="footer-downlaod-link">
                  <AiFillApple className="footer-download-icon" />
                  <div className="footer-download-title">
                    <h5>اپ استور</h5>
                    <p>دریافت اپلیکیشن</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="footer-bottom-container">
              <div className="footer-bottom-text">
                <p>Developed By Zohre Moebian </p>
                <a
                  href="https://github.com/zmohebian13"
                  className="footer-bottom-git-link"
                >
                  <BsGithub className="footer-bottom-git-icon" />
                </a>
              </div>

              <div className="footer-bottom-social">
                <a href="#" className="footer-bottom-social-link">
                  <AiOutlineInstagram className="footer-social-icon" />
                </a>
                <a href="#" className="footer-bottom-social-link">
                  <BiLogoFacebookCircle className="footer-social-icon" />
                </a>
                <a href="#" className="footer-bottom-social-link">
                  <BsTwitter className="footer-social-icon" />
                </a>
                <a href="#" className="footer-bottom-social-link">
                  <AiFillLinkedin className="footer-social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
