export async function fetchPlayerData(name) {
  return await fetch(`http://localhost:3001/players/${name}`)
    .then((resp) => resp.json())
    .then((data) => data.data);
}
