import React from "react";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import "./table.scss";
import TableItem from "../tableItem/TableItem";

export default function Table({ data }) {
  //console.log("🔽", data);
  let sno = 0;

  return (
    <div className="table">
      <div className="table__head">
        <div className="sno">#</div>
        <div className="title">TITLE</div>
        <div className="album">ALBUM</div>
        <div className="date__added">DATE ADDED</div>
        <div className="time">
          <AccessTimeOutlinedIcon className="icon" />
        </div>
      </div>
      {data.map((item) => (
        <TableItem itemData={item} val={++sno} />
      ))}
    </div>
  );
}
