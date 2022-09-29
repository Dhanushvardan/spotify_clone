import "./app.scss";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Liked from "./pages/liked/Liked";
//import Login from "./pages/login/Login";
import Auth from "./pages/auth/Auth";
import { getTokenFromResponse } from "./spotify.js";
import SpotifyWebApi from "spotify-web-api-js";

function App() {
  const [token, setToken] = useState(null);
  const spotify = new SpotifyWebApi();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("👱", user);
      });
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <Route path="/" element={token ? <Home /> : <Auth />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/login" element={<Auth />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
