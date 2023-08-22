import React from "react";
import "./LastArticles.css";

import LastArticleBox from "../LastArticleBox/LastArticleBox";

export default function LastArticles() {
  return (
    <div className="last-articles">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 last-articles-header">
            <h3>آخرین مقاله ها ...</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <LastArticleBox
              title="چطور زبان انگلیسی را سریع یاد بگیریم؟"
              img="./assests/images/last-blog/b-1.jpg"
              author="مسعود صالحی"
              authorImg="./assests/images/teacher/user-1.jpg"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <LastArticleBox
              title="لزوم یادگیری زبان در دنیای امروزی!"
              img="./assests/images/last-blog/b-2.jpg"
              author="پریسا نصرتی"
              authorImg="./assests/images/teacher/user-2.jpg"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <LastArticleBox
              title="چطور امتحان حضوری موفقی داشته باشیم؟"
              img="./assests/images/last-blog/b-3.jpg"
              author="مهدی حسینی"
              authorImg="./assests/images/teacher/user-3.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
