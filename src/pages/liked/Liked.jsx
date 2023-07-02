import React from "react";
import Bottombar from "../../components/bottombar/Bottombar";
import Sidebar from "../../components/sidebar/Sidebar";
import LikedMain from "../../components/likedMain/LikedMain";
import "./liked.scss";

export default function Liked() {
  return (
    <div className="liked">
      <div className="liked__container">
        <Sidebar />
        <LikedMain />
      </div>
      {/* <Bottombar /> */}
    </div>
  );
}
