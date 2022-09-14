import React from "react";
import { useNavigate } from "react-router-dom";
import { StatAttributes } from "./StatAttributes";

export const PlayerContainer = ({ playerData }) => {
  const stats = playerData.attributes;
  const player = stats.player;
  const year = `${stats.year.toString().slice(0, 4)} - ${stats.year
    .toString()
    .slice(4)}`;
  const team = playerData.team;
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    navigate(`/teams/${e.target.dataset.teamName}`);
  };

  return (
    <div className="player-container">
      <h3>{player.name}</h3>
      <img
        src={team.attributes.image_url}
        alt={`${team.attributes.name} logo`}
        className="team-logo grid-end"
        key={team.attributes.name}
        data-team-name={team.attributes.name.split(" ").join("-")}
        onClick={(e) => handleNavigation(e)}
      />
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
