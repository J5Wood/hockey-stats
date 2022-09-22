import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { TeamContext } from "./contextStore/TeamProvider";
import { StatContext } from "./contextStore/StatProvider";
import { StatsContainer } from "./StatsContainer";

export const TeamPage = () => {
  const teams = useContext(TeamContext).data;
  const teamName = useLocation().pathname.split("/")[2];

  const stats = useContext(StatContext).data;

  const renderTeam = () => {
    if (teams && stats) {
      const formattedName = teamName
        .split("-")
        .map((name) => name[0].toUpperCase() + name.slice(1))
        .join(" ");
      const team = teams.find((team) => {
        return team.attributes.name === formattedName;
      });
      const players = stats.filter(
        (player) => player.attributes.player.team_id === parseInt(team.id)
      );
      return (
        <>
          <div
            className="team-container"
            style={{ backgroundImage: `url(${team.attributes.image_url})` }}
          >
            <h2>
              {team.attributes.location} <br />
              {team.attributes.name}
            </h2>
            <h3>{team.attributes.venue}</h3>
          </div>
          <StatsContainer seasonData={players} />
        </>
      );
    } else {
      return <h2>...Loading</h2>;
    }
  };

  return <>{renderTeam()}</>;
};
