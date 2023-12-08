
const ipGeoOptions = {method: 'GET'};
const ABSTRACT_API = 'b7ce841edc44422fae8d8f290c368a81';

function getCity() {
  fetch(`https://ipgeolocation.abstractapi.com/v1?api_key=${ABSTRACT_API}`, ipGeoOptions)
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('location', data.city);
    console.log(data.city);
  })
  .catch(err => console.error(err));
}


