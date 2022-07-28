import React from 'react';
import "./tableItem.scss";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function TableItem() {
  return (
        <div className="table__item">
            <div className="item__sno">1</div>
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
