import React from "react";
import "./componentSmallWide.scss";
import { Link } from "react-router-dom";

export default function ComponentSmallWide({ type, title, url }) {
  return (
    <div className="item">
      <img src={url} alt="cover-img" />
      <div className="item__title">
        <Link to="/episodes" className="link">
          {title}
        </Link>
      </div>
    </div>
  );
}
