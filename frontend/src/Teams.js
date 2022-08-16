import { teamLogoData } from "./TeamLogoData";
import { useNavigate } from "react-router-dom";
import React from "react";

export const Teams = () => {
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    navigate(`/teams/${e.target.dataset.teamName}`);
  };

  const displayTeamLogos = () => {
    const teams = [];
    for (let team in teamLogoData) {
      const name = team.split(".")[0];
      teams.push(
        <img
          src={teamLogoData[team]}
          alt={`${name} logo`}
          className="team-logo"
          key={name}
          data-team-name={name}
          onClick={(e) => handleNavigation(e)}
        />
      );
    }
    return teams;
  };

  return (
    <div>
      <h2>Teams</h2>
      <div className="team-container">{displayTeamLogos()}</div>
    </div>
  );
};
