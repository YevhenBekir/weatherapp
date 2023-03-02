import weatherCard from './variables';

function centerPositionWeatherCard(data = weatherCard){
    data.classList.remove('weather-card__space-between');
    data.classList.add('weather-card__center');
};

function spaceBetweenPositionWeatherCard(data = weatherCard){
    data.classList.remove('weather-card__center');
    data.classList.add('weather-card__space-between');
};

export {centerPositionWeatherCard, spaceBetweenPositionWeatherCard};