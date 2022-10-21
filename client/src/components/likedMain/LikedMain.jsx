import React, { useContext } from "react";
import Table from "../table/Table";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { DataLayer } from "../../DataLayer";
import "./likedMain.scss";

export default function LikedMain() {
  const [{ user, likedTracks }] = useContext(DataLayer);

  return (
    <div className="likedMain">
      <div className="background__container"></div>
      <div className="main__container">
        <div className="top__container">
          <div className="left__box">
            <div className="navigation__iconContainer">
              <div className="icons">
                <ArrowBackIosNewRoundedIcon />
              </div>
              <div className="icons">
                <ArrowForwardIosRoundedIcon />
              </div>
            </div>
          </div>
          <div className="right__box">
            <div className="user__badge">
              <img
                src={user?.images[0].url}
                alt="profile__pic"
                className="profile__pic"
              />
              <div className="user__name">{user?.display_name}</div>
              <ArrowDropDownRoundedIcon className="icon" />
            </div>
          </div>
        </div>

        <div className="middle__container">
          <div className="left__box">
            <img
              src="https://i.pinimg.com/originals/fe/5c/36/fe5c36b8b4cbaa728f3c03a311e002cb.png"
              alt="liked-logo"
            />
          </div>

          <div className="right__box">
            <div className="text__sm">PLAYLIST</div>
            <div className="text__lg">Liked Songs</div>
            <div className="user__details">
              <img
                src={user?.images[0].url}
                alt="profile__pic"
                className="profile__pic"
              />
              <div className="user__name">{user?.display_name}</div>
              <div className="circle"></div>
              <div className="song__count">197 songs</div>
            </div>
          </div>
        </div>

        <div className="bottom__container">
          <div className="play__button">
            <PlayArrowIcon className="icon" />
          </div>
          <div className="table">
            <Table data={likedTracks?.items} />
          </div>
        </div>
      </div>
    </div>
  );
}
