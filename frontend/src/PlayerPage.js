import React, { useState } from "react";
import { PlayerContainer } from "./PlayerContainer";
import { useQuery } from "@tanstack/react-query";
import { fetchStatData } from "./api/StatActions";
import { fetchTeamData } from "./api/TeamActions";

export const PlayerPage = () => {
  const [year, setYear] = useState("20212022");
  const season = useQuery(
    ["season", year],
    async () => await fetchStatData(year)
  );
  const teams = useQuery(["teams"], () => fetchTeamData());

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

  const formattedUrlName = window.location.pathname
    .split("/")[2]
    .split("-")
    .join(" ");

  const renderPlayer = () => {
    if (season.isFetched && teams.isFetched) {
      const player = season.data.data.find(
        (stat) => stat.attributes.player.name === formattedUrlName
      );
      const team = teams.data.data.find(
        (team) => parseInt(team.id) === player.attributes.player.team_id
      );
      player.team = team;
      return <PlayerContainer playerData={player} />;
    }
  };

  return (
    <>
      <select id="year" defaultValue={"current"} onChange={handleYearChange}>
        {renderOptions()}
      </select>
      {renderPlayer()}
    </>
  );
};
