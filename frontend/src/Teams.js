import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { TeamContext } from "./TeamProvider";

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
            data-team-name={team.attributes.name.split(" ").join("-")}
            onClick={(e) => handleNavigation(e)}
          />
        );
      });
      return teamElements;
    }
  };

  return (
    <>
      <h2>Teams</h2>
      <div className="teams-container">{displayTeamLogos()}</div>
    </>
  );
};
