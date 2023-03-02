import weatherPage from './modules/request';

document.addEventListener('DOMContentLoaded', () => {

    weatherPage();
    const interval = setInterval(weatherPage, 360000);

})