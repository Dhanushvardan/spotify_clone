import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import EpisodesMain from "../../components/episodesMain/EpisodesMain";
import Bottombar from "../../components/bottombar/Bottombar";
import "./episodes.scss";

export default function Episodes() {
  return (
    <div className="episodes">
      <div className="episodes__container">
        <Sidebar />
        <EpisodesMain />
      </div>
      {/* <Bottombar /> */}
    </div>
  );
}
