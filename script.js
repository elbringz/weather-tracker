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
var resultsDay2 = document.querySelector('#weather2');
var location2 = document.createElement('h2');
location2.textContent = weather.city.name + ' ' + weather.list[8].dt_txt;
resultsDay2.append(location2);
var tempDay2 = document.createElement('p');
tempDay2.textContent = 'Temp: '+weather.list[8].main.temp+' degrees';
resultsDay2.append(tempDay2);

var windDay2 = document.createElement('p');
windDay2.textContent = 'Wind: ' + weather.list[8].wind.speed + ' mph';
resultsDay2.append(windDay2);
var humidityDay2 = document.createElement('p');
humidityDay2.textContent = 'Humidity: ' + weather.list[8].main.humidity + '%';
resultsDay2.append(humidityDay2);
}

function fetchResults(query) {
    var url = 'https://api.openweathermap.org/data/2.5/forecast?q='+searchContent.value+'&units=imperial&appid='+apiKey;

    fetch(url)
    .then((response) => response.json())
    .then((data) => renderWeather(data));
    
    
}














