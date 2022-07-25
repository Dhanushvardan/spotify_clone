import React from "react";
import "./sidebar.scss";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
export default function Sidebar() {
  const lists = [
    "Classical Essentials",
    "Minecraft music",
    "Hip Hop Mix",
    "Kpop music",
    "Work out",
    "Motivational",
    "This is Charlie Puth",
    "Classical Essentials",
    "Minecraft music",
    "Hip Hop Mix",
    "Kpop music",
    "Work out",
    "Motivational",
    "This is Charlie Puth",
  ];

  return (
    <div className="sideBar">
      <div className="navOpt">
        {/* <MoreHorizIcon className="navIcon" /> */}
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="spotify-logo"
        />
        <div className="navItems hoverClass">
          <HomeOutlinedIcon className="navIcon" />
          <div className="navText">Home</div>
        </div>
        <div className="navItems hoverClass">
          <SearchIcon className="navIcon" />
          <div className="navText">Explore</div>
        </div>
        <div className="navItems hoverClass">
          <LibraryMusicOutlinedIcon className="navIcon" />
          <div className="navText">Your Library</div>
        </div>
        <div className="navItems withGap hoverClass">
          <AddBoxIcon className="navIcon" />
          <div className="navText">Create Playlist</div>
        </div>
        <div className="navItems hoverClass">
          <FavoriteBorderIcon className="navIcon" />
          <div className="navText">Liked Songs</div>
        </div>
        <div className="navItems bottomItem hoverClass">
          <BookmarkBorderIcon className="navIcon" />
          <div className="navText">Your Episodes</div>
        </div>
      </div>
      <div className="trendPlaylist">
        {lists.map((listItem) => (
          <div className="trendItem">{listItem}</div>
        ))}
      </div>
    </div>
  );
}
