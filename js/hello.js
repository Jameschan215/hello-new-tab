'use strict';

window.addEventListener('load', async () => {

    let hasRequestedAPI = localStorage.getItem('hasRequestedAPI');

    if (!hasRequestedAPI) {
        try {
            await fetchData();
        } catch(error) {
            console.error('Error displaying fetched data:', error);
        }
        localStorage.setItem('hasRequestedAPI', 'true');
    }
    updateDisplay();
});

function updateDataAndDisplay() {
    fetchData();
    
}

const interval = 20 * 60 * 1000;
setInterval(updateDataAndDisplay, interval);

window.addEventListener('beforeunload', () => {
    localStorage.setItem('hasRequestedAPI', '');
})

