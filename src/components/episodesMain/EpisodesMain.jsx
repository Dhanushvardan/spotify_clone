import React, { useContext, useState, useEffect } from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { DataLayer } from "../../DataLayer";
import "./episodesMain.scss";
import EpisodeItem from "../episodeItem/EpisodeItem";
import { useParams } from "react-router-dom";
import { spotify } from "../../App";
import LoadingMain from "../loadingMain/LoadingMain";
import { motion } from "framer-motion";

export default function EpisodesMain() {
  const [{ user }] = useContext(DataLayer);
  let _id = 0;
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    spotify.getShow(id).then((_showDetails) => setShowDetails(_showDetails));
    setTimeout(() => setIsLoading(false), 800);
  }, [id]);

  //console.log("👱", showDetails);

  if (isLoading === true) {
    return <LoadingMain />;
  } else {
    return (
      <motion.div
        className="episodesMain"
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
              <img src={showDetails?.images[0].url} alt="liked-logo" />
            </div>

            <div className="right__box">
              <div className="text__sm">PODCAST</div>
              <div className="text__lg">{showDetails?.name}</div>
              <div className="creator__text">{showDetails?.publisher}</div>
            </div>
          </div>

          <div className="bottom__container">
            <div className="following__container">
              <button className="follow__button">FOLLOWING</button>
            </div>
            <div className="data__container">
              <div className="left__container">
                <div className="main__text">All Episodes</div>
                <div className="episodes__container">
                  {showDetails?.episodes?.items?.map((episodeDetail) => (
                    <EpisodeItem episodeDetail={episodeDetail} key={_id++} />
                  ))}
                </div>
              </div>
              <div className="right__container">
                <div className="title">About</div>
                <div className="description">{showDetails?.description}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="gap__container"></div>
      </motion.div>
    );
  }
}
