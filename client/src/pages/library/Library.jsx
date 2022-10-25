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
import LoadingMain from "../../components/loadingMain/LoadingMain";
import { motion } from "framer-motion";

export default function Library() {
  const [{ user, token, playlists, topArtists, topTracks }] =
    useContext(DataLayer);
  const [isLoading, setIsLoading] = useState(false);
  const [currentChoice, setCurrentChoice] = useState("Playlist");
  let id = 0;

  useEffect(() => {
    setIsLoading(true);
    spotify.setAccessToken(token);
    spotify.getCategories().then((data) => {});
    setIsLoading(false);
  }, []);

  if (isLoading === true) {
    return <LoadingMain />;
  } else {
    return (
      <div className="library">
        <div className="non__player">
          <Sidebar className="sidebar" />
          <motion.div
            className="library__container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.05 }}
          >
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
                <span
                  className={
                    currentChoice === "Playlist"
                      ? "playlist sel active"
                      : "playlist sel"
                  }
                  onClick={() => setCurrentChoice("Playlist")}
                >
                  Playlist
                </span>
                <span
                  className={
                    currentChoice === "Track"
                      ? "playlist sel active"
                      : "playlist sel"
                  }
                  onClick={() => setCurrentChoice("Track")}
                >
                  Tracks
                </span>
                <span
                  className={
                    currentChoice === "Album"
                      ? "playlist sel active"
                      : "playlist sel"
                  }
                  onClick={() => setCurrentChoice("Album")}
                >
                  Albums
                </span>
                <span
                  className={
                    currentChoice === "Artist"
                      ? "playlist sel active"
                      : "playlist sel"
                  }
                  onClick={() => setCurrentChoice("Artist")}
                >
                  Artists
                </span>
              </div>
            </div>
            <div className="title">{currentChoice}</div>
            <div className="tiles__container">
              {currentChoice === "Playlist" &&
                playlists?.items?.map((item) => (
                  <ComponentMedium
                    key={id++}
                    dataItem={item}
                    type={"playlist"}
                  />
                ))}
              {currentChoice === "Artist" &&
                topArtists?.items?.map((item) => (
                  <ComponentMedium key={id++} dataItem={item} type={"artist"} />
                ))}
              {currentChoice === "Track" &&
                topTracks?.items?.map((item) => (
                  <ComponentMedium key={id++} dataItem={item} type={"track"} />
                ))}
              {currentChoice === "Album" &&
                playlists?.items?.map((item) => (
                  <ComponentMedium
                    key={id++}
                    dataItem={item}
                    type={"playlist"}
                  />
                ))}
            </div>
            <div className="gap__container"></div>
          </motion.div>
        </div>
        {/* <Bottombar className="bottombar" /> */}
      </div>
    );
  }
}
