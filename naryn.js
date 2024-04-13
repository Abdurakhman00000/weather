const weather = document.querySelector(".weather");

let apiKey = "2043126aeed1fd58dc11c8976c35a5b0";
let lat = "41.4274";
let lon = "75.9841";
let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;


// const weather_state = document.querySelector('.weather-state')
// const weather_temp = document.querySelector('.weather-temp')
// const weather_data = document.querySelector('.weather-data')

fetch(api)
  .then((res) => res.json())
  .then((unp) => {
    console.log(unp)
  document.querySelector('.name').innerHTML = unp.name;

  unp.weather.forEach(el => {
    document.querySelector('.state').innerHTML = el.main;
  });

  document.querySelector('.temp').innerHTML = `${unp.main.temp}°C`

  document.querySelector('.humanity').innerHTML = unp.main.humidity;

  document.querySelector('.visib').innerHTML = unp.visibility

  document.querySelector('.wind').innerHTML = `${unp.wind.speed} km/h`;

  document.querySelector('.max').innerHTML = `${unp.main.temp_max}°C`

  document.querySelector('.min').innerHTML = `${unp.main.temp_min}°C`

  document.querySelector('.feels').innerHTML = `${unp.main.feels_like}°C`

  document.querySelector('.timezone').innerHTML = unp.timezone
  }
  );



  