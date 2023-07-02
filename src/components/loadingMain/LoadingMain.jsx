import React from "react";
import "./loadingMain.scss";
import { PulseLoader } from "react-spinners";

export default function LoadingMain() {
  return(
    <div className="loadingMain">
        <PulseLoader
        color="#1DB954"
        speedMultiplier={0.6}
        />
    </div>
  );
}
