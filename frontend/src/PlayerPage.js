import React, { useContext } from "react";
import { StatContext } from "./contextStore/StatProvider";
import { TeamContext } from "./contextStore/TeamProvider";
import { PlayerContainer } from "./PlayerContainer";

export const PlayerPage = () => {
  const season = useContext(StatContext).data;
  const teams = useContext(TeamContext).data;
  const formattedUrlName = window.location.pathname
    .split("/")[2]
    .split("-")
    .join(" ");

  const renderPlayer = () => {
    if (season && teams) {
      const player = season.find(
        (stat) => stat.attributes.player.name === formattedUrlName
      );
      const team = teams.find(
        (team) => parseInt(team.id) === player.attributes.player.team_id
      );
      player.team = team;
      return <PlayerContainer playerData={player} />;
    }
  };

  return <>{renderPlayer()}</>;
};
