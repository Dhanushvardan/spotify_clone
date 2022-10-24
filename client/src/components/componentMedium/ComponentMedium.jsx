import React from "react";
import { Link } from "react-router-dom";
import "./componentMedium.scss";

export default function ComponentMedium({ dataItem, type }) {
  //console.log("☢️", dataItem);

  const artistContainer = () => (
    <div className="componentMedium">
      <img src={dataItem?.images[1]?.url} alt="component-img" />
      <div className="component__text">
        <div className="item__title">{dataItem?.name}</div>
        {/* <div className="item__publication">{dataItem?.artists[0]?.name}</div> */}
      </div>
    </div>
  );

  const trackContainer = () => (
    <div className="componentMedium">
      <img src={dataItem?.album?.images[1]?.url} alt="component-img" />
      <div className="component__text">
        <div className="item__title">{dataItem?.name}</div>
        <div className="item__publication">{dataItem?.artists[0]?.name}</div>
      </div>
    </div>
  );

  const topTrackContainer = () => (
    <div className="componentMedium">
      <img src={dataItem?.album?.images[1]?.url} alt="component-img" />
      <div className="component__text">
        <div className="item__title">{dataItem?.name}</div>
        <div className="item__publication">{dataItem?.artists[0]?.name}</div>
      </div>
    </div>
  );

  const playlistContainer = () => (
    <div className="componentMedium">
      <img src={dataItem?.images[0]?.url} alt="component-img" />
      <div className="component__text">
        <div className="item__title">
          <Link to="/playlist" className="link">
            {dataItem?.name}
          </Link>
        </div>
        <div className="item__publication">{dataItem?.owner?.display_name}</div>
      </div>
    </div>
  );

  if (type === "artist") return artistContainer();
  if (type === "track") return trackContainer();
  if (type === "top-track") return topTrackContainer();
  if (type === "playlist") return playlistContainer();
}
