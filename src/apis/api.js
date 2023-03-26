export const getCountryData = async (countryName) => {
  const url = `https://nominatim.openstreetmap.org/search?q=${countryName}&format=json&polygon_geojson=1`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};
