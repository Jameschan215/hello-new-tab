
const options = { method: 'GET', headers: { accept: 'application/json' } };
const APIKEY = 'VKr26Rr8JxeIZ8gIT13dRToa2ZH8SjRc';
const city = localStorage.getItem('location', 'hefei');
const apiUrlWeather = `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${APIKEY}`;

const prettyPrintWeatherCode = (code) => {
	const weatherCodes = {
		0: 'Unknown',
		1000: 'Clear',
		1001: 'Cloudy',
		1100: 'Mostly Clear',
		1101: 'Partly Cloudy',
		1102: 'Mostly Cloudy',
		2000: 'Fog',
		2100: 'Light Fog',
		3000: 'Light Wind',
		3001: 'Wind',
		3002: 'Strong Wind',
		4000: 'Drizzle',
		4001: 'Rain',
		4200: 'Light Rain',
		4201: 'Heavy Rain',
		5000: 'Snow',
		5001: 'Flurries',
		5100: 'Light Snow',
		5101: 'Heavy Snow',
		6000: 'Freezing Drizzle',
		6001: 'Freezing Rain',
		6200: 'Light Freezing Rain',
		6201: 'Heavy Freezing Rain',
		7000: 'Ice Pellets',
		7101: 'Heavy Ice Pellets',
		7102: 'Light Ice Pellets',
		8000: 'Thunderstorm',
	};
	return weatherCodes[code.toString()];
};

const weatherIcons = {
	1000: './images/weather-icons/clear_day.svg',
	1001: './images/weather-icons/cloudy.svg',
	1100: './images/weather-icons/mostly_clear_day.svg',
	1101: './images/weather-icons/partly_cloudy_day.svg',
	1102: './images/weather-icons/mostly_cloudy.svg',
	2000: './images/weather-icons/fog.svg',
	2100: './images/weather-icons/fog_light.svg',
	3001: './images/weather-icons/wind.svg',
	4000: './images/weather-icons/drizzle.svg',
	4001: './images/weather-icons/rain.svg',
	4200: './images/weather-icons/rain_light.svg',
	4201: './images/weather-icons/rain_heavy.svg',
	5000: './images/weather-icons/snow.svg',
	5001: './images/weather-icons/flurries.svg',
	5100: './images/weather-icons/snow_light.svg',
	5101: './images/weather-icons/snow_heavy.svg',
	6000: './images/weather-icons/freezing_drizzle.svg',
	6001: './images/weather-icons/freezing_rain.svg',
	6200: './images/weather-icons/freezing_rain_light.svg',
	6201: './images/weather-icons/freezing_rain_heavy.svg',
	7000: './images/weather-icons/ice_pellets.svg',
	7101: './images/weather-icons/ice_pellets_heavy.svg',
	7102: './images/weather-icons/ice_pellets_light.svg',
	8000: './images/weather-icons/tstorm.svg',
};

function getIcon(weatherCode) {
	return weatherIcons[weatherCode];
}

function getWeather() {
  fetch(apiUrlWeather, options)
    .then((resp) => resp.json())
    .then((resp) => {
      localStorage.setItem('temperature', resp.data.values.temperature);
      localStorage.setItem('temperatureApparent',resp.data.values.temperatureApparent);
      localStorage.setItem('humidity', resp.data.values.humidity);
      localStorage.setItem('weatherCode', resp.data.values.weatherCode);
    })
    .catch((error) => console.error(error));
}

function displayWeather() {
  const storedTemp = localStorage.getItem('temperature');
	const storedTempAppa = localStorage.getItem('temperatureApparent');
	const storedhumidity = localStorage.getItem('humidity');
	const storedCode = localStorage.getItem('weatherCode');

  updateData(storedTemp, storedTempAppa, storedhumidity, storedCode);
}

function updateData(temperature, temperatureApparent, humidity, weatherCode) {
	const icon = document.querySelector('.weather-icon');
	const temp = document.querySelector('.weather-temperature');
	const desc = document.querySelector('.weather-description');
	const tempAppa = document.querySelector('.weather-temperatureApparent');
	const humi = document.querySelector('.weather-humidity');
	const cityLabel = document.querySelector('.location-city');

	temp.innerHTML = Math.round(parseFloat(temperature)) + '&deg;';
	tempAppa.innerHTML = `Feels like ${Math.round(parseFloat(temperatureApparent))}&deg;`;
	humi.innerHTML = `Humidity ${Math.round(parseFloat(humidity))}%`;
	desc.innerHTML = prettyPrintWeatherCode(weatherCode);
	cityLabel.innerHTML = localStorage.getItem('location', 'Hefei');

	const img = document.createElement('img');
	img.src = getIcon(weatherCode);
	icon.appendChild(img);
}

