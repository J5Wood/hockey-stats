import { useContext, useState } from "react";
import { fetchStatData } from "./api/StatActions";
// import { StatContext } from "./contextStore/StatProvider";
import { StatsContainer } from "./StatsContainer";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const StatsPage = () => {
  // const season = useContext(StatContext).data;
  // console.log("season one", season);

  const queryClient = useQueryClient();
  const [year, setYear] = useState("20212022");
  const currentSeason = useQuery(
    ["season", year],
    async () => await fetchStatData(year)
  );

  // const fetchSeasonData = async (year) => {
  //   debugger;
  //   const response = await fetchStatData(year);

  //   return response;
  // };
  // debugger;
  // const addSeason = useContext(StatContext).dispatch;

  // const handleClick = () => {
  //   const action = {
  //     type: "ADD_SEASON",
  //     payload: "20202021",
  //   };
  //   addSeason(action);
  // };
  // const addSeason = useContext(StatContext).dispatch;
  // console.log(addSeason);
  // addSeason("20202021");
  // console.log("season one", season)

  // grab season grab players from that season send to container

  const renderStats = () => {
    if (currentSeason.isFetched) {
      // debugger;
      // console.log("here");
      return (
        <>
          {/* <button onClick={handleClick}>PRESS ME</button> */}
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
