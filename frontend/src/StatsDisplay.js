import React from "react";

export const StatsDisplay = ({ players }) => {
  const renderPlayers = () => {
    if (players) {
      return players.map((player, index) => {
        return (
          <tr key={index}>
            <td>{player.attributes.player.name}</td>
            <td>{player.attributes.goals}</td>
            <td>{player.attributes.assists}</td>
            <td>{player.attributes.points}</td>
            <td>{player.attributes.ppg}</td>
            <td>{player.attributes.shots}</td>
            <td>{player.attributes.plus_minus}</td>
            <td>{player.attributes.blocked}</td>
            <td>{player.attributes.hits}</td>
            <td>{player.attributes.pim}</td>
          </tr>
        );
      });
    }
  };

  return <>{renderPlayers()}</>;
};
