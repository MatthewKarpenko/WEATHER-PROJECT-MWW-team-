
import {fiveDays} from './maps.js';
import {showMap} from './map.js';

function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  document.querySelector('#find-me').addEventListener('click', geoFindMe);

  var geocoder =  new google.maps.Geocoder();;
  var map;
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    console.log(latlng)
    var mapOptions = {
      zoom: 8,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map2'), mapOptions);
  }

  function codeAddress() {
    var address = document.getElementById('address').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
 document.getElementById('mapButton').addEventListener('click', codeAddress)
  window.onload = initialize

let findButton = document.querySelector('#getCityName');
let mainInput = document.querySelector('.search__input');
let check = 0

let place = {
    cityName: null,
    countryName: null,
    x: null,
    y: null
}

//request to check weather
var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(xhr.response);
        } else {
             //tuzrób
            return false
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
            showMap(place.x, place.y);
            fiveDays(place.cityName,check);
            check ++;
        })
}

window.onload = takeLocationByIp

//find city functionality
function takeCity(e, callback) {
    let value = mainInput.value

    // e.preventDefault();
    if (value == "") {
        //tuzrób zamiast alert
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
              showMap(place.x, place.y);
            fiveDays(place.cityName)
        });

}

findButton.addEventListener('click', takeCity);

//Map functionality
