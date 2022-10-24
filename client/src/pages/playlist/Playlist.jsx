import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import PlaylistMain from '../../components/playlistMain/PlaylistMain';
import Bottombar from '../../components/bottombar/Bottombar';
import "./playlist.scss";

export default function Playlist() {

  return (
    <div className='playlist'>
        <div className="playlist__container">
            <Sidebar />
            <PlaylistMain />
        </div>
        <Bottombar />
    </div>
  );
}
