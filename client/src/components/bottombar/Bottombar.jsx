import React, { useState, useRef, useEffect } from "react";
import "./bottombar.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import VolumeDownRoundedIcon from "@mui/icons-material/VolumeDownRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import PauseCircleRoundedIcon from "@mui/icons-material/PauseCircleRounded";
import { spotify } from "../../App";

export default function Bottombar() {
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(null);

  setTimeout(
    () =>
      spotify.getMyCurrentPlayingTrack().then((data) => {
        setCurrentTrack(data);
        setCurrentTime(data?.progress_ms / 1000);
        setDuration(data?.item?.duration_ms / 1000);
        setIsPlaying(currentTrack?.is_playing);
        //console.log("🚮", currentTrack);
      }),
    10000
  );

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
    setTimeout(() => console.log("Time-out"), 1000);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    setCurrentTime(progressBar.current.value);
    //console.log(audioPlayer.current.currentTime);
  };

  const togglePlay = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (isPlaying) spotify.play();
    else spotify.pause();
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    setCurrentTime(progressBar.current.value);
    animationRef.current = requestAnimationFrame(whilePlaying);
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
            src={
              currentTrack?.item?.album?.images[0]?.url ||
              "https://res.cloudinary.com/dbzzj25vc/image/upload/v1666335608/Spotify-clone/500x500_eppij2.jpg"
            }
            alt="album-cover"
          />
        </div>

        <div className="right__sub">
          <div className="song__details">
            <div className="song__name">
              {currentTrack?.item?.name || "MONEY"}
            </div>
            <div className="artist__name">
              {currentTrack?.item?.artists[0]?.name || "LISA"}
            </div>
          </div>
          <FavoriteIcon
            className={isLiked ? "like_icon_liked" : "like_icon_notLiked"}
            onClick={toggleLike}
          />
        </div>
      </div>

      <div className="center__container">
        <audio ref={audioPlayer}></audio>
        <div className="top__container">
          <SkipPreviousRoundedIcon className="icon move" />
          <div className="pausePlayButton" onClick={togglePlay}>
            {isPlaying ? (
              <PauseCircleRoundedIcon className="icon" />
            ) : (
              <PlayCircleIcon className="icon" />
            )}
          </div>
          <SkipNextRoundedIcon className="icon move" />
        </div>
        <div className="bottom__container">
          <div className="current__time time_text">
            {calculateTime(currentTime)}
          </div>
          <input
            type="range"
            className="progressBar"
            defaultValue="0"
            onChange={changeRange}
            ref={progressBar}
          />
          <div className="track__duration time_text">
            {isNaN(duration) ? "00:00" : calculateTime(duration)}
          </div>
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
