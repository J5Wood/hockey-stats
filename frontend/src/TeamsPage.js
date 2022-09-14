import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { TeamContext } from "./contextStore/TeamProvider";

export const TeamsPage = () => {
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
      <h3>Teams</h3>
      <div className="teams-container">{displayTeamLogos()}</div>
    </>
  );
};
