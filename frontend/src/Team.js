import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { TeamContext } from "./Provider";
// import { teamLogoData } from "./TeamLogoData";

export const Team = () => {
  const teams = useContext(TeamContext);
  const teamName = useLocation().pathname.split("/")[2];

  const renderTeam = () => {
    if (teams.data) {
      //   let teamlogo = null;
      const formattedName = teamName
        .split("-")
        .map((name) => name[0].toUpperCase() + name.slice(1))
        .join(" ");
      const team = teams.data.find((team, index) => {
        // teamlogo = teamLogoData[index];
        return team.name === formattedName;
      });
      //   console.log(teamlogo);
      return (
        <div className="team-container">
          <h2>
            {team.location} <br />
            {team.name}
          </h2>

          <h3>{team.venue}</h3>
        </div>
      );
    } else {
      return <h2>...Loading</h2>;
    }
  };

  return <div>{renderTeam()}</div>;
};
