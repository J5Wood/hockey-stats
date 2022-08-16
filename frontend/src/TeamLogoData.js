export const teamLogoData = importAll(
  require.context("./assets/teams", false, /\.svg$/)
);

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
