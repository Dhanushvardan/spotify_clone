import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import PlaylistMain from "../../components/playlistMain/PlaylistMain";
import Bottombar from "../../components/bottombar/Bottombar";
import "./playlist.scss";

export default function Episodes() {
  return (
    <div className="episodes">
      <div className="p__container">
        <Sidebar />
        <PlaylistMain />
      </div>
      <Bottombar />
    </div>
  );
}
