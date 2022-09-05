import React, { useState } from "react";
import { StatsDisplay } from "./StatsDisplay";

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

  return (
    <table className="player-stats">
      <thead>
        <tr>
          <th></th>
          <th>
            <button onClick={changeSortStat} value="goals">
              GOALS
            </button>
          </th>
          <th>
            <button onClick={changeSortStat} value="assists">
              ASSISTS
            </button>
          </th>
          <th>
            <button onClick={changeSortStat} value="points">
              POINTS
            </button>
          </th>
          <th>
            <button onClick={changeSortStat} value="ppg">
              PPG
            </button>
          </th>
          <th>
            <button onClick={changeSortStat} value="shots">
              SHOTS
            </button>
          </th>
          <th>
            <button onClick={changeSortStat} value="plus_minus">
              + / -
            </button>
          </th>
          <th>
            <button onClick={changeSortStat} value="blocked">
              BLOCKED
            </button>
          </th>
          <th>
            <button onClick={changeSortStat} value="hits">
              HITS
            </button>
          </th>
          <th>
            <button onClick={changeSortStat} value="pim">
              PIM
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <StatsDisplay players={sortedPlayers(sortStat)} />
      </tbody>
    </table>
  );
};
