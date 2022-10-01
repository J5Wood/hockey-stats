import React, { useState } from "react";
import { StatDisplay } from "./StatDisplay";

export const StatsContainer = ({ seasonData }) => {
  const [sortStat, setSortStat] = useState("goals");

  const changeSortStat = (e) => {
    setSortStat(e.target.value);
  };

  const sortedPlayers = (stat) => {
    // Sorting players should be its own component.
    // Need to add follow up checks in place of a tie
    return seasonData.sort((a, b) => {
      if (a.attributes[stat] > b.attributes[stat]) {
        return -1;
      }
      if (a.attributes[stat] < b.attributes[stat]) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  const renderSortedPlayers = () => {
    const players = sortedPlayers(sortStat);
    if (players) {
      return players.map((player, index) => (
        <StatDisplay player={player} key={index} />
      ));
    }
  };

  return (
    <div className="player-stats">
      <span className="spacer" />
      <button onClick={changeSortStat} value="goals">
        GOALS
      </button>
      <button onClick={changeSortStat} value="assists">
        ASSISTS
      </button>
      <button onClick={changeSortStat} value="points">
        POINTS
      </button>
      <button onClick={changeSortStat} value="ppg">
        PPG
      </button>
      <button onClick={changeSortStat} value="shots">
        SHOTS
      </button>
      <button onClick={changeSortStat} value="plus_minus">
        + / -
      </button>
      <button onClick={changeSortStat} value="blocked">
        BLOCKED
      </button>
      <button onClick={changeSortStat} value="hits">
        HITS
      </button>
      <button onClick={changeSortStat} value="pim">
        PIM
      </button>
      {renderSortedPlayers()}
    </div>
  );
};
