import React from "react";
import "./CourseDetails.css";

import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";
import Accordion from "react-bootstrap/Accordion";
import ProgressBar from "react-bootstrap/ProgressBar";
import { TiMediaPlayReverse } from "react-icons/ti";
import { FaLock } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";

export default function CourseDetails() {
  return (
    <div className="course-detail">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <div className="course-detail-title">
              <h4>دوره آموزش پلاگین نویسی وردپرس</h4>
              <div className="course-detail-subtitle">
                <span className="text-danger rounded">برنامه نویسی</span>
                <div className="course-detail-rate">
                  <StarIcon className="course-detail-rate-star-icon" />
                  <StarIcon className="course-detail-rate-star-icon" />
                  <StarIcon className="course-detail-rate-star-icon" />
                  <StarIcon className="course-detail-rate-star-icon" />
                </div>
              </div>
            </div>
            <div className="course-datail-informations">
              <ul className="course-detail-list">
                <li className="course-detail-item">
                  <span>بروزرسانی</span>
                  10 بهمن 1399
                </li>
                <li className="course-detail-item">
                  <span>سطح</span> مقدماتی
                </li>
                <li className="course-detail-item">
                  <span>هنرجویان</span>
                  742,614
                </li>
                <li className="course-detail-item">
                  <span>زبان</span> انگلیسی
                </li>
              </ul>
              <div className="course-detail-fav-btn">
                <a href="#" className="course-detail-fav-btn-link">
                  <FavoriteIcon />
                  <span>افزودن به مورد علاقه</span>
                </a>
              </div>
            </div>
            <div className="course-detail-video">
              <img
                src="/assests/images/banner-5.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="course-detail-body">
              <h5>توضیحات</h5>
              <p>
                طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
                موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
                نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
                دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. از آنجایی که
                گنجاندن امکانات بیشتر باعث سنگین‌تر شدن آن می‌شود، و از طرف دیگر
                همه کاربران وردپرس به آن نیازی ندارند، این افزونه‌های وردپرس
                هستند که کار توسعه امکانات وردپرس را به عهده دارند. در ادامه
                مطلب با آکادمی لرن آپ مرجع آموزش برنامه نویسی همراه باشید. اگر
                علاقمند به کسب اطلاعات بیشتر درباره وردپرس هستید پیشنهاد میکنیم
                به سایت رسمی وردپرس مراجعه نمایید.
              </p>
              <h5>پیشنیازهای این دوره</h5>
              <ul className="course-detail-body-list">
                <li className="course-detail-body-item">
                  <CheckIcon />
                  <span>دوره تصویری آموزش HTML به زبان فارسی</span>
                </li>
                <li className="course-detail-body-item">
                  <CheckIcon />
                  <span>دوره تصویری آموزش PHP به زبان فارسی</span>
                </li>
                <li className="course-detail-body-item">
                  <CheckIcon />
                  <span>دوره تصویری آموزش وردپرس به زبان فارسی</span>
                </li>
                <li className="course-detail-body-item">
                  <CheckIcon />
                  <span>آشنایی نسبی با MySQL</span>
                </li>
                <li className="course-detail-body-item">
                  <CheckIcon />
                  <span>آشنایی به نصب و مدیریت وردپرس</span>
                </li>
              </ul>
            </div>
            <div className="course-detail-part">
              <h5>سرفصل های دوره</h5>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    دوره اول : مقدمه و معرفی مدرس
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="accordion-item-details">
                      <div className="accordion-item-title">
                        <TiMediaPlayReverse className="accordion-item-title-icon" />
                        <span>دوره 1 :</span>
                        <p>معرفی دوره</p>
                      </div>
                      <div className="accordion-item-situation">
                        <AiFillEye className="accordion-item-seen-icon" />
                      </div>
                    </div>
                    <div className="accordion-item-details">
                      <div className="accordion-item-title">
                        <TiMediaPlayReverse className="accordion-item-title-icon" />
                        <span>دوره 2 :</span>
                        <p>متاباکس و ذخیره اطلاعات برای پست ها</p>
                      </div>
                      <div className="accordion-item-situation">
                        <AiFillEye className="accordion-item-seen-icon" />
                      </div>
                    </div>
                    <div className="accordion-item-details">
                      <div className="accordion-item-title">
                        <TiMediaPlayReverse className="accordion-item-title-icon" />
                        <span>دوره 3 :</span>
                        <p>استفاده از قالب استاندارد در پلاگین ها</p>
                      </div>
                      <div className="accordion-item-situation">
                        <AiFillEye className="accordion-item-seen-icon" />
                      </div>
                    </div>
                    <div className="accordion-item-details">
                      <div className="accordion-item-title">
                        <TiMediaPlayReverse className="accordion-item-title-icon" />
                        <span>دوره 4 :</span>
                        <p>ذخیره و بازیابی تنظیمات در وردپرس</p>
                      </div>
                      <div className="accordion-item-situation">
                        <FaLock className="accordion-item-lock-icon" />
                      </div>
                    </div>
                    <div className="accordion-item-details">
                      <div className="accordion-item-title">
                        <TiMediaPlayReverse className="accordion-item-title-icon" />
                        <span>دوره 5 :</span>
                        <p>ساخت منوها در بخش مدیریت</p>
                      </div>
                      <div className="accordion-item-situation">
                        <FaLock className="accordion-item-lock-icon" />
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    دوره دوم: پیاده سازی پلاگین آمار بازدید{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="accordion-item-details">
                      <div className="accordion-item-title">
                        <TiMediaPlayReverse className="accordion-item-title-icon" />
                        <span>دوره 1 :</span>
                        <p>معرفی دوره</p>
                      </div>
                      <div className="accordion-item-situation">
                        <AiFillEye className="accordion-item-seen-icon" />
                      </div>
                    </div>
                    <div className="accordion-item-details">
                      <div className="accordion-item-title">
                        <TiMediaPlayReverse className="accordion-item-title-icon" />
                        <span>دوره 2 :</span>
                        <p>متاباکس و ذخیره اطلاعات برای پست ها</p>
                      </div>
                      <div className="accordion-item-situation">
                        <AiFillEye className="accordion-item-seen-icon" />
                      </div>
                    </div>
                    <div className="accordion-item-details">
                      <div className="accordion-item-title">
                        <TiMediaPlayReverse className="accordion-item-title-icon" />
                        <span>دوره 3 :</span>
                        <p>استفاده از قالب استاندارد در پلاگین ها</p>
                      </div>
                      <div className="accordion-item-situation">
                        <AiFillEye className="accordion-item-seen-icon" />
                      </div>
                    </div>
                    <div className="accordion-item-details">
                      <div className="accordion-item-title">
                        <TiMediaPlayReverse className="accordion-item-title-icon" />
                        <span>دوره 4 :</span>
                        <p>ذخیره و بازیابی تنظیمات در وردپرس</p>
                      </div>
                      <div className="accordion-item-situation">
                        <FaLock className="accordion-item-lock-icon" />
                      </div>
                    </div>
                    <div className="accordion-item-details">
                      <div className="accordion-item-title">
                        <TiMediaPlayReverse className="accordion-item-title-icon" />
                        <span>دوره 5 :</span>
                        <p>ساخت منوها در بخش مدیریت</p>
                      </div>
                      <div className="accordion-item-situation">
                        <FaLock className="accordion-item-lock-icon" />
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item>
                  <Accordion.Header>
                    دوره سوم: پیاده سازی پلاگین رای دادن به مطالب{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="accordion-item-details">
                      <div className="accordion-item-title">
                        <TiMediaPlayReverse className="accordion-item-title-icon" />
                        <span>دوره 1 :</span>
                        <p>معرفی دوره</p>
                      </div>
                      <div className="accordion-item-situation">
                        <AiFillEye className="accordion-item-seen-icon" />
                      </div>
                    </div>
                    <div className="accordion-item-details">
                      <div className="accordion-item-title">
                        <TiMediaPlayReverse className="accordion-item-title-icon" />
                        <span>دوره 2 :</span>
                        <p>متاباکس و ذخیره اطلاعات برای پست ها</p>
                      </div>
                      <div className="accordion-item-situation">
                        <AiFillEye className="accordion-item-seen-icon" />
                      </div>
                    </div>
                    <div className="accordion-item-details">
                      <div className="accordion-item-title">
                        <TiMediaPlayReverse className="accordion-item-title-icon" />
                        <span>دوره 3 :</span>
                        <p>استفاده از قالب استاندارد در پلاگین ها</p>
                      </div>
                      <div className="accordion-item-situation">
                        <AiFillEye className="accordion-item-seen-icon" />
                      </div>
                    </div>
                    <div className="accordion-item-details">
                      <div className="accordion-item-title">
                        <TiMediaPlayReverse className="accordion-item-title-icon" />
                        <span>دوره 4 :</span>
                        <p>ذخیره و بازیابی تنظیمات در وردپرس</p>
                      </div>
                      <div className="accordion-item-situation">
                        <FaLock className="accordion-item-lock-icon" />
                      </div>
                    </div>
                    <div className="accordion-item-details">
                      <div className="accordion-item-title">
                        <TiMediaPlayReverse className="accordion-item-title-icon" />
                        <span>دوره 5 :</span>
                        <p>ساخت منوها در بخش مدیریت</p>
                      </div>
                      <div className="accordion-item-situation">
                        <FaLock className="accordion-item-lock-icon" />
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    دوره نهایی: پیاده سازی پلاگین فروشگاه اینترنتی با درگاه
                    پرداخت{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="accordion-item-details">
                      <div className="accordion-item-title">
                        <TiMediaPlayReverse className="accordion-item-title-icon" />
                        <span>دوره 1 :</span>
                        <p>معرفی دوره</p>
                      </div>
                      <div className="accordion-item-situation">
                        <AiFillEye className="accordion-item-seen-icon" />
                      </div>
                    </div>
                    <div className="accordion-item-details">
                      <div className="accordion-item-title">
                        <TiMediaPlayReverse className="accordion-item-title-icon" />
                        <span>دوره 2 :</span>
                        <p>متاباکس و ذخیره اطلاعات برای پست ها</p>
                      </div>
                      <div className="accordion-item-situation">
                        <AiFillEye className="accordion-item-seen-icon" />
                      </div>
                    </div>
                    <div className="accordion-item-details">
                      <div className="accordion-item-title">
                        <TiMediaPlayReverse className="accordion-item-title-icon" />
                        <span>دوره 3 :</span>
                        <p>استفاده از قالب استاندارد در پلاگین ها</p>
                      </div>
                      <div className="accordion-item-situation">
                        <AiFillEye className="accordion-item-seen-icon" />
                      </div>
                    </div>
                    <div className="accordion-item-details">
                      <div className="accordion-item-title">
                        <TiMediaPlayReverse className="accordion-item-title-icon" />
                        <span>دوره 4 :</span>
                        <p>ذخیره و بازیابی تنظیمات در وردپرس</p>
                      </div>
                      <div className="accordion-item-situation">
                        <FaLock className="accordion-item-lock-icon" />
                      </div>
                    </div>
                    <div className="accordion-item-details">
                      <div className="accordion-item-title">
                        <TiMediaPlayReverse className="accordion-item-title-icon" />
                        <span>دوره 5 :</span>
                        <p>ساخت منوها در بخش مدیریت</p>
                      </div>
                      <div className="accordion-item-situation">
                        <FaLock className="accordion-item-lock-icon" />
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="course-detail-rating">
              <div className="course-detail-all-rate">
                <span className="course-detail-all-fullrate">4.2</span>
                <span>از امتیاز 5</span>
                <div className="course-detail-rating-star">
                  <StarIcon className="course-detail-rating-star-icon" />
                  <StarIcon className="course-detail-rating-star-icon" />
                  <StarIcon className="course-detail-rating-star-icon" />
                  <StarIcon className="course-detail-rating-star-icon" />
                </div>
              </div>
              <div className="course-detail-rate-bar">
                <div className="course-detail-rating-bar-item">
                  <span className="rating-bar-name">5 ستاره / 85 %</span>
                  <ProgressBar now={85} />
                </div>
                <div className="course-detail-rating-bar-item">
                  <span className="rating-bar-name">4 ستاره / 75 %</span>
                  <ProgressBar now={75} variant="success" />
                </div>
                <div className="course-detail-rating-bar-item">
                  <span className="rating-bar-name">3 ستاره / 53 %</span>
                  <ProgressBar now={53} variant="warning" />
                </div>
                <div className="course-detail-rating-bar-item">
                  <span className="rating-bar-name">1 ستاره / 20 %</span>
                  <ProgressBar now={20} variant="danger" />
                </div>
              </div>
            </div>
            <div className="course-detail-teacher">
              <img
                src="/assests/images/teacher/user-3.jpg"
                alt=""
                className="course-detail-teacher-img img-fluid"
              />
              <div className="course-detail-teacher-info">
                <a href="#" className="course-detail-teacher-name">مهندس رضایی</a>
                <div className="course-detail-teacher-update">
                  <div className="teacher-update-item">
                    <AiOutlineVideoCamera />
                    <span>72 ویدیو</span>
                  </div>
                  <div className="teacher-update-item">
                    <BsPlay />
                    <span>102 دوره</span>
                  </div>
                  <div className="teacher-update-item">
                    <RxUpdate />
                    <span>بروزرسانی : بهمن ماه</span>
                  </div>
                </div>
                <p className="course-detail-teacher-subtitle">
                  اول داستان، طراح گرافیک بودم و ۲ سالی به عنوان طراح مشغول
                  بودم، بعد به برنامه‌نویسی علاقمند شدم و الان بیشتر از ۱۰ ساله
                  که عاشق کدزنی و چالش‌های پروژه‌های مختلفم.
                </p>
                <div className="course-detail-teacher-social">
                  <a href="#" className="course-detail-teacher-social-link">
                    <BiLogoFacebook className="course-detail-teacher-social-icon" />
                  </a>
                  <a href="#" className="course-detail-teacher-social-link">
                    <AiOutlineTwitter className="course-detail-teacher-social-icon" />
                  </a>
                  <a href="#" className="course-detail-teacher-social-link">
                    <BiLogoLinkedin className="course-detail-teacher-social-icon" />
                  </a>
                  <a href="#" className="course-detail-teacher-social-link">
                    <AiOutlineInstagram className="course-detail-teacher-social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4"></div>
        </div>
      </div>
    </div>
  );
}
