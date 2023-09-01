import React from 'react'

import "./Register.css";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <div className="container">
        <div className="row justify-content-center pt-5">
          <div className="col-lg-11 col-md-11">
            <div className="row  rounded justify-content-center align-items-center p-5">
              <div className="col-lg-6 col-md-5">
                <div className="register-right">
                  <img
                    src="/assests/images/login/Mobile login-pana.png"
                    alt=""
                    className="register-right-img img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-7">
                <div className="register-left">
                  <div className="register-left-title">
                    <h5>
                      ایجاد{" "}
                      <span className="register-subtitle">حساب کاربری</span>
                    </h5>
                    <Link to="/">
                      <img
                        src="/assests/images/logo.png"
                        alt=""
                        className="register-left-logo"
                      />
                    </Link>
                  </div>

                  <div className="register-form-group">
                    <div className="register-form-email-input">
                      <label htmlFor="">ایمیل</label>
                      <input type="email" placeholder="example@gmail.com" />
                    </div>
                    <div className="register-form-password">
                      <div className="register-form-password-setting">
                        <label htmlFor="">رمز عبور</label>
                      </div>
                      <input type="password" placeholder="********" />
                    </div>
                    <button class="button-48 register-form-btn" role="button">
                      <span class="text">ثبت نام</span>
                    </button>
                  </div>
                  <div className="register-enter-mood-detail">
                    <p>یا ثبت نام با</p>
                    <div className="register-enter-mood">
                      <div className="register-enter-mood-item">
                        <FcGoogle />
                        Google
                      </div>
                      <div className="register-enter-mood-item">
                        <BiLogoFacebookCircle />
                        FaceBook
                      </div>
                    </div>
                  </div>
                  <div className="register-register">
                    <p className="register-register-title">
                      آیا حساب کاربری دارید ؟
                      <span>
                        <Link to="/login">ورود</Link>
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
