import { useContext } from "react";
import { StatContext } from "./contextStore/StatProvider";
import { StatsContainer } from "./StatsContainer";

export const StatsPage = () => {
  const season = useContext(StatContext).data;
  console.log("season one", season);

  const addSeason = useContext(StatContext).dispatch;

  const handleClick = () => {
    const action = {
      type: "ADD_SEASON",
      payload: "20202021",
    };
    addSeason(action);
  };
  // const addSeason = useContext(StatContext).dispatch;
  // console.log(addSeason);
  // addSeason("20202021");
  // console.log("season one", season)

  // grab season grab players from that season send to container

  const renderStats = () => {
    if (season) {
      debugger;
      console.log("here");
      return (
        <>
          <button onClick={handleClick}>PRESS ME</button>
          <StatsContainer seasonData={season} />;
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
