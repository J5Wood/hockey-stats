import React from "react";

export const StatDisplay = ({ player }) => {
  return (
    <>
      <span className="player-stat-header">
        <h4>{player.attributes.player.name}</h4>
        <p>{player.attributes.player.position}</p>
        <p> {player.attributes.player.shoots}</p>
      </span>
      <span>
        <p>{player.attributes.goals}</p>
      </span>
      <span>
        <p>{player.attributes.assists}</p>
      </span>
      <span>
        <p>{player.attributes.points}</p>
      </span>
      <span>
        <p>{player.attributes.ppg}</p>
      </span>
      <span>
        <p>{player.attributes.shots}</p>
      </span>
      <span>
        <p>{player.attributes.plus_minus}</p>
      </span>
      <span>
        <p>{player.attributes.blocked}</p>
      </span>
      <span>
        <p>{player.attributes.hits}</p>
      </span>
      <span>
        <p>{player.attributes.pim}</p>
      </span>
    </>
  );
};
