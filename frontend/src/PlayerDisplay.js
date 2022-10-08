import React from "react";
import { Link } from "react-router-dom";

export const PlayerDisplay = ({ playerData }) => {
  const renderPlayerDisplay = () => {
    const formattedName = playerData.player.name.split(" ").join("_");
    return (
      <>
        <Link to={`${formattedName}`}>
          <h4>{playerData.player.name}</h4>
        </Link>
        <p>{playerData.player.position}</p>
        <p>{playerData.player.shoots}</p>
        <p>{playerData.goals}</p>
        <p>{playerData.assists}</p>
        <p>{playerData.points}</p>
      </>
    );
  };

  return <>{renderPlayerDisplay()}</>;
};
