import { useState } from "react";
import { fetchStatData } from "./api/StatActions";
import { StatsContainer } from "./StatsContainer";
import { useQuery } from "@tanstack/react-query";

export const StatsPage = () => {
  const [year, setYear] = useState("20212022");
  const currentSeason = useQuery(
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

  const renderStats = () => {
    if (currentSeason.isFetched) {
      return (
        <>
          <select
            id="year"
            defaultValue={"current"}
            onChange={handleYearChange}
          >
            {renderOptions()}
          </select>
          <StatsContainer seasonData={currentSeason.data.data} />;
        </>
      );
    } else {
      return <h2>Loading... Please Wait</h2>;
    }
  };

  return (
    <>
      <h3>Stats</h3>
      {renderStats()}
    </>
  );
};
