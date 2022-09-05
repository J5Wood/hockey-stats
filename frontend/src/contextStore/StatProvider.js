import React, { useState, useEffect } from "react";
import { fetchStatData } from "../actions/StatActions";

export const StatContext = React.createContext({});

export const StatProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const getSeason = async (season) => {
    const seasonData = await fetchStatData(season);
    setData(seasonData.data);
  };

  useEffect(() => {
    getSeason("20212022");
  }, []);

  return (
    <StatContext.Provider value={{ data }}>{children}</StatContext.Provider>
  );
};
