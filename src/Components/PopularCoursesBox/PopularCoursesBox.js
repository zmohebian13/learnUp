import React from "react";

import "./PopularCoursesBox.css";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import  {Link}  from "react-router-dom";

export default function PopularCoursesBox({
  img,
  title,
  teacher,
  count,
  category,
  rate,
  price,
  categoryBg,
  categoryColor,
}) {
  return (
    <div className="popular-courses-box">
      <div className="popular-courses-box-content">
        <div className="popular-courses-box-right">
          <div className="popular-courses-box-image">
            <img src={img} alt="" className="img-fliud" />
          </div>
        </div>
        <div className="popular-courses-box-left">
          <div className="populare-courses-box-title">
            <Link className="popular-courses-box-title-link" to='/course-info'>{title}</Link>
          </div>
          <div className="popular-courses-box-teacher">
            <p>
              مدرس:
              {teacher}
            </p>
          </div>
          <div className="popular-courses-box-count">
            <div className="popular-courses-box-number">
              <LiveTvIcon className="popular-courses-box-tv-icon" />
              <div className="popular-courses-box-number-count">
                <p>{count} دوره</p>
              </div>
            </div>
            <div className="popular-courses-box-online">
              <p>آنلاین</p>
            </div>
          </div>
          <div className="popular-courses-box-star">
            <div className="popular-courses-box-star-icons">
              <StarIcon className="popular-courses-box-star-icon" />
              <StarIcon className="popular-courses-box-star-icon" />
              <StarIcon className="popular-courses-box-star-icon" />
              <StarHalfIcon className="popular-courses-box-star-icon" />
              <StarBorderIcon className="popular-courses-box-star-icon" />
              <div className="popular-courses-box-rate">
                <p>{rate}</p>
              </div>
            </div>
            <div className="popular-courses-box-category">
              <p style={{ color: categoryColor, backgroundColor: categoryBg }}>
                {category}
              </p>
            </div>
          </div>
          <div className="populr-courses-box-price">
            <div className="popular-courses-box-price-count">
              <p>{price} هزار تومان</p>
            </div>
            <div className="popular-courses-box-read">
              <Link to="/course-info">
                <ArrowBackIcon className="popular-courses-box-read-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
