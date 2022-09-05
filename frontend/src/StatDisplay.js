import React from "react";

export const StatDisplay = ({ player }) => {
  return (
    <>
      <span className="player-stat-header">
        <h4>{player.attributes.player.name}</h4>
        <p>{player.attributes.player.position}</p>
        <p> {player.attributes.player.shoots}</p>
      </span>
      <p>{player.attributes.goals}</p>
      <p>{player.attributes.assists}</p>
      <p>{player.attributes.points}</p>
      <p>{player.attributes.ppg}</p>
      <p>{player.attributes.shots}</p>
      <p>{player.attributes.plus_minus}</p>
      <p>{player.attributes.blocked}</p>
      <p>{player.attributes.hits}</p>
      <p>{player.attributes.pim}</p>
    </>
  );
};
