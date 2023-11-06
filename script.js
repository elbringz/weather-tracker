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



var resultsDay3 = document.querySelector('#weather3');
var location3 = document.createElement('h2');
location3.textContent = weather.city.name + ' ' + weather.list[16].dt_txt;
resultsDay3.append(location3);
var tempDay3 = document.createElement('p');
tempDay3.textContent = 'Temp: '+weather.list[16].main.temp+' degrees';
resultsDay3.append(tempDay3);

var windDay3 = document.createElement('p');
windDay3.textContent = 'Wind: ' + weather.list[16].wind.speed + ' mph';
resultsDay3.append(windDay3);
var humidityDay3 = document.createElement('p');
humidityDay3.textContent = 'Humidity: ' + weather.list[16].main.humidity + '%';
resultsDay3.append(humidityDay3);


var resultsDay4 = document.querySelector('#weather4');
var location4 = document.createElement('h2');
location4.textContent = weather.city.name + ' ' + weather.list[24].dt_txt;
resultsDay4.append(location4);
var tempDay4 = document.createElement('p');
tempDay4.textContent = 'Temp: '+weather.list[24].main.temp+' degrees';
resultsDay4.append(tempDay4);

var windDay4 = document.createElement('p');
windDay4.textContent = 'Wind: ' + weather.list[24].wind.speed + ' mph';
resultsDay4.append(windDay4);
var humidityDay4 = document.createElement('p');
humidityDay4.textContent = 'Humidity: ' + weather.list[24].main.humidity + '%';
resultsDay4.append(humidityDay4);


var resultsDay5 = document.querySelector('#weather5');
var location5 = document.createElement('h2');
location5.textContent = weather.city.name + ' ' + weather.list[32].dt_txt;
resultsDay5.append(location5);
var tempDay5 = document.createElement('p');
tempDay5.textContent = 'Temp: '+weather.list[32].main.temp+' degrees';
resultsDay5.append(tempDay5);

var windDay5 = document.createElement('p');
windDay5.textContent = 'Wind: ' + weather.list[32].wind.speed + ' mph';
resultsDay5.append(windDay5);
var humidityDay5 = document.createElement('p');
humidityDay5.textContent = 'Humidity: ' + weather.list[32].main.humidity + '%';
resultsDay5.append(humidityDay5);
return;
}

function fetchResults(query) {
    var url = 'https://api.openweathermap.org/data/2.5/forecast?q='+searchContent.value+'&units=imperial&appid='+apiKey;

    if('click', previousButton) {
        url = 'https://api.openweathermap.org/data/2.5/forecast?q='+localStorage.getItem('previous')+'&units=imperial&appid='+apiKey;
    }

    fetch(url)
    .then((response) => response.json())
    .then((data) => renderWeather(data));
    
    localStorage.setItem('previous', searchContent.value);
    var buttonlist = document.querySelector('.btnlist');
    var previousButton = document.createElement('button');
    previousButton.textContent = localStorage.getItem('previous');
    buttonlist.append(previousButton);
    return;
    
}















