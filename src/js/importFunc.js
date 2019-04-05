
import {fiveDays} from './maps.js';
import {showMap} from './map.js';

let findButton = document.querySelector('#getCityName');
let mainInput = document.querySelector('.search__input');


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
            showMap(place.x, place.y);
            fiveDays(place.cityName);
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
              showMap(place.x, place.y);
            fiveDays(place.cityName)
        });

}

findButton.addEventListener('click', takeCity);

//Map functionality
