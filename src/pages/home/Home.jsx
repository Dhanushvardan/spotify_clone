import React from "react";
import Bottombar from "../../components/bottombar/Bottombar";
import Sidebar from "../../components/sidebar/Sidebar";
import Main from "../../components/main/Main";
import "./home.scss";
// import { useContext } from "react";
// import { DataLayer } from "../../DataLayer";

export default function Home() {
  //const [{ user, token }, dispatch] = useContext(DataLayer);

  return (
    <div className="home">
      <div className="home__container">
        <Sidebar />
        <Main />
      </div>
      {/* <Bottombar /> */}
    </div>
  );
}
