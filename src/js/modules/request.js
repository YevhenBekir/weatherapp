import {centerPositionWeatherCard, spaceBetweenPositionWeatherCard} from './styles';
import weatherCard, {cityFinder} from './variables';
import loadingIcon from './loading_icon'
// import cityFromInput from './input';

export default function WeatherPage(){
    if(weatherCard){
        centerPositionWeatherCard();
        weatherCard.innerHTML = `
            ${loadingIcon}
        `;
    } else {
        document.body.style.cssText = 'display: flex; flex-direction: column; align-items: center; margin-top: 50px; font-weight: 700;';
        document.body.innerHTML = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="300" >
            <style type="text/css">
            .st0{fill:none;}
            .st1{fill:#121331;}
            </style>
            <g id="bounding_box">
                <rect class="st0" width="24" height="24"/>
            </g>
            <g id="design">
                <path class="st1" d="M10.25,22c-0.1,0-0.21-0.02-0.31-0.07c-0.3-0.14-0.48-0.46-0.43-0.79L10.38,15H4.75
                    c-0.29,0-0.55-0.16-0.67-0.42c-0.13-0.26-0.09-0.56,0.08-0.79l9-11.5c0.21-0.26,0.57-0.36,0.88-0.23s0.5,0.45,0.46,0.79L13.6,10
                    l5.66,0.03c0.29,0,0.56,0.17,0.68,0.44c0.12,0.27,0.08,0.58-0.11,0.8l-9,10.47C10.67,21.91,10.46,22,10.25,22z M6.29,13.5h4.96
                    c0.22,0,0.42,0.09,0.57,0.26s0.21,0.38,0.18,0.6l-0.64,4.46l6.27-7.29l-4.88-0.02c-0.21,0-0.42-0.09-0.56-0.25
                    s-0.21-0.38-0.18-0.59l0.66-5.31L6.29,13.5z"/>
            </g>
        </svg>
        <p>SORRY, WE GOT A PROBLEM !</p>
        We are already doing it !
        `;
    }

    async function loadWeather (cityName = ''){
        const apiLink = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=b0e4f294769b5404961e271ec07dfeb7`,
            request = await fetch(apiLink),
            response = await request.json();
        // console.log(response);
        const city = response.name,
            temp = Math.round(response.main.temp),
            feelsLike = Math.round(response.main.feels_like),
            windSpeed = response.wind.speed,
            weatherStatus = response.weather[0].main,
            weatherIcon = response.weather[0].icon,
            countryName = response.sys.country,
            countryFlag = `https://countryflagsapi.com/svg/${countryName}`;

        if(request.ok){
            spaceBetweenPositionWeatherCard();
            weatherCard.innerHTML = `
                <div class="weather-card__data">
                    <div class="city">${city}</div>
                    <div class="temp">На вулиці: ${temp}°C</div>
                    <div class="feels-like">Відчувається як: ${feelsLike}°C</div>
                    <div class="wind">Швидкість вітру: ${windSpeed}м/c</div>
                    <input type="text" class="cityFinder form-control" value="">
                </div>
                <div class="weather-card__icons">
                    <div class="weather-card__weather-icon">
                        <img src="http://openweathermap.org/img/wn/${weatherIcon}.png" alt="${weatherStatus}">
                    </div>
                    <div class="weather-card__flag-icon">
                        <img src="${countryFlag}" alt="${countryName}">
                    </div>
                </div>
            `;
        } else {
            weatherCard.innerHTML = `${request.message}`
        }
    }

    const input = document.getElementsByClassName('weather-card__data cityFinder');
    console.log(input);
    
    const data = 'Михалкове';
    loadWeather(data);
}