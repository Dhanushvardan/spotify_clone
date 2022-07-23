import React from "react";
import "./sidebar.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
export default function Sidebar() {
  const lists = [
    "Classical Essentials",
    "minecraft music",
    "Hip Hop Mix",
    "Kpop music",
    "work out",
    "motivational",
    "This is Charlie Puth",
    "Classical Essentials",
    "minecraft music",
    "Hip Hop Mix",
    "Kpop music",
    "work out",
    "motivational",
    "This is Charlie Puth",
  ];

  return (
    <div className="sideBar">
      <div className="navOpt">
        <div className="navItems">
          <MoreHorizIcon className="navIcon" />
        </div>
        <div className="navItems">
          <HomeIcon className="navIcon" />
          <div className="navText">Home</div>
        </div>
        <div className="navItems">
          <SearchIcon className="navIcon" />
          <div className="navText">Explore</div>
        </div>
        <div className="navItems">
          <LibraryMusicIcon className="navIcon" />
          <div className="navText">Your Library</div>
        </div>
        <div className="navItems">
          <AddBoxIcon className="navIcon" />
          <div className="navText">Create Playlist</div>
        </div>
        <div className="navItems">
          <FavoriteBorderIcon className="navIcon" />
          <div className="navText">Liked Songs</div>
        </div>
        <div className="navItems">
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
