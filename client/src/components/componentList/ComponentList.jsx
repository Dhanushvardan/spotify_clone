import React from 'react';
import "./componentList.scss";
import ComponentMedium from '../componentMedium/ComponentMedium';

export default function ComponentList() {
  return (
    <div className='componentList'>
        <div className="list__title">Your shows</div>
        <div className="items__container">
            <ComponentMedium />
            <ComponentMedium />
            <ComponentMedium />
            <ComponentMedium />
            <ComponentMedium />
            <ComponentMedium />
        </div>
    </div>
  );
}
