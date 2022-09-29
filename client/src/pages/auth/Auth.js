import React from "react";
import "./auth.scss";
import { accessUrl } from "../../spotify.js";

export default function Auth() {
  return( 
    <div className="auth">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="spotify-logo" />
        <a href={accessUrl}>
            <button className="login__button" >SIGN IN TO SPOTIFY</button>
        </a>
    </div>
  );
}
