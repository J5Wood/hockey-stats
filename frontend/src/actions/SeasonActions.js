export async function fetchSeasonData(year) {
  const response = await fetch(`http://localhost:3001/seasons?year=${year}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return response;
}
