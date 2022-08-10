import { teamData } from "./TeamData";

export const Teams = () => {
  const displayTeamLogos = () => {
    const teams = [];
    for (let team in teamData) {
      teams.push(
        <img
          src={teamData[team]}
          alt={`${team.split(".")[0]} logo`}
          className="team-logo"
          key={team.split(".")[0]}
        />
      );
    }
    return teams;
  };

  return (
    <div>
      <h2>Teams</h2>
      <div className="team-container">{displayTeamLogos()}</div>
    </div>
  );
};
