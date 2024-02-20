// Weather API - OpenWeatherMap

const findweather = function (lat, lon, callback) {
  const url_unit = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d81654ee77493e14857e7684590abb66&units=metric`;

  fetch(url_unit)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const weatherString = `there is currently ${data.main.temp} degree out but it feels like ${data.main.feels_like} at ${data.name}`;
      callback(weatherString);
    })
    .catch((error) => {
      // Handle errors if any
      console.error("Error fetching weather:", error);
      callback(null);
    });
};

// =======================================================
module.exports = findweather;
