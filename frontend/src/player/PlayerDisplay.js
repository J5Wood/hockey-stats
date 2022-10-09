import React from "react";
import { useNavigate } from "react-router-dom";
import { StatRow } from "../stats/StatRow";

export const PlayerDisplay = ({ playerData }) => {
  const player = playerData.attributes;
  const stats = player.stats.reverse();
  const team = player.team;
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    navigate(`/teams/${e.target.dataset.teamName}`);
  };

  const renderStats = (stats) => {
    return stats.map((stat) => <StatRow attributes={stat} key={stat.id} />);
  };

  return (
    <div className="player-container">
      <h3>{player.name}</h3>
      <img
        src={player.team_img_url}
        alt={`${team.name} logo`}
        className="team-logo grid-end"
        key={team.name}
        data-team-name={team.name.split(" ").join("-")}
        onClick={(e) => handleNavigation(e)}
      />
      <div className="season-data add-year-column">
        <p>YEAR</p>
        <p>GOALS</p>
        <p>ASSISTS</p>
        <p>POINTS</p>
        <p>PPG</p>
        <p>SHOTS</p>
        <p>+ / -</p>
        <p>BLOCKED</p>
        <p>HITS</p>
        <p>PIM</p>
        {renderStats(stats)}
      </div>
    </div>
  );
};
