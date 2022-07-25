import React from "react";
import "./main.scss";
import ComponentSmallWide from "../componentSmallWide/ComponentSmallWide";
import ComponentList from "../componentList/ComponentList";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

export default function Main() {
  return (
    <div className="main">
        <div className="main__container">

            <div className="top__container">
                <div className="left__box">
                    <div className="navigation__iconContainer">
                        <div className="icons"><ArrowBackIosNewRoundedIcon /></div>
                        <div className="icons"><ArrowForwardIosRoundedIcon /></div>
                    </div>
                </div>
                <div className="right__box">
                    <div className="user__badge">
                        <div className="profile__pic"></div>
                        <div className="user__name">Pranaav Sathish</div>
                        <ArrowDropDownRoundedIcon className="icon" />
                    </div>
                </div>
            </div>

            <div className="middle__container">
                <div className="greeting__message">Good evening</div>
                <div className="items__container">
                    <ComponentSmallWide />
                    <ComponentSmallWide />
                    <ComponentSmallWide />
                    <ComponentSmallWide />
                    <ComponentSmallWide />
                    <ComponentSmallWide />
                </div>
            </div>

            <div className="bottom__container">
                <ComponentList />
                <ComponentList />
            </div>

            <div className="gap__container"></div>
        </div>
    </div>
  );
}
