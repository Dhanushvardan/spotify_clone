import React from "react";
import Bottombar from "../../components/bottombar/Bottombar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="Home">
      <Sidebar />
      <Bottombar />
    </div>
  );
}
