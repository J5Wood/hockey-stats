export async function fetchTeamData() {
  const response = await fetch(`http://localhost:3001/teams`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return response;
}
