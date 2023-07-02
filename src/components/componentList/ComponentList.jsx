import React from "react";
import "./componentList.scss";
import ComponentMedium from "../componentMedium/ComponentMedium";

export default function ComponentList({ title, data, type }) {
  //console.log("👆", data);
  let id = 0;

  const artistContainer = () => (
    <div className="componentList">
      <div className="list__title">{title}</div>
      <div className="items__container">
        {data &&
          data
            .slice(0, 6)
            .map((item) => (
              <ComponentMedium
                dataItem={item}
                key={id++}
                type={type}
                url={item?.images[0]?.url}
              />
            ))}
      </div>
    </div>
  );

  const trackContainer = () => (
    <div className="componentList">
      <div className="list__title">{title}</div>
      <div className="items__container">
        {data &&
          data
            ?.slice(0, 6)
            .map((item) => (
              <ComponentMedium dataItem={item?.track} key={id++} type={type} />
            ))}
      </div>
    </div>
  );

  const topTrackContainer = () => (
    <div className="componentList">
      <div className="list__title">{title}</div>
      <div className="items__container">
        {data &&
          data
            .slice(0, 6)
            .map((item) => (
              <ComponentMedium dataItem={item} key={id++} type={type} />
            ))}
      </div>
    </div>
  );

  const playlistContainer = () => (
    <div className="componentList">
      <div className="list__title">{title}</div>
      <div className="items__container">
        {data &&
          data
            .slice(0, 6)
            .map((item) => (
              <ComponentMedium dataItem={item} key={id++} type={type} />
            ))}
      </div>
    </div>
  );

  if (type === "artist") return artistContainer();
  if (type === "track") return trackContainer();
  if (type === "top-track") return topTrackContainer();
  if (type === "playlist") return playlistContainer();
}
