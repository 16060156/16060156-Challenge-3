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

// /**
//  * Fetch API data
//  */
// function getAPIdata() {
	
// 	var url = "http://api.openweathermap.org/data/2.5/forecast";
// 	var apiKey ="b56eb22343437e4b762ed7fafeac5691";
// 	var city = "the%20Hague";

// 	// construct request
// 	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
// 	// get weather forecast
// 	fetch(request)

// 	// parse to JSON format
// 	.then(function(response) {
// 		return response.json();
// 	})
	
// 	// render weather per day
// 	.then(function(response) {

// 	// 	// render weatherCondition
// 	// 	onAPISucces(response);
// 	// })
// }

setInterval(tijd, 100);

// init data stream
getAPIdata();
