import React, { useState, useEffect } from "react";
import { fetchTeamData } from "./actions/TeamActions";

export const TeamContext = React.createContext({});

export const TeamProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const getTeams = async () => {
    const teamData = await fetchTeamData();
    setData(teamData.data);
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <TeamContext.Provider value={{ data }}>{children}</TeamContext.Provider>
  );
};
