import React from "react";
import "./componentSmallWide.scss";

export default function ComponentSmallWide({ type, title, url }) {
  return (
    <div className="item">
      <img src={url} alt="cover-img" />
      <div className="item__title">{title}</div>
    </div>
  );
}
