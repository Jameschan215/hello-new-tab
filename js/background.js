'use strict';

function updateAPI () {
    getCity();
    getImage();
    getWeather();
    getQuote();
}

function displayInfo() {
    displayImage();
    displayWeather();
    displayQuote();
}

window.addEventListener('load', () => {
    let hasRequestedAPI = localStorage.getItem('hasRequestedAPI');

    if (!hasRequestedAPI) {
        updateAPI();

        localStorage.setItem('hasRequestedAPI', 'true');
    }

    displayInfo();
});

const interval = 10 * 60 * 1000;
setInterval(updateAPI, interval);

// localStorage.setItem('hasRequestedAPI', '');

