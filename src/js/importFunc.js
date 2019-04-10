
import {fiveDays} from './maps.js';
import {showMap} from './map.js';

let elements = {
    block: document.querySelectorAll('.wholeBlock'),
    cloud: document.querySelector('#simpleCloud'),
    rainCloud: document.querySelector('#rainCloud'),
    thunder: document.querySelector('#thunderCloud'),
    sun: document.querySelector('#sun'),
    drizzle: document.querySelector('#drizzleCloud'),
    snow: document.querySelector('#snow'),
    wind: document.querySelector('#wind'),
    insertEl: document.querySelector('.forIconInsertion'),
    hideIfLong: document.querySelector('#hideIfLong'),
    notFound: document.querySelector('.cityNotFound')
};


let mainElements = {
    mainTemp: document.querySelector('.degreeNumber'),
    type: document.querySelector('#main'),
    temper: document.querySelector('#temperature'),
    humidity: document.querySelector('#humidity'),
    humType: document.querySelector('.wheatherType'),
    pressure: document.querySelector('#pressure'),
    info: document.querySelector('.mainInfo'),
    nameOfTheCity: document.querySelector('.cityName')
}

let options = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};


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
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(xhr.response);
        } else {
            displayError(elements.notFound)
            return false
        }
    };
    xhr.send();
}

//Take current location of user
function takeLocationByIp() {
    getJSON("https://api.ipdata.co/?api-key=905a23d9c0ba4910406a83a900e6b1033436fa1a707de2915a5fe2a7",
        function (json) {
          
            place.cityName = json.city;
            place.countryName = json.country_name;
            place.x = json.latitude;
            place.y =json.longitude;
        
            if (place.cityName == '') {
                 fiveDays(place.countryName, check, elements, mainElements, options);
                 
            }else {
                fiveDays(place.cityName, check, elements, mainElements, options);
                
            }
            
            showMap(place.x, place.y);
           
            check ++;
        })
}

window.onload = takeLocationByIp

//find city functionality
function takeCity(e, callback) {
    let value = mainInput.value
    console.log('dlfj')
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
    getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + place.cityName + "&units=metric&APPID=e41afbeea9601a8db44ff5ecb4b347d1",
        function (json) {
            place.x = json.coord.lat;
            console.log("gal")
            place.y = json.coord.lon;
              showMap(place.x, place.y);
            fiveDays(place.cityName,undefined, elements, mainElements, options)
             
        });

}

function displayError(element) {
    element.style.display = 'block';
    setTimeout(() => {
        element.style.display = 'none'
    },2000)
}

findButton.addEventListener('click', takeCity);
