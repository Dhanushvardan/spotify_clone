import React, { useContext } from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import { DataLayer } from "../../DataLayer";
//import { useLocation } from "react-router-dom";
export default function Sidebar() {
  //const location = useLocation();
  //console.log("Current Location>>>", location.pathname.split("/")[1]);

  let keyValue = 0;
  const [{ playlists }] = useContext(DataLayer);
  // const [playlistsValues, setPlaylistsValues] = useState([]);
  // setPlaylistsValues(playlists.items);
  //console.log(playlists);

  return (
    <div className="sideBar">
      <div className="navOpt">
        <img
          className="spotify__logo"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="spotify-logo"
        />

        <Link to="/" className="link">
          <div className="navItems hoverClass ">
            <img
              src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1663571135/Spotify-clone/home_icon_ppn8oe.png"
              alt="like-icon"
              className="img__icon"
            />
            <div className="navText">Home</div>
          </div>
        </Link>

        <div className="navItems hoverClass ">
          <img
            src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1663571135/Spotify-clone/search_icon_u7u8ay.png"
            alt="like-icon"
            className="img__icon"
          />
          <div className="navText">Explore</div>
        </div>

        <div className="navItems hoverClass ">
          <img
            src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1663571136/Spotify-clone/library_icon_tqjddv.png"
            alt="like-icon"
            className="img__icon"
          />
          <div className="navText">Your Library</div>
        </div>

        <div className="navItems withGap hoverClass">
          <img
            src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1663571135/Spotify-clone/create_icon_dijxlu.png"
            alt="like-icon"
            className="img__icon"
          />
          <div className="navText">Create Playlist</div>
        </div>

        <Link to="/liked" className="link">
          <div className="navItems hoverClass">
            {/* <FavoriteBorderIcon className="navIcon" /> */}
            <img
              src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1663569718/Spotify-clone/like_icon_vmskpy.png"
              alt="like-icon"
              className="img__icon"
            />
            <div className="navText">Liked Songs</div>
          </div>
        </Link>

        <div className="navItems bottomItem hoverClass">
          <img
            src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1663571136/Spotify-clone/bookmark_icon_tjbbjl.png"
            alt="like-icon"
            className="img__icon"
          />
          <div className="navText">Your Episodes</div>
        </div>
      </div>

      <div className="trendPlaylist">
        {playlists?.items?.map((listItem) => (
          <div className="trendItem" key={keyValue++}>
            {listItem.name}
          </div>
        ))}
      </div>
    </div>
  );
}
