import React from "react";
import "./episodeItem.scss";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const formatText = (inputText) => {
    return inputText.substring(0,250)+"...";
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

export default function EpisodeItem({episodeDetail}) {
  console.log("🏝️", episodeDetail);
  return(
    <div className="episodeItem">
        <div className="left__container__episode">
            <img src={episodeDetail?.images[0].url} alt="episode-img" className="episode__image"/>
        </div>
        <div className="right__container__episode">
            <div className="episode__title">{episodeDetail?.name}</div>
            <div className="episode__desc">{ formatText(episodeDetail?.description)}</div>
            <div className="control">
                <div className="left__info">
                    <div className="play">
                        <PlayCircleFilledWhiteIcon className="play__icon"/>
                    </div>
                    <div className="date">
                        <span className="upload__date">Oct 18</span>
                        <div className="divider"></div>
                        <span className="time__remaining">{convertTime(episodeDetail?.duration_ms)}</span>
                    </div>
                </div>
                <div className="isplay">
                    <CheckCircleRoundedIcon className="isplay__icon" />
                </div>
            </div>
        </div>
    </div>
  );
}
