import React, { useContext, useEffect, useState } from "react";
import "./library.scss";
import { DataLayer } from "../../DataLayer";
import { spotify } from "../../App";
import Sidebar from "../../components/sidebar/Sidebar";
import Bottombar from "../../components/bottombar/Bottombar";
import ComponentMedium from "../../components/componentMedium/ComponentMedium";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

export default function Library() {
  const [{ user, token, playlists, topArtists, topTracks }] = useContext(DataLayer);
  const [currentChoice, setCurrentChoice] = useState("Playlist");
  let id = 0;
  console.log("🎴", playlists);

  useEffect(() => {
    spotify.setAccessToken(token);
    //console.log("🚧  User token set successfully!");
    spotify.getCategories().then((data) => {
      //console.log("🉐", data);
    });
  }, []);

  return (
    <div className="library">
      <div className="non__player">
        <Sidebar className="sidebar" />
        <div className="library__container">
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
                  src={user && user.images[0].url}
                  alt="profile__pic"
                  className="profile__pic"
                />
                <div className="user__name">{user && user.display_name}</div>
                <ArrowDropDownRoundedIcon className="icon" />
              </div>
            </div>
          </div>
          <div className="select__container">
            <div className="select__bar">
                <span className={currentChoice==="Playlist" ? "playlist sel active" : "playlist sel"} onClick={() => setCurrentChoice("Playlist") }>Playlist</span>
                <span className={currentChoice==="Track" ? "playlist sel active" : "playlist sel"} onClick={() => setCurrentChoice("Track") }>Tracks</span>
                <span className={currentChoice==="Album" ? "playlist sel active" : "playlist sel"} onClick={() => setCurrentChoice("Album") }>Albums</span>
                <span className={currentChoice==="Artist" ? "playlist sel active" : "playlist sel"} onClick={() => setCurrentChoice("Artist") }>Artists</span>
            </div>
          </div>
          <div className="title">{currentChoice}</div>
          <div className="tiles__container">
            {   
                (currentChoice==="Playlist") && playlists?.items?.map((item) => <ComponentMedium key={id++} dataItem={item} type={"playlist"} /> )
            }
            {
                (currentChoice==="Artist") && topArtists?.items?.map((item) => <ComponentMedium key={id++} dataItem={item} type={"artist"} /> )
            }
            {
                (currentChoice==="Track") && topTracks?.items?.map((item) => <ComponentMedium key={id++} dataItem={item} type={"track"} /> )
            }
          </div>
          <div className="gap__container"></div>
        </div>
      </div>
      <Bottombar className="bottombar" />
    </div>
  );
}
