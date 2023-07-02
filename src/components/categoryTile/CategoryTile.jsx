import React from "react";
import "./categoryTile.scss";

export default function CategoryTile({ tileDetail }) {
  //console.log(tileDetail);
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  return (
    <div
      className="categorytile"
      style={{ backgroundColor: `rgb(${r},${g},${b})` }}
    >
      <img
        src={tileDetail?.icons[0]?.url}
        alt="tile-img"
        className="tileimage"
      />
      <div className="title">{tileDetail?.name}</div>
    </div>
  );
}
