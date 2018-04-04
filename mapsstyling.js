        // Create a new StyledMapType object, passing it an array of styles,
        // and the name to be displayed on the map type control.
        var styledMapType =
            [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "44"
            },
            {
                "lightness": 20
            },
            {
                "weight": "0.01"
            },
            {
                "color": "#ffffff"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#00bdff"
            },
            {
                "saturation": 59
            },
            {
                "lightness": "-40"
            },
            {
                "weight": "1"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "weight": "1"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text",
        "stylers": [
            {
                "weight": "1"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#00bdff"
            },
            {
                "saturation": 44
            },
            {
                "lightness": "0"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "65"
            },
            {
                "lightness": "-30"
            },
            {
                "hue": "#00bdff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": "63"
            },
            {
                "weight": "0.01"
            },
            {
                "gamma": "5.51"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "100"
            },
            {
                "lightness": "-38"
            },
            {
                "visibility": "on"
            },
            {
                "weight": "1"
            },
            {
                "gamma": "0.80"
            },
            {
                "hue": "#00bbff"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "gamma": "10.00"
            },
            {
                "weight": "0.01"
            },
            {
                "lightness": "72"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#00baff"
            },
            {
                "saturation": -41
            },
            {
                "lightness": "-81"
            },
            {
                "visibility": "simplified"
            },
            {
                "gamma": "3.25"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "gamma": "3.52"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": "80"
            },
            {
                "lightness": "-35"
            },
            {
                "weight": "0"
            },
            {
                "gamma": "1"
            },
            {
                "hue": "#00bdff"
            },
            {
                "invert_lightness": true
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#00bdff"
            },
            {
                "saturation": "0"
            },
            {
                "lightness": "-40"
            },
            {
                "visibility": "on"
            },
            {
                "gamma": "1.50"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "weight": "0.01"
            },
            {
                "lightness": "0"
            },
            {
                "hue": "#00a7ff"
            },
            {
                "saturation": "100"
            },
            {
                "gamma": "7.25"
            }
        ]
    }
]