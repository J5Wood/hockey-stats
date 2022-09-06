import React from "react";
import { StatAttributes } from "./StatAttributes";

export const PlayerContainer = ({ playerData }) => {
  const stats = playerData.attributes;
  const player = stats.player;
  const year = `${stats.year.toString().slice(0, 4)} - ${stats.year
    .toString()
    .slice(4)}`;

  return (
    <div>
      <h3>{player.name}</h3>
      <h4>{year}</h4>
      <div className="season-data">
        <p>GOALS</p>
        <p>ASSISTS</p>
        <p>POINTS</p>
        <p>PPG</p>
        <p>SHOTS</p>
        <p>+ / -</p>
        <p>BLOCKED</p>
        <p>HITS</p>
        <p>PIM</p>
        <StatAttributes attributes={playerData.attributes} />
      </div>
    </div>
  );
};
