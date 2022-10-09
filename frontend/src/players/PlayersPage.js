import React, { useState } from "react";
import { PlayersDisplay } from "./PlayersDisplay";
import { fetchStatData } from "../api/StatActions";
import { useQuery } from "@tanstack/react-query";

export const PlayersPage = () => {
  const [year, setYear] = useState("20212022");
  const season = useQuery(
    ["season", year],
    async () => await fetchStatData(year)
  );

  const renderOptions = () => {
    const options = [];
    for (let i = 2022; i > 2004; i--) {
      if (i.toString() === year.slice(4)) {
        options.push(
          <option value={"current"} key={i}>
            {i - 1} - {i}
          </option>
        );
      } else {
        options.push(
          <option key={i}>
            {i - 1} - {i}
          </option>
        );
      }
    }
    return options;
  };

  const handleYearChange = (e) => {
    setYear(e.target.value.split(" - ").join(""));
  };

  const [queryParam, setQueryParam] = useState("");

  const handleSearchInput = (e) => {
    setQueryParam(e.target.value);
  };

  const renderPlayersDisplay = () => {
    if (season.isFetched) {
      const players = season.data.data.filter((player) =>
        player.attributes.player.name
          .toLowerCase()
          .includes(queryParam.toLowerCase())
      );
      return players.map(({ attributes }, index) => {
        return <PlayersDisplay playerData={attributes} key={index} />;
      });
    }
  };

  return (
    <div className="players-container">
      <h3>Players</h3>
      <select id="year" defaultValue={"current"} onChange={handleYearChange}>
        {renderOptions()}
      </select>
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
