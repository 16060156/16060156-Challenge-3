// init map
var myMap;

// Sportscholen namen & coordinaten
var fitnessCenters = [
	{
		name: 'Kneets gym',
		location: {lat: 52.0778,lng: 4.2694},
		ranking: 5
	}, {
		name: 'Sportcity',
		location: {lat: 52.0636, lng: 4.3188},
		ranking: 4
	}, {
		name: 'The Fitness House',
		location: {lat: 52.0863,lng: 4.3367},
		ranking: 3
	}, {
		name: 'Sports Fit2000',
		location: {lat: 52.0797, lng: 4.2990},
		ranking: 3
	}, {
		name: 'Hercules Power',
		location: {lat: 52.0586, lng: 4.3023},
		ranking: 5
	}, {
		name: 'Forza Fit',
		location: {lat: 52.0416, lng: 4.2797},
		ranking: 4
	}, {
		name: 'CrossFit Ninjas',
		location: {lat: 52.0675, lng: 4.3363},
		ranking: 5
	}
];

// Gym icons
var icons = [
	'images/gymRed.png', 
	'images/gymRed.png',
	'images/gymRed.png',
	'images/gymRed.png',
	'images/gymRed.png',
	'images/gymRed.png',
	'images/gymRed.png'
];
// Logo's van betreffende sportscholen
	// 'images/kneetsgym.png', 
	// 'images/sportcity.png',
	// 'images/thefitnesshouse.png',
	// 'images/sportsfit2000.png',
	// 'images/herculespower.png',
	// 'images/forzafit.png',
	// 'images/crossfitninjas.png'

function initMap() {

	// set options for map 
	var mapOptions = {
		center: {
			lat: 52.067514882683064, 
			lng: -355.6761313835413
		},
		zoom: 13,
		clickableIcons: true,
		styles: styledMapType 
	};

	// Implementatie Google Maps API
	myMap = new google.maps.Map(document.getElementById('map'), mapOptions);

	for(var i=0; i<fitnessCenters.length; i++){
		addFitnessCenter(fitnessCenters[i]);
	}	
}

	function addFitnessCenter(fitnessCenter) {
	new google.maps.Marker({
		position: fitnessCenter.location,
		map: myMap,
		title: fitnessCenter.name + ' ' + fitnessCenter.ranking + '/5',
		icon: icons[fitnessCenter.ranking],
	})
	console.log(fitnessCenter.name + ' added to map');
}






