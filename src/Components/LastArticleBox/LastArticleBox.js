import React from 'react'

import './LastArticleBox.css'

export default function LastArticleBox({title, img, author, authorImg}) {
  return (
    <div className="last-article-box">
      <div className="last-article-box-container">
        <img src={img} alt="" />
        <p>{title}</p>
        <div className="last-article-box-footer">
          <img src={authorImg} alt="" className="last-article-box-author-img" />
          <p className="last-article-box-author-name">{author}</p>
        </div>
      </div>
    </div>
  );
}
