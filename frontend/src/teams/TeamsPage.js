import { useNavigate } from "react-router-dom";
import React from "react";
import { fetchTeamData } from "../api/TeamActions";
import { useQuery } from "@tanstack/react-query";

export const TeamsPage = () => {
  const navigate = useNavigate();
  const teams = useQuery(["teams"], () => fetchTeamData());

  const handleNavigation = (e) => {
    navigate(`/teams/${e.target.dataset.teamName}`);
  };

  const displayTeams = () => {
    if (teams.isFetched) {
      const teamElements = teams.data.data.map((team) => {
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
      <div className="teams-container">{displayTeams()}</div>
    </>
  );
};
