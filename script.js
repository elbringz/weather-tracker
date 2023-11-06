var searchBtn = document.querySelector('#btn');
var searchContent = document.querySelector('#srch');
var apiKey = 'b49714e05c2fbb6dd1d6371b8f1f9816';

function renderWeather(weather) {
console.log(weather);
var results = document.querySelector('#weather1');
var location = document.createElement('h2');
location.textContent = weather.city.name + ' ' + weather.list[0].dt_txt;
results.append(location);
var temp = document.createElement('p');
temp.textContent = 'Temp: '+weather.list[0].main.temp+' degrees';
results.append(temp);

var wind = document.createElement('p');
wind.textContent = 'Wind: ' + weather.list[0].wind.speed + ' mph';
results.append(wind);
var humidity = document.createElement('p');
humidity.textContent = 'Humidity: ' + weather.list[0].main.humidity + '%';
results.append(humidity);
// p for temp, wind, humidity
}

function fetchResults(query) {
    var url = 'https://api.openweathermap.org/data/2.5/forecast?q='+searchContent.value+'&units=imperial&appid='+apiKey;

    fetch(url)
    .then((response) => response.json())
    .then((data) => renderWeather(data));
    
    
}














