import React from "react";

import "./Login.css";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BsPeople } from "react-icons/bs";
import { IoMdLogIn } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="row justify-content-center pt-5">
          <div className="col-lg-11 col-md-11">
            <div className="row  rounded justify-content-center align-items-center p-5">
              <div className="col-lg-6 col-md-5">
                <div className="login-right">
                  <img
                    src="/assests/images/login/Account-amico.png"
                    alt=""
                    className="login-right-img img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-7">
                <div className="login-left">
                  <div className="login-left-title">
                    <h5>
                      ورود به{" "}
                      <span className="login-subtitle">حساب کاربری</span>
                    </h5>
                    <Link to="/">
                      <img
                        src="/assests/images/logo.png"
                        alt=""
                        className="login-left-logo"
                      />
                    </Link>
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
                      <span class="text">
                        <IoMdLogIn className="login-enter-icon" />
                        ورود
                      </span>
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
      </div>
    </div>
  );
}
