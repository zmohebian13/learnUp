import React from "react";
import "./FooterWidget.css";

export default function FooterWidget({title, item1, item2, item3,item4, item5}) {
  return (
    <div className="footer-widget">
      <div className="footer-widget-container">
        <h4 className="footer-widget-title">{title}</h4>
        <ul className="footer-widget-list">
          <li className="footer-widget-item">
            <a href="#" className="footer-widget-item-link">
                {item1}
            </a>
          </li>
          <li className="footer-widget-item">
            <a href="#" className="footer-widget-item-link">
                {item2}
            </a>
          </li>
          <li className="footer-widget-item">
            <a href="#" className="footer-widget-item-link">
                {item3}
            </a>
          </li>
          <li className="footer-widget-item">
            <a href="#" className="footer-widget-item-link">
                {item4}
            </a>
          </li>
          <li className="footer-widget-item">
            <a href="#" className="footer-widget-item-link">
                {item5}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
