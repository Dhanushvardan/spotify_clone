import React from "react";
import Bottombar from "../../components/bottombar/Bottombar";
import Sidebar from "../../components/sidebar/Sidebar";
import Main from "../../components/main/Main";
import "./home.scss"

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Sidebar />
        <Main />
      </div>
      <Bottombar />
    </div>
  );
}
