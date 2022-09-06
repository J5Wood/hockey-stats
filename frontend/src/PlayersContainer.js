import React, { useContext, useState } from "react";
import { StatContext } from "./contextStore/StatProvider";
import { PlayerDisplay } from "./PlayerDisplay";

export const PlayersContainer = () => {
  const season = useContext(StatContext).data;
  const [queryParam, setQueryParam] = useState("");

  const handleSearchInput = (e) => {
    setQueryParam(e.target.value);
  };

  const renderPlayersDisplay = () => {
    if (season) {
      const players = season.filter((player) =>
        player.attributes.player.name.includes(queryParam)
      );
      return players.map(({ attributes }, index) => {
        return <PlayerDisplay playerData={attributes} key={index} />;
      });
    }
  };

  return (
    <div className="players-container">
      <label htmlFor="search">Search</label>
      <input id="search" onChange={(e) => handleSearchInput(e)} />
      <div className="players-display">
        <span />
        <h5>Position</h5>
        <h5>Shoots</h5>
        <h5>Goals</h5>
        <h5>Assists</h5>
        <h5>Points</h5>
        {renderPlayersDisplay()}
      </div>
    </div>
  );
};
