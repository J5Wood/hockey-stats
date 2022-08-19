import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { TeamContext } from "./Provider";

export const Teams = () => {
  const navigate = useNavigate();
  const teams = useContext(TeamContext).data;

  const handleNavigation = (e) => {
    navigate(`/teams/${e.target.dataset.teamName}`);
  };

  const displayTeamLogos = () => {
    if (teams) {
      const teamElements = teams.map((team) => {
        return (
          <img
            src={team.attributes.image_url}
            alt={`${team.attributes.name} logo`}
            className="team-logo"
            key={team.attributes.name}
            onClick={(e) => handleNavigation(e)}
          />
        );
      });
      return teamElements;
    }
  };

  return (
    <div>
      <h2>Teams</h2>
      <div className="team-container">{displayTeamLogos()}</div>
    </div>
  );
};
