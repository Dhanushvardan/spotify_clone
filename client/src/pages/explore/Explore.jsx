import React, { useContext, useEffect, useState } from "react";
import "./explore.scss";
import { DataLayer } from "../../DataLayer";
import { spotify } from "../../App";
import Sidebar from "../../components/sidebar/Sidebar";
import Bottombar from "../../components/bottombar/Bottombar";
import CategoryTile from "../../components/categoryTile/CategoryTile";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

export default function Explore() {
  const [{ user, token }] = useContext(DataLayer);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    spotify.setAccessToken(token);
    spotify.getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <div className="explore">
      <div className="non__player">
        <Sidebar className="sidebar" />
        <div className="explore__container">
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
          <div className="heading">Browse All</div>
          <div className="tiles__container">
            {categories?.categories?.items?.map((item) => (
              <CategoryTile tileDetail={item} />
            ))}
          </div>
          <div className="gap__container"></div>
        </div>
      </div>
      <Bottombar className="bottombar" />
    </div>
  );
}
