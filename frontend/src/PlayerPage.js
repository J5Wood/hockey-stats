import React, { useContext } from "react";
import { StatContext } from "./contextStore/StatProvider";
import { PlayerContainer } from "./PlayerContainer";

export const PlayerPage = () => {
  const season = useContext(StatContext).data;
  const formattedUrlName = window.location.pathname
    .split("/")[2]
    .split("-")
    .join(" ");

  const renderPlayer = () => {
    if (season) {
      const player = season.find(
        (stat) => stat.attributes.player.name === formattedUrlName
      );
      return <PlayerContainer playerData={player} />;
    }
  };

  return <div>{renderPlayer()}</div>;
};
