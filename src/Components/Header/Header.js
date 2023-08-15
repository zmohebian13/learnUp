import React from "react";

import "./Header.css";
import Topbar from "../Topbar/Topbar";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <div>
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
                    <SearchIcon className="landing-form-search-icon"/>
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
    </div>
  );
}
