function tijd() {
    
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    
    if (mins < 10) {
        mins = "0"+mins;
    }

    if (hours < 10) {
        hours = "0"+hours;
    }

    document.getElementById("tijd").innerHTML = hours+":"+mins;
}

setInterval(tijd, 100);

function getAPIdata() {

    var url = "https://api.openweathermap.org/data/2.5/forecast";
    var apiKey ="b56eb22343437e4b762ed7fafeac5691";
    var city = "the%20Hague";
}

fetch("http://api.openweathermap.org/data/2.5/weather?q=the%20hague&appid=b56eb22343437e4b762ed7fafeac5691&units=metric")
    
    // parse to JSON format 
    .then(function(response) {
        return response.json();
    })
    
    // render weather per day
    .then(function(response) {

        console.log(response.main.temp);
        document.getElementById('temperatuur').innerHTML = response.main.temp + "\xB0C"

        console.log(response.weather[0].main);
        document.getElementById('weertype').innerHTML = response.weather[0].main

        console.log(response.wind.speed);
        document.getElementById('humidity').innerHTML = response.main.humidity + "%"
    })
    
    // catch error
    .catch(function (error) {
        // onAPIError();
        console.error('Request failed', error);
    });

// init data stream
getAPIdata();