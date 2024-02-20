// formatting address
function addressformatter(address) {
  return address.split(" ").join("+");
}

// Geocoding - Nominatim

const geocode = function (address, findweather, callback) {
  const geo_url = `https://nominatim.openstreetmap.org/search?q=${addressformatter(
    address
  )}&format=json&addressdetails=1&limit=1&polygon_svg=1`;
  fetch(geo_url)
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      const { lat, lon } = response[0];
      findweather(lat, lon, (weatherString) => {
        callback(weatherString);
      });
    })
    .catch((err) => {
      callback(null, err);
    });
};

module.exports = geocode;
