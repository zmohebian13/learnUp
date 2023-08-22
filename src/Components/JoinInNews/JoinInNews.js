import React from "react";
import './JoinInNews.css'

export default function JoinInNews() {
  return (
    <div className="join-news">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 join-news-container">
            <h3 className="join-news-title">به جامعه هزاران دانشجو بپیوندید!</h3>
            <p className="join-news-subtitle">
              به جامعه میلیونی دانشجویان ما بپیوندید و به هزاران ساعت آموزش در
              حوزه‌های گوناگون دسترسی داشته باشید.
            </p>
            <div className="join-input-group">
                <input type="text" placeholder="ایمیل" className="join-input" />
                <button className="join-btn">عضویت</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
