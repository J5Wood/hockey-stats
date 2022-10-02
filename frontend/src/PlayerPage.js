import React from "react";
import { useLocation } from "react-router-dom";
import { PlayerContainer } from "./PlayerContainer";
import { useQuery } from "@tanstack/react-query";
import { fetchPlayerData } from "./api/PlayerActions";

export const PlayerPage = () => {
  const name = useLocation().pathname.split("/")[2];
  const player = useQuery(["player", name], () => fetchPlayerData(name));

  const renderPlayer = () => {
    if (player.isFetched) {
      return <PlayerContainer playerData={player.data[0]} />;
    } else {
      return <h3>...LOADING</h3>;
    }
  };

  return <>{renderPlayer()}</>;
};
