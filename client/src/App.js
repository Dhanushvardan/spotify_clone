import "./app.scss";
import { useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Liked from "./pages/liked/Liked";
import Auth from "./pages/auth/Auth";
import Playlist from "./pages/playlist/Playlist";
import Episodes from "./pages/episodes/Episodes";
import Explore from "./pages/explore/Explore";
import Library from "./pages/library/Library";
import Bottombar from "./components/bottombar/Bottombar";
import { getTokenFromResponse } from "./spotify.js";
import SpotifyWebApi from "spotify-web-api-js";
import { DataLayer } from "./DataLayer";

export const spotify = new SpotifyWebApi();
function App() {
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
      spotify
        .getPlaylist("37i9dQZF1DXa2PvUpywmrr")
        .then((currentOpenPlaylist) => {
          dispatch({
            type: "SET_CURRENT_OPEN_PLAYLIST",
            currentOpenPlaylist: currentOpenPlaylist,
          });
        });
      spotify.getShow("4XPl3uEEL9hvqMkoZrzbx5").then((showDetails) => {
        dispatch({
          type: "GET_SHOW_DETAILS",
          showDetails: showDetails,
        });
      });
      spotify.getMyCurrentPlayingTrack().then((currentlyPlaying) => {
        dispatch({
          type: "SET_CURRENTLY_PLAYING",
          currentlyPlaying: currentlyPlaying,
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
            <Route
              path="/playlist/:id"
              element={token ? <Playlist /> : <Auth />}
            />
            <Route
              path="/episodes/:id"
              element={token ? <Episodes /> : <Auth />}
            />
            <Route path="/explore" element={token ? <Explore /> : <Auth />} />
            <Route path="/library" element={token ? <Library /> : <Auth />} />
          </Route>
        </Routes>
        {token && <Bottombar />}
      </BrowserRouter>
    </div>
  );
}

export default App;
