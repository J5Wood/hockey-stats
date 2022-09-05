import { useContext } from "react";
import { SeasonContext } from "./SeasonProvider";
import { StatsContainer } from "./StatsContainer";

export const Players = () => {
  const season = useContext(SeasonContext).data;

  const renderStats = () => {
    if (season) {
      return <StatsContainer seasonData={season} />;
    } else {
      return <h2>Loading... Please Wait</h2>;
    }
  };

  return (
    <>
      <div>Players</div>
      {renderStats()}
    </>
  );
};
