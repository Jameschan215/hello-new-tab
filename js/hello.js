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

window.addEventListener('beforeunload', (event) => {
    // 显示确认对话框
    event.preventDefault();
    // 为了兼容处理，Chrome需要设置returnValue
    event.returnValue = '';
    localStorage.setItem('hasRequestedAPI', '');
  });