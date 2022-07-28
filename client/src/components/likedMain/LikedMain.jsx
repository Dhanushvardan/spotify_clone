import React from "react";
import Table from "../table/Table";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "./likedMain.scss";

export default function LikedMain() {
  return(
    <div className="likedMain">
        <div className="main__container">

            <div className="top__container">
                <div className="left__box">
                    <div className="navigation__iconContainer">
                        <div className="icons"><ArrowBackIosNewRoundedIcon /></div>
                        <div className="icons"><ArrowForwardIosRoundedIcon /></div>
                    </div>
                </div>
                <div className="right__box">
                    <div className="user__badge">
                        <div className="profile__pic"></div>
                        <div className="user__name">Pranaav Sathish</div>
                        <ArrowDropDownRoundedIcon className="icon" />
                    </div>
                </div>
            </div>

            <div className="middle__container">

                <div className="left__box">
                    <img src="https://i.pinimg.com/originals/fe/5c/36/fe5c36b8b4cbaa728f3c03a311e002cb.png" alt="liked-logo" />
                </div>

                <div className="right__box">
                    <div className="text__sm">PLAYLIST</div>
                    <div className="text__lg">Liked Songs</div>
                    <div className="user__details">
                        <div className="profile__pic"></div>
                        <div className="user__name">Pranaav Sathish </div>
                        <div className="circle"></div>
                        <div className="song__count">197 songs</div>
                    </div>
                </div>

            </div>

            <div className="bottom__container">
                <div className="play__button">
                    <PlayArrowIcon className="icon"/>
                </div>
                <div className="table">
                    <Table />
                </div>
            </div>

        </div>
    </div>
  );
}
