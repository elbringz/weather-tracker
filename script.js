var searchBtn = document.querySelector('#btn');
var searchContent = document.querySelector('#srch');

function getData() {

}



fetch('https://api.openweathermap.org/data/2.5/forecast?q='+searchContent.value+'&appid=b49714e05c2fbb6dd1d6371b8f1f9816'
.then(response => response.json())

)











searchBtn.addEventListener('click', function {
    fetch
})