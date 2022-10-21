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

function App() {
  const spotify = new SpotifyWebApi();
  const [{ token }, dispatch] = useContext(DataLayer);
  //const [playlists, setPlaylists] = useState([]);

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
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <Route path="/" element={token ? <Home /> : <Auth />} />
            <Route path="/liked" element={<Liked spotify={spotify} />} />
            <Route path="/login" element={<Auth />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
