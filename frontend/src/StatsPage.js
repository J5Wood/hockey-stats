import { useContext } from "react";
import { StatContext } from "./contextStore/StatProvider";
import { StatsContainer } from "./StatsContainer";

export const StatsPage = () => {
  const season = useContext(StatContext).data;

  const renderStats = () => {
    if (season) {
      return <StatsContainer seasonData={season} />;
    } else {
      return <h2>Loading... Please Wait</h2>;
    }
  };

  return (
    <>
      <div>STATS</div>
      {renderStats()}
    </>
  );
};
