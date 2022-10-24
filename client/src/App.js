import "./app.scss";
import { useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Liked from "./pages/liked/Liked";
//import Login from "./pages/login/Login";
import Auth from "./pages/auth/Auth";
import { getTokenFromResponse } from "./spotify.js";
import SpotifyWebApi from "spotify-web-api-js";
import { DataLayer } from "./DataLayer";
import Playlist from "./pages/playlist/Playlist";
//import PlayArrow from "@mui/icons-material/PlayArrow";

function App() {
  const spotify = new SpotifyWebApi();
  const [{ token }, dispatch] = useContext(DataLayer);


  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_USER_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getMyTopArtists().then((topArtists) => {
        dispatch({
          type: "SET_TOP_ARTISTS",
          topArtists: topArtists,
        });
      });
      spotify.getMyTopTracks().then((topTracks) => {
        dispatch({
          type: "SET_TOP_TRACKS",
          topTracks: topTracks,
        });
      });
      spotify.getMyRecentlyPlayedTracks().then((recentTracks) => {
        dispatch({
          type: "SET_RECENT_TRACKS",
          recentTracks: recentTracks,
        });
      });
      spotify.getMyTopTracks().then((likedTracks) => {
        dispatch({
          type: "SET_LIKED_TRACKS",
          likedTracks: likedTracks,
        });
      });
      spotify.getPlaylist("37i9dQZF1DXa2PvUpywmrr").then((currentOpenPlaylist) => {
        dispatch({
          type: "SET_CURRENT_OPEN_PLAYLIST",
          currentOpenPlaylist: currentOpenPlaylist,
        });
      });
      spotify.getPlaylistCoverImage("37i9dQZF1DXa2PvUpywmrr").then((playlistCoverImage) => {
        dispatch({
          type: "SET_PLAYLIST_COVER_IMAGE",
          playlistCoverImage: playlistCoverImage,
        });
      });
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <Route path="/" element={token ? <Home /> : <Auth />} />
            <Route path="/liked" element={token ? <Liked /> : <Auth />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/playlist" element={token ? <Playlist /> : <Auth />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
