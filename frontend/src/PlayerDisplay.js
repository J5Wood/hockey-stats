import React from "react";

export const PlayerDisplay = ({ playerData }) => {
  const renderPlayerDisplay = () => {
    return (
      <>
        <h4>{playerData.player.name}</h4>
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
