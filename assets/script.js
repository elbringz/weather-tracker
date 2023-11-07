//Set variables
var searchBtn = document.querySelector('#btn');
var searchContent = document.querySelector('#srch');
var apiKey = 'b49714e05c2fbb6dd1d6371b8f1f9816';

function consolidate(boxNum, index, weather) {
    var results = document.querySelector('#weather'+ boxNum.toString());
    var elements = results.children
    while(elements.length>0) {
       
       elements[0].remove()
       
    }
    var location = document.createElement('h2');
    location.textContent = weather.city.name + ' ' + weather.list[index].dt_txt;
    results.append(location);
    var icon = document.createElement('img');
    icon.src = "https://openweathermap.org/img/wn/" + weather.list[index].weather[0].icon + "@2x.png";
    results.append(icon);
    var temp = document.createElement('p');
    temp.textContent = 'Temp: '+weather.list[index].main.temp+' degrees';
    results.append(temp);
    var wind = document.createElement('p');
    wind.textContent = 'Wind: ' + weather.list[index].wind.speed + ' mph';
    results.append(wind);
    var humidity = document.createElement('p');
    humidity.textContent = 'Humidity: ' + weather.list[index].main.humidity + '%';
    results.append(humidity);
}


//Function that sets weather content on page
function renderWeather(weather) {
console.log(weather);

var boxNum = 1;
var index = 0;
for (var i=0; i<5; i++) {
    consolidate(boxNum, index, weather)
    index = index + 8;
    boxNum = boxNum + 1;
}
return;
}


//Function that fetches content from api and saves previous search to local storage
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















