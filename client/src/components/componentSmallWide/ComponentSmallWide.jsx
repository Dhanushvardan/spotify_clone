import React from "react";
import "./componentSmallWide.scss";

export default function ComponentSmallWide() {
  return (
    <div className="item">
      <img
        src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1666335459/Spotify-clone/liked-songs-300_qd8dt1.png"
        alt="cover-img"
      />
      <div className="item__title">Liked Songs</div>
    </div>
  );
}
