import React from "react";
import "./auth.scss";
import { accessUrl } from "../../spotify.js";

export default function Auth() {
  return( 
    <div className="auth">
        <img src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1666335325/Spotify-clone/Spotify_Logo_RGB_White_qibucs.png" alt="spotify-logo" />
        <a href={accessUrl}>
            <button className="login__button" >SIGN IN TO SPOTIFY</button>
        </a>
    </div>
  );
}
