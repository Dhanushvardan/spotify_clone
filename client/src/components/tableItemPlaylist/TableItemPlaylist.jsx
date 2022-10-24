import React, { useState } from "react";
import "./tableItemPlaylist.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function TableItemPlaylist({ itemData, val }) {
  const [isPlayButton, setPlayButton] = useState(false);
  //console.log("🌓", itemData);

  const mouseEnter = () => {
    setPlayButton(true);
  };
  const mouseLeave = () => {
    setPlayButton(false);
  };

  const convertTime = (inputTime) => {
    let timeInSec = inputTime / 1000;
    let mins = Math.floor(timeInSec / 60);
    let secs = Math.abs(Math.floor(mins * 60 - timeInSec));
    let result;
    if (secs === 60) {
      secs = 0;
      mins++;
    }
    if (secs < 10) result = String(mins) + ":0" + String(secs);
    else result = String(mins) + ":" + String(secs);
    return result;
  };

  const formatString = (inputString) => {
    if (inputString.length > 30) {
      let result = inputString.slice(0, 40) + "...";
      return result;
    }
    return inputString;
  };

  return (
    <div
      className="table__itemPlaylist"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className="item__sno">{isPlayButton ? <PlayArrowIcon /> : val}</div>
      <div className="item__title">
        <div className="left">
          <img src={itemData?.track?.album?.images[2]?.url} alt="album" />
        </div>
        <div className="right">
          <div className="title">{formatString(itemData?.track?.name)}</div>
          <div className="artist">
            {itemData?.track?.album?.artists[0]?.name}
          </div>
        </div>
      </div>
      <div className="item__album">
        {formatString(itemData?.track?.album?.name)}
      </div>
      <div className="item__date__added">5 days ago</div>
      <div className="item__time">
        <FavoriteIcon className="icon" />
        <span className="duration">
          {convertTime(itemData?.track?.duration_ms)}
        </span>
      </div>
    </div>
  );
}
