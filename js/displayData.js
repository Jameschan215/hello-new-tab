
function displayImage() {
	const photoUrl = localStorage.getItem('photoUrl');
	const name = localStorage.getItem('photographerName');
	const username = localStorage.getItem('photographerUsername');

	const nameLabel = document.querySelector('.photographer');
	const nameLink = document.createElement('a');
	nameLink.href = 'https://unsplash.com/@' + username;
	nameLink.innerText = name;
	nameLabel.appendChild(nameLink);

	document.body.style.backgroundImage = `url(${photoUrl})`;
	document.body.style.backgroundSize = 'cover';
	document.body.style.backgroundPosition = 'center';
	document.body.style.backgroundAttachment = 'fixed';
}

function displayQuote() {
    const quote = localStorage.getItem('quote');
    const author = localStorage.getItem('author');

    const quoteLabel = document.querySelector('.quote');
    const authorLabel = document.querySelector('.author');

    quoteLabel.innerHTML = quote;
    authorLabel.innerHTML = ' ———— ' + author;
}

function displayWeather() {
    const temperature = localStorage.getItem('temperature');
    const temperatureApparent = localStorage.getItem('temperatureApparent');
    const humidity = localStorage.getItem('humidity');
    const weatherCode = localStorage.getItem('weatherCode');
    const city = localStorage.getItem('city');
  
    updateData(temperature, temperatureApparent, humidity, weatherCode, city);
  }

  function updateDisplay() {
    displayImage();
    displayWeather();
    displayQuote();
  }