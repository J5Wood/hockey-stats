import React, { useEffect, useReducer } from "react";
import { fetchStatData } from "../api/StatActions";

export const StatContext = React.createContext({});

export const StatProvider = ({ children }) => {
  // const [data, setData] = useState(null);

  const getSeason = async (season) => {
    const seasonData = await fetchStatData(season);
    // setData(seasonData.data);
    return seasonData;
  };

  const reducer = async (state, action) => {
    switch (action.type) {
      case "ADD_YEAR":
        const newDataObj = { ...state };
        // debugger;
        const newSeason = await getSeason(action.payload);
        newDataObj[action.payload] = newSeason;
        // debugger;
        return newDataObj;
      default:
        return state;
    }
  };

  const initialState = null;

  const [data, dispatch] = useReducer(reducer, initialState);

  // const addSeason = useCallback((year, data) => {
  //   debugger;
  //   getSeason(year);
  // }, []);

  // const getSeason = async (season) => {
  //   const seasonData = await fetchStatData(season);
  //   // setData(seasonData.data);
  //   return seasonData;
  // };

  // const
  // async (season) => {
  //   const seasonData = await fetchStatData(season);
  //   debugger;
  //   setData(...data, seasonData);
  // };

  // const getSeason = async (season) => {
  //   const seasonData = await fetchStatData(season);
  //   setData(seasonData.data);
  // };

  useEffect(() => {
    const action = {
      type: "ADD_YEAR",
      payload: "20212022",
    };
    dispatch(action);
  }, []);

  return (
    <StatContext.Provider value={{ data, dispatch }}>
      {children}
    </StatContext.Provider>
  );
};
