import React, { useState, useEffect } from "react";
import { fetchSeasonData } from "./actions/SeasonActions";

export const SeasonContext = React.createContext({});

export const SeasonProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const getSeason = async (season) => {
    const seasonData = await fetchSeasonData(season);
    setData(seasonData.data);
  };

  useEffect(() => {
    getSeason("20212022");
  }, []);

  return (
    <SeasonContext.Provider value={{ data }}>{children}</SeasonContext.Provider>
  );
};
