import React from 'react';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import "./table.scss";
import TableItem from '../tableItem/TableItem';

export default function Table() {
  return (
    <div className='table'>

        <div className="table__head">
            <div className="sno">#</div>
            <div className="title">TITLE</div>
            <div className="album">ALBUM</div>
            <div className="date__added">DATE ADDED</div>
            <div className="time"><AccessTimeOutlinedIcon className='icon'/></div>
        </div>
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        
    
    </div>
  );
}
