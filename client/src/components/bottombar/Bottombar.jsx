import React, { useState } from "react";
import "./bottombar.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import VolumeDownRoundedIcon from "@mui/icons-material/VolumeDownRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import PauseCircleRoundedIcon from "@mui/icons-material/PauseCircleRounded";

export default function Bottombar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };
  const toggleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  return (
    <div className="bottombar">
      <div className="left__container">
        <div className="left__sub">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Lisa_-_Lalisa.png/220px-Lisa_-_Lalisa.png"
            alt="album-cover"
          />
        </div>

        <div className="right__sub">
          <div className="song__details">
            <div className="song__name">MONEY</div>
            <div className="artist__name">LISA</div>
          </div>
          <FavoriteIcon
            className={isLiked ? "like_icon_liked" : "like_icon_notLiked"}
            onClick={toggleLike}
          />
        </div>
      </div>

      <div className="center__container">
        <audio
          src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
          preload="metadata"
        ></audio>
        <div className="top__container">
          <SkipPreviousRoundedIcon className="icon move" />
          <div className="pausePlayButton" onClick={togglePlay}>
            {isPlaying ? (
              <PlayCircleIcon className="icon" />
            ) : (
              <PauseCircleRoundedIcon className="icon" />
            )}
          </div>
          <SkipNextRoundedIcon className="icon move" />
        </div>
        <div className="bottom__container">
          <div className="current__time time_text">00:00</div>
          <input type="range" className="progressBar" />
          <div className="track__duration time_text">03:00</div>
        </div>
      </div>

      <div className="right__container">
        <VolumeDownRoundedIcon className="icon" />
        <RepeatRoundedIcon
          className={isRepeat ? "icon icon_active" : "icon"}
          onClick={toggleRepeat}
        />
        <ShuffleRoundedIcon
          className={isShuffle ? "icon icon_active" : "icon"}
          onClick={toggleShuffle}
        />
      </div>
    </div>
  );
}
