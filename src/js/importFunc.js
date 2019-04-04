
import {fiveDays} from './maps.js'

let findButton = document.querySelector('#getCityName');
let mainInput = document.querySelector('.search__input');
let mapid = document.querySelector('.mapid')

let place = {
    cityName: null,
    countryName: null,
    x: null,
    y: null
}

//request to check weather
var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(xhr.response);
        } else {
            callback(status, xhr.response);

        }
    };
    xhr.send();
}

//Take current location of user
function takeLocationByIp() {
    getJSON("http://ip-api.com/json/",
        function (json) {
            place.cityName = json.city;
            place.countryName = json.country;
            place.x = json.lat;
            place.y =json.lon;
            console.log(place.cityName,place.countryName,place.x,place.y)
            initialize()
            fiveDays(place.cityName)
        })
}

window.onload = takeLocationByIp

//find city functionality
function takeCity(e, callback) {
    let value = mainInput.value

    e.preventDefault();
    if (value == "") {
        alert("Please enter city name")
    } else {
        place.cityName = value;
        shareCityName();
    }
}

function shareCityName() {
    getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + place.cityName + "&units=metric&APPID=e41afbeea9601a8db44ff5ecb4b347d1",
        function (json) {
            place.x = json.coord.lat;
            place.y = json.coord.lon;
            initialize();
            fiveDays(place.cityName)
        });

}

findButton.addEventListener('click', takeCity);

//Map functionality
var map;
var geoJSON;
var request;
var gettingData = false;
var openWeatherMapKey = "f7d78a32bb25ee5de1c6ce5f4954f4ce";

function initialize() {
    mapid.classList.remove('hidden')
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(place.x, place.y),
        styles: [{
                elementType: 'geometry',
                stylers: [{
                    color: '#212121'
                }]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#212121'
                }]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#746855'
                }]
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#263c3f'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#6b9a76'
                }]
            },

            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9ca5b3'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#746855'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#1f2835'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#f3d19c'
                }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{
                    color: '#2f3948'
                }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#17263c'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#515c6d'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#17263c'
                }]
            }
        ]
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    // Add interaction listeners to make weather requests
    google.maps.event.addListener(map, 'idle', checkIfDataRequested);
    // Sets up and populates the info window with details
    map.data.addListener('click', function (event) {
        infowindow.setContent(
            "<img src=" + event.feature.getProperty("icon") + ">" +
            "<br /><strong>" + event.feature.getProperty("city") + "</strong>" +
            "<br />" + event.feature.getProperty("temperature") + "&deg;C" +
            "<br />" + event.feature.getProperty("weather")
        );
        infowindow.setOptions({
            position: {
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            },
            pixelOffset: {
                width: 0,
                height: -15
            }
        });
        infowindow.open(map);
    });
}
var checkIfDataRequested = function () {
    // Stop extra requests being sent
    while (gettingData === true) {
        request.abort();
        gettingData = false;
    }
    getCoords();
};
// Get the coordinates from the Map bounds
var getCoords = function () {
    var bounds = map.getBounds();
    var NE = bounds.getNorthEast();
    var SW = bounds.getSouthWest();
    getWeather(NE.lat(), NE.lng(), SW.lat(), SW.lng());
};
// Make the weather request
var getWeather = function (northLat, eastLng, southLat, westLng) {
    gettingData = true;
    var requestString = "http://api.openweathermap.org/data/2.5/box/city?bbox=" +
        westLng + "," + northLat + "," //left top
        +
        eastLng + "," + southLat + "," //right bottom
        +
        map.getZoom() +
        "&cluster=yes&format=json" +
        "&APPID=" + openWeatherMapKey;
    request = new XMLHttpRequest();
    request.onload = proccessResults;
    request.open("get", requestString, true);
    request.send();
};
// Take the JSON results and proccess them
var proccessResults = function () {
    console.log(this);
    var results = JSON.parse(this.responseText);
    if (results.list.length > 0) {
        resetData();
        for (var i = 0; i < results.list.length; i++) {
            geoJSON.features.push(jsonToGeoJson(results.list[i]));
        }
        drawIcons(geoJSON);
    }
};
var infowindow = new google.maps.InfoWindow();
// For each result that comes back, convert the data to geoJSON
var jsonToGeoJson = function (weatherItem) {
    var feature = {
        type: "Feature",
        properties: {
            city: weatherItem.name,
            weather: weatherItem.weather[0].main,
            temperature: weatherItem.main.temp,
            min: weatherItem.main.temp_min,
            max: weatherItem.main.temp_max,
            humidity: weatherItem.main.humidity,
            pressure: weatherItem.main.pressure,
            windSpeed: weatherItem.wind.speed,
            windDegrees: weatherItem.wind.deg,
            windGust: weatherItem.wind.gust,
            icon: "http://openweathermap.org/img/w/" +
                weatherItem.weather[0].icon + ".png",
            coordinates: [weatherItem.coord.Lon, weatherItem.coord.Lat]
        },
        geometry: {
            type: "Point",
            coordinates: [weatherItem.coord.Lon, weatherItem.coord.Lat]
        }
    };

    map.data.setStyle(function (feature) {
        return {
            icon: {
                url: feature.getProperty('icon'),
                anchor: new google.maps.Point(25, 25)
            }
        };
    });
    // returns object
    return feature;
};
// Add the markers to the map
var drawIcons = function (weather) {
    map.data.addGeoJson(geoJSON);
    // Set the flag to finished
    gettingData = false;
};
// Clear data layer and geoJSON
var resetData = function () {
    geoJSON = {
        type: "FeatureCollection",
        features: []
    };
    map.data.forEach(function (feature) {
        map.data.remove(feature);
    });
};
