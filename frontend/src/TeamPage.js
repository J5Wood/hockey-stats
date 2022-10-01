import React, { useState } from "react";
import { useLocation } from "react-router-dom";
// import { TeamContext } from "./contextStore/TeamProvider";
// import { StatContext } from "./contextStore/StatProvider";
import { StatsContainer } from "./StatsContainer";
import { useQuery } from "@tanstack/react-query";
import { fetchTeamData } from "./api/TeamActions";
import { fetchStatData } from "./api/StatActions";

export const TeamPage = () => {
  const teams = useQuery(["teams"], () => fetchTeamData());
  const teamName = useLocation().pathname.split("/")[2];

  const [year, setYear] = useState("20212022");
  const stats = useQuery(
    ["season", year],
    async () => await fetchStatData(year)
  );

  const handleYearChange = (e) => {
    setYear(e.target.value.split(" - ").join(""));
  };

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

  const renderTeam = () => {
    if (teams.isFetched && stats.isFetched) {
      const formattedName = teamName
        .split("-")
        .map((name) => name[0].toUpperCase() + name.slice(1))
        .join(" ");
      const team = teams.data.data.find((team) => {
        return team.attributes.name === formattedName;
      });
      const players = stats.data.data.filter(
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
          <select
            id="year"
            defaultValue={"current"}
            onChange={handleYearChange}
          >
            {renderOptions()}
          </select>
          <StatsContainer seasonData={players} />
        </>
      );
    } else {
      return <h2>...Loading</h2>;
    }
  };

  return <>{renderTeam()}</>;
};
