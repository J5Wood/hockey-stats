import { useContext } from "react";
import { SeasonContext } from "./SeasonProvider";

export const Players = () => {
  const season = useContext(SeasonContext).data;

  const renderStats = () => {
    if (season) {
      debugger;
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
