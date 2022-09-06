import React from "react";

export const StatAttributes = ({ attributes }) => {
  return (
    <>
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
