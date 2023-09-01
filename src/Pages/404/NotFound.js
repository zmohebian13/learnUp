import React from "react";

import "./NotFound.css";
import Topbar from "../../Components/Topbar/Topbar";
import JoinInNews from "../../Components/JoinInNews/JoinInNews";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Topbar />

      <div className="not-found">
        <div className="container">
          <div className="row justify-content-center pt-5">
            <div className="col-lg-7 col-md-10 text-center pb-5 mt-5">
              <img
                src="/assests/images/notFound/404.png"
                alt=""
                className="notFound-img"
              />
              <h5 className="notfound-title">صفحه مورد نظر پیدا نشد !</h5>
              <Link to="/">
                <button className="button-48 login-form-btn" role="button">
                  <span className="text">بازگشت به خانه</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <JoinInNews />
      <Footer />
    </>
  );
}
