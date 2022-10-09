import React from "react";

export const StatRow = ({ attributes }) => {
  const renderYear = () => {
    if (window.location.pathname.split("/")[1] === "players") {
      const year = attributes.year.toString();
      return (
        <span className="stats-year-data">
          <p>'{year.slice(2, 4)}</p>
          <p>-</p>
          <p>'{year.slice(6)}</p>
        </span>
      );
    }
  };

  return (
    <>
      {renderYear()}
      <span>
        <p>{attributes.goals}</p>
      </span>
      <span>
        <p>{attributes.assists}</p>
      </span>
      <span>
        <p>{attributes.points}</p>
      </span>
      <span>
        <p>{attributes.ppg}</p>
      </span>
      <span>
        <p>{attributes.shots}</p>
      </span>
      <span>
        <p>{attributes.plus_minus}</p>
      </span>
      <span>
        <p>{attributes.blocked}</p>
      </span>
      <span>
        <p>{attributes.hits}</p>
      </span>
      <span>
        <p>{attributes.pim}</p>
      </span>
    </>
  );
};
