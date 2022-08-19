import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { TeamContext } from "./Provider";

export const Team = () => {
  const teams = useContext(TeamContext).data;
  const teamName = useLocation().pathname.split("/")[2];

  const renderTeam = () => {
    if (teams) {
      const formattedName = teamName
        .split("-")
        .map((name) => name[0].toUpperCase() + name.slice(1))
        .join(" ");
      const team = teams.find((team) => {
        return team.attributes.name === formattedName;
      });
      return (
        <div className="team-container">
          <h2>
            {team.attributes.location} <br />
            {team.attributes.name}
          </h2>
          <img
            src={team.attributes.image_url}
            alt={`${team.attributes.name} logo`}
            className="team-logo-large"
          />

          <h3>{team.attributes.venue}</h3>
        </div>
      );
    } else {
      return <h2>...Loading</h2>;
    }
  };

  return <div>{renderTeam()}</div>;
};
