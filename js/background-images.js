
const IAMGEACCESSKEY = '1NYX33NjkZkAmI9MyxdkVNbQCbXfbjLaTqjtK9V3nK0';
const topics = ['nature', 'landscape', 'scenery', 'sky', 'sea'];
const apiUrlImage = `https://api.unsplash.com/photos/random?client_id=${IAMGEACCESSKEY}&orientation=landscape&query=${topics}`;


function getImage() {
	fetch(apiUrlImage)
		.then((response) => response.json())
		.then((data) => {
			localStorage.setItem('imageUrl', data.urls.regular);
			localStorage.setItem('photographerName', data.user.name);
			localStorage.setItem('photographerUsername', data.user.username);
		})
		.catch((error) => {
			console.log('Error fetching random photo: ', error);
		});
}

function displayImage() {
	const storedImageUrl = localStorage.getItem('imageUrl');
	const storedName = localStorage.getItem('photographerName');
	const storedUsername = localStorage.getItem('photographerUsername');

	const authorName = document.querySelector('.photographer');
	const authorProfile = document.createElement('a');
	authorProfile.href = 'https://unsplash.com/@' + storedUsername;
	authorProfile.innerText = storedName;
	authorName.appendChild(authorProfile);

	document.body.style.backgroundImage = `url(${storedImageUrl})`;
	document.body.style.backgroundSize = 'cover';
	document.body.style.backgroundPosition = 'center';
	document.body.style.backgroundAttachment = 'fixed';
}

