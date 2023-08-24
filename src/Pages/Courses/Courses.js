import React from "react";

import "./Courses.css";
import Topbar from "../../Components/Topbar/Topbar";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "react-bootstrap/Dropdown";
import PopularCoursesBox from "../../Components/PopularCoursesBox/PopularCoursesBox";
import PopularCoursesDatas from "../../PopularCoursesDatas";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Footer from "../../Components/Footer/Footer";
import JoinInNews from "../../Components/JoinInNews/JoinInNews";

export default function Courses() {
  return (
    <>
      <Topbar />
      <div className="courses-top"></div>
      <div className="courses">
        <section className="courses-content">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 col-md-12">
                <h1 className="courses-title">دوره های آموزشی</h1>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/">
                    خانه
                  </Link>
                  <Link
                    underline="hover"
                    color="text.primary"
                    href="/courses"
                    aria-current="page"
                  >
                    دوره های آموزشی
                  </Link>
                </Breadcrumbs>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 order-2 order-lg-1 order-md-2">
                <div className="courses-sidebar-right">
                  <form action="#" className="courses-sidebar-searchbar">
                    <input type="text" placeholder="جستجوی دوره ..." />
                    <button className="form-sidebar-search-btn">
                      <SearchIcon />
                    </button>
                  </form>
                  <div className="courses-sidebar-filter">
                    <h4>دسته بندی دوره</h4>
                    <ul className="courses-sidebar-list">
                      <li className="courses-sidebar-item">
                        <input type="checkbox" />
                        <label htmlFor="#">برنامه نویسی (3)</label>
                      </li>
                      <li className="courses-sidebar-item">
                        <input type="checkbox" />
                        <label htmlFor="#">طراحی سایت (2)</label>
                      </li>
                      <li className="courses-sidebar-item">
                        <input type="checkbox" />
                        <label htmlFor="#">عمومی (2)</label>
                      </li>
                      <li className="courses-sidebar-item">
                        <input type="checkbox" />
                        <label htmlFor="#">فناوری اطاعات (3)</label>
                      </li>
                      <li className="courses-sidebar-item">
                        <input type="checkbox" />
                        <label htmlFor="#">گرافیک (2)</label>
                      </li>
                      <li className="courses-sidebar-item">
                        <input type="checkbox" />
                        <label htmlFor="#">شبکه و امنیت (3)</label>
                      </li>
                    </ul>

                    <h4>مدرسین</h4>
                    <ul className="courses-sidebar-list">
                      <li className="courses-sidebar-item">
                        <input type="checkbox" />
                        <label htmlFor="#"> حسام موسوی (4)</label>
                      </li>
                      <li className="courses-sidebar-item">
                        <input type="checkbox" />
                        <label htmlFor="#">مهرداد عظیمی (11)</label>
                      </li>
                      <li className="courses-sidebar-item">
                        <input type="checkbox" />
                        <label htmlFor="#">الهام کریمی (4)</label>
                      </li>
                      <li className="courses-sidebar-item">
                        <input type="checkbox" />
                        <label htmlFor="#">مسعود راد (7)</label>
                      </li>
                      <li className="courses-sidebar-item">
                        <input type="checkbox" />
                        <label htmlFor="#">مهدی کشاورز (2)</label>
                      </li>
                      <li className="courses-sidebar-item">
                        <input type="checkbox" />
                        <label htmlFor="#">شادی عبدی (3)</label>
                      </li>
                    </ul>

                    <h4>نوع دوره</h4>
                    <ul className="courses-sidebar-list">
                      <li className="courses-sidebar-item">
                        <input type="checkbox" />
                        <label htmlFor="#"> همه (75)</label>
                      </li>
                      <li className="courses-sidebar-item">
                        <input type="checkbox" />
                        <label htmlFor="#">رایگان (15)</label>
                      </li>
                      <li className="courses-sidebar-item">
                        <input type="checkbox" />
                        <label htmlFor="#">نقدی (60)</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 order-1 order-lg-2 order-md-1">
                <div className="courses-left">
                  <div className="row align-items-center justify-content-space-between mb-4">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <span className="courses-left-filter-text">
                        <strong>142</strong> دوره آموزشی یافت شد.
                      </span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="secondary"
                          id="dropdown-basic"
                        >
                          دوره های آموزشی
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            پر مخاطب
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">جدید</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">ویژه</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="row">
                    {PopularCoursesDatas.map((course) => (
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <PopularCoursesBox {...course} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="pagination">
          <Pagination count="10" />
        </div>
      </div>
      <JoinInNews />
      <Footer />
    </>
  );
}
