
// Position api configuration
const ipGeoOptions = {method: 'GET'};
const IP_GEO_API = 'b7ce841edc44422fae8d8f290c368a81';
const ipGeoUrl = `https://ipgeolocation.abstractapi.com/v1?api_key=${IP_GEO_API}`;

// Quote api configuration
const QUOTE_URL = 'https://api.quotable.io/random';

// Weather api configuration
const weatherOptions = { method: 'GET', headers: { accept: 'application/json' } };
const WEATHER_API = 'VKr26Rr8JxeIZ8gIT13dRToa2ZH8SjRc';
const city = localStorage.getItem('city');
const weatherUrl = `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${WEATHER_API}`;

// Photo api configuration
const PHOTO_API = '1NYX33NjkZkAmI9MyxdkVNbQCbXfbjLaTqjtK9V3nK0';
const TOPICS = ['nature', 'landscape', 'scenery', 'sky', 'sea'];
const photoUrl = `https://api.unsplash.com/photos/random?client_id=${PHOTO_API}&orientation=landscape&query=${TOPICS}`;

async function fetchData() {
    try {
        const cityPromise = fetch(ipGeoUrl);
        const quotePromise = fetch(QUOTE_URL);
        const weatherPromise = fetch(weatherUrl);
        const photoPromise = fetch(photoUrl);

        const [cityResponse, quoteResponse, weatherResponse, photoResponse] = await Promise.all(
            [cityPromise, quotePromise, weatherPromise, photoPromise]
        );

        if (!cityResponse.ok || !quoteResponse.ok || !weatherResponse.ok || !photoResponse.ok) {
            throw new Error('One or more API requests failed.');
        }

        const cityData = await cityResponse.json();
        const quoteData = await quoteResponse.json();
        const weatherData = await weatherResponse.json();
        const photoData = await photoResponse.json();

        // Save data into local storage
        // city
        localStorage.setItem('city', cityData.city);

        // quote
        localStorage.setItem('quote', quoteData.content);
        localStorage.setItem('author', quoteData.author);

        // weather
        localStorage.setItem('temperature', weatherData.data.values.temperature);
        localStorage.setItem('temperatureApparent',weatherData.data.values.temperatureApparent);
        localStorage.setItem('humidity', weatherData.data.values.humidity);
        localStorage.setItem('weatherCode', weatherData.data.values.weatherCode);

        // photo
        console.log(photoData)
        localStorage.setItem('photoUrl', photoData.urls.regular);
        localStorage.setItem('photographerName', photoData.user.name);
        localStorage.setItem('photographerUsername', photoData.user.username);

        console.log('All data fetched!')
    } catch(error) {
        console.error('Error fetching data:', error);
    }
}
