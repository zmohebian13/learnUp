import React from "react";

import "./Rules.css";
import Topbar from "../../Components/Topbar/Topbar";
import { Breadcrumbs } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Link from "@mui/material/Link";
import JoinInNews from "../../Components/JoinInNews/JoinInNews";
import Footer from "../../Components/Footer/Footer";

export default function Rules() {
  return (
    <>
      <Topbar />
      <div className="courses-top"></div>
      <div className="rules">
        <div className="rules-content">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 col-md-12">
                <h1 className="courses-title">شرایط و قوانین</h1>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center" }}
                    color="inherit"
                    href="/"
                  >
                    <HomeIcon sx={{ ml: 0.5 }} fontSize="inherit" />
                    خانه
                  </Link>
                  <Link
                    underline="hover"
                    color="text.primary"
                    href="/rules"
                    aria-current="page"
                  >
                    شرایط و قوانین
                  </Link>
                </Breadcrumbs>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="rules-body">
                  <h5>شرایط و ضوابط ما</h5>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی
                    نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                    لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                    متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
                    در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
                    متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
                    طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                    زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام
                    و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
                    رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
                    سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                    گیرد. در این صورت می توان امید داشت که تمام و دشواری موجود
                    در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
                    نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته
                    اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </p>
                </div>
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
