import React, {useState} from 'react';
import "./tableItem.scss";
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function TableItem() {
    const [isPlayButton, setPlayButton] = useState(false);

    const mouseEnter = () => {
        setPlayButton(true);
    };
    const mouseLeave = () => {
        setPlayButton(false);
    };

    return (
        <div className="table__item" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <div className="item__sno">
                {
                    (isPlayButton ? 
                    <PlayArrowIcon />:
                    1)
                }
            </div>
            <div className="item__title">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Lisa_-_Lalisa.png/220px-Lisa_-_Lalisa.png" alt="album" />
                </div>
                <div className="right">
                    <div className="title">MONEY</div>
                    <div className="artist">LISA</div>
                </div>
            </div>
            <div className="item__album">LALISA</div>
            <div className="item__date__added">5 days ago</div>
            <div className="item__time">
                <FavoriteIcon className="icon"/>
                <span className='duration'>2:48</span>
            </div>
        </div>
  );
}
