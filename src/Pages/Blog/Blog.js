import React from "react";

import "./Blog.css";
import Topbar from "../../Components/Topbar/Topbar";
import { Breadcrumbs, Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import LastArticleBox from "../../Components/LastArticleBox/LastArticleBox";
import JoinInNews from "../../Components/JoinInNews/JoinInNews";
import Footer from "../../Components/Footer/Footer";
import HomeIcon from "@mui/icons-material/Home";


export default function Blog() {
  return (
    <>
      <Topbar />
      <div className="blog-top"></div>
      <div className="blog">
        <div className="blog-content">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 col-md-12">
                <h1 className="blog-title">بلاگ</h1>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center" }}
                    color="inherit"
                    href="/"
                    to="/"
                  >
                    <HomeIcon sx={{ ml: 0.5 }} fontSize="inherit" />
                    خانه
                  </Link>
                  <Link
                    underline="hover"
                    color="text.primary"
                    href="/blog"
                    aria-current="page"
                    to="/blog"
                  >
                    لیست وبلاگ
                  </Link>
                </Breadcrumbs>
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
              <div className="col-lg-4 col-md-4 col-sm-12">
                <LastArticleBox
                  title="چطور امتحان حضوری موفقی داشته باشیم؟"
                  img="./assests/images/last-blog/b-3.jpg"
                  author="مهدی حسینی"
                  authorImg="./assests/images/teacher/user-3.jpg"
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
                  title="چطور زبان انگلیسی را سریع یاد بگیریم؟"
                  img="./assests/images/last-blog/b-1.jpg"
                  author="مسعود صالحی"
                  authorImg="./assests/images/teacher/user-1.jpg"
                />
              </div>
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
                  title="چطور امتحان حضوری موفقی داشته باشیم؟"
                  img="./assests/images/last-blog/b-3.jpg"
                  author="مهدی حسینی"
                  authorImg="./assests/images/teacher/user-3.jpg"
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
            </div>
            <div className="row">
              <div className="pagination">
                <Pagination count="10" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <JoinInNews />
      <Footer />
    </>
  );
}
