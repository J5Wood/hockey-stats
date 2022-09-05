export async function fetchStatData(year) {
  const response = await fetch(`http://localhost:3001/stats?year=${year}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return response;
}
