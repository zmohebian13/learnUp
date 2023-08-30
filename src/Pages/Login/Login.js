import React from "react";

import "./Login.css";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="login-container">
            <div className="login-right">
              <img
                src="/assests/images/login/Account-amico.png"
                alt=""
                className="login-right-image"
              />
            </div>
            <div className="login-left">
              <div className="login-left-title">
                <h5>
                  ورود به <span className="login-subtitle">حساب کاربری</span>
                </h5>
                <img
                  src="/assests/images/logo.png"
                  alt=""
                  className="login-left-logo"
                />
              </div>

              <div className="login-form-group">
                <div className="login-form-email-input">
                  <label htmlFor="">ایمیل</label>
                  <input type="email" placeholder="example@gmail.com" />
                </div>
                <div className="login-form-password">
                  <div className="login-form-password-setting">
                    <label htmlFor="">رمز عبور</label>
                    <a href="#" className="login-form-password-forget">
                      رمز عبور خود را فراموش کرده اید ؟
                    </a>
                  </div>
                  <input type="password" placeholder="********" />
                </div>
                <button class="button-48 login-form-btn" role="button">
                  <span class="text">ورود</span>
                </button>
              </div>
              <div className="login-enter-mood-detail">
                <p>یا ورود با</p>
                <div className="login-enter-mood">
                  <div className="login-enter-mood-item">
                    <FcGoogle />
                    Google
                  </div>
                  <div className="login-enter-mood-item">
                    <BiLogoFacebookCircle />
                    FaceBook
                  </div>
                </div>
              </div>
              <div className="login-register">
                <p className="login-register-title">
                  آیا هنوز ثبت نام نکرده اید ؟
                  <span>
                    <Link to="/register">ثب نام کنید</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
