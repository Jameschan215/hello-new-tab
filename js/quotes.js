
const apiUrlForQuote = 'https://api.quotable.io/random';

function getQuote() {
    fetch(apiUrlForQuote)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('quote', data.content);
        localStorage.setItem('author', data.author);
    })
    .catch((error) => console.error(error));
}

function displayQuote() {
    const storedQuote = localStorage.getItem('quote');
    const storedAuthor = localStorage.getItem('author');

    const quotePara = document.querySelector('.quote');
    const authorPara = document.querySelector('.author');

    quotePara.innerHTML = storedQuote;
    authorPara.innerHTML = ' ———— ' + storedAuthor;
}


