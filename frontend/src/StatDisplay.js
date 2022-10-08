import React from "react";
import { Link } from "react-router-dom";
import { StatAttributes } from "./StatAttributes";

export const StatDisplay = ({ player }) => {
  const formattedUrl = `/players/${player.attributes.player.name
    .split(" ")
    .join("_")}`;

  return (
    <>
      <span className="player-stat-header">
        <Link to={formattedUrl}>
          <h4>{player.attributes.player.name}</h4>
          <p>{player.attributes.player.position}</p>
          <p> {player.attributes.player.shoots}</p>
        </Link>
      </span>

      <StatAttributes attributes={player.attributes} />
    </>
  );
};
