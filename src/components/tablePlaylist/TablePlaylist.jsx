import React from "react";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import "./tablePlaylist.scss";
import TableItemPlaylist from "../tableItemPlaylist/TableItemPlaylist";

export default function TablePlaylist({ data }) {
  let sno = 0;

  return (
    <div className="table__playlist">
      <div className="table__head">
        <div className="sno">#</div>
        <div className="title">TITLE</div>
        <div className="album">ALBUM</div>
        <div className="date__added">DATE ADDED</div>
        <div className="time">
          <AccessTimeOutlinedIcon className="icon" />
        </div>
      </div>
      {data?.map((item) => (
        <TableItemPlaylist itemData={item} val={++sno} key={sno} />
      ))}
    </div>
  );
}
