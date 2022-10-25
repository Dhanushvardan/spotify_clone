import React, { useState } from "react";
import "./componentSmallWide.scss";
import { Link } from "react-router-dom";

export default function ComponentSmallWide({ type, title, url, id }) {
  let toLocation;
  if (type === "liked") toLocation = "/liked";
  if (type === "your-episodes") toLocation = "/episodes";
  if (type === "your-playlist") toLocation = "/playlist/" + id;
  if (type === "podcast") toLocation = "/episodes/" + id;
  return (
    <div className="item">
      <img src={url} alt="cover-img" />
      <div className="item__title">
        <Link to={toLocation} className="link">
          {title}
        </Link>
      </div>
    </div>
  );
}
