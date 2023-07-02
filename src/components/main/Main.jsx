import React, { useContext, useState } from "react";
import "./main.scss";
import { DataLayer } from "../../DataLayer";
import ComponentSmallWide from "../componentSmallWide/ComponentSmallWide";
import ComponentList from "../componentList/ComponentList";
import LoadingMain from "../loadingMain/LoadingMain";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { motion } from "framer-motion";

export default function Main() {
  const [{ user, topArtists, recentTracks, playlists, topTracks }] =
    useContext(DataLayer);
  //console.log("🏆", topTracks);
  //console.log("🌍", recentTracks);
  //console.log("💖", savedTracks);
  //console.log("🖐️", playlists);

  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 1000);

  if (isLoading === true) {
    return <LoadingMain />;
  } else {
    return (
      <motion.div
        className="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.05 }}
      >
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
                  src={user && user.images[0].url}
                  alt="profile__pic"
                  className="profile__pic"
                />
                <div className="user__name">{user && user.display_name}</div>
                <ArrowDropDownRoundedIcon className="icon" />
              </div>
            </div>
          </div>

          <div className="middle__container">
            <div className="greeting__message">Good evening</div>
            <div className="items__container">
              <ComponentSmallWide
                type={"liked"}
                title={"Liked Songs"}
                url={
                  "https://res.cloudinary.com/dbzzj25vc/image/upload/v1666335459/Spotify-clone/liked-songs-300_qd8dt1.png"
                }
              />
              <ComponentSmallWide
                type={"podcast"}
                title={"Jordan Harbinger Show"}
                url={
                  "https://res.cloudinary.com/dbzzj25vc/image/upload/v1666381581/Spotify-clone/1000x1000_ogaz5k.jpg"
                }
                id={"5RVoEOIACQbBDZnGBJ7Ec2"}
              />
              <ComponentSmallWide
                type={"podcast"}
                title={"Darknet Diaries"}
                url={
                  "https://res.cloudinary.com/dbzzj25vc/image/upload/v1666614548/Spotify-clone/thumbnail_xsesgr.webp"
                }
                id={"4XPl3uEEL9hvqMkoZrzbx5"}
              />
              {playlists?.items?.slice(0, 3).map((item) => (
                <ComponentSmallWide
                  type={"your-playlist"}
                  title={item?.name}
                  url={item?.images[0]?.url}
                  id={item?.id}
                />
              ))}
            </div>
          </div>

          <div className="bottom__container">
            <ComponentList
              title={"Your Playlists"}
              data={playlists?.items}
              type="playlist"
            />
            <ComponentList
              title={"Your Top Tracks"}
              data={topTracks?.items}
              type="top-track"
            />
            <ComponentList
              title={"Your Top Artists"}
              data={topArtists?.items}
              type="artist"
            />
            <ComponentList
              title={"Recently Played"}
              data={recentTracks?.items}
              type="track"
            />
          </div>

          <div className="gap__container"></div>
        </div>
      </motion.div>
    );
  }
}
