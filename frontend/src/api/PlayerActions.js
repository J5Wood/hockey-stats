export async function fetchPlayerData(name) {
  // check name on connor mcdavid, nugent-hopkins, etc.
  // debugger;
  return await fetch(`http://localhost:3001/players/${name}`)
    .then((resp) => resp.json())
    .then((data) => {
      return data.data;
    });
}
