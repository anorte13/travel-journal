import React from "react";

export default function Entry(props) {
  return (
    <div className="Entry-body">
      <img
        src={`../${props.coverImg}`}
        alt="Location"
        className="Entry-image"
      />
      <div className="Entry-sub-body">
        <div className="Entry-details">
          <img src="images/pin.png" alt="pin" className="Entry-pin" />
          <p>{props.location}</p>
          <a href={props.link} className="Entry-link">
            View on Google Maps
          </a>
        </div>
        <div className="Entry-info">
          <p className="Entry-title">{props.title}</p>
          <p className="Entry-date">{props.dates}</p>
          <p>{props.info}</p>
        </div>
      </div>
    </div>
  );
}
