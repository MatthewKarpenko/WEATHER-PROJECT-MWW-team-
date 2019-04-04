//let text = document.querySelector('.showJSON');
//let button = document.querySelector('button');
let wheatherRequest;
let temp;
let time = 0;
let cloneDiv

let elements = {
    block: document.querySelectorAll('.wholeBlock'),
    cloud: document.querySelector('#simpleCloud'),
    rainCloud: document.querySelector('#rainCloud'),
    thunder: document.querySelector('#thunderCloud'),
    sun: document.querySelector('#sun'),
    drizzle: document.querySelector('#drizzleCloud'),
    snow: document.querySelector('#snow'),
    wind: document.querySelector('#wind')
};

let mainElements = {
    mainTemp: document.querySelector('.degreeNumber'),
    type: document.querySelector('#main'),
    temper: document.querySelector('#temperature'),
    humidity: document.querySelector('#humidity'),
    humType: document.querySelector('.wheatherType'),
    pressure: document.querySelector('#pressure'),
    info: document.querySelector('.mainInfo')
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


function gettingJSONforFiveDays() {
    getJSON("http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&APPID=e41afbeea9601a8db44ff5ecb4b347d1", function (json) {
        
        wheatherRequest = json.list;
        
        setFiveDaysWheather()
        // checking()
    });
}

window.onload = gettingJSONforFiveDays;

function setFiveDaysWheather() {
    for (let i = 0; i < elements.block.length; i++) {
        if (i >= 1) {
            time += 8;
        }

        let date = new Date(wheatherRequest[time].dt_txt)

        elements.block[i].querySelector('.date').innerHTML = date.toLocaleString('en-US', options).slice(0, 19);
        elements.block[i].querySelector('.particularDegree').innerHTML = Math.round(wheatherRequest[time].main.temp) + '&deg;';
        elements.block[i].querySelector('.smallDegree').innerHTML = Math.round(wheatherRequest[time].main.temp) + '&deg;';
        elements.block[i].querySelector('.smallHumidity').innerHTML = wheatherRequest[time].main.humidity + '%';
        elements.block[i].querySelector('.smallPressure').innerHTML = Math.round(wheatherRequest[time].main.pressure) + ' in';
        let weatherDescription = wheatherRequest[time].weather[0].description;
        setIcon(elements.block[i].querySelector('.fideDays-element'), weatherDescription)
    }
}

function setIcon(node, description) {

    if (description == 'clear sky') {
        cloneDiv = elements.sun.cloneNode(true)
        node.appendChild(cloneDiv)
    } else if (description == 'few clouds') {
        cloneDiv = elements.cloud.cloneNode(true)
        node.appendChild(cloneDiv)
    } else if (description == 'light rain') {
        cloneDiv = elements.rainCloud.cloneNode(true)
        node.appendChild(cloneDiv)
    }

}

/*function checking() {
    for (let i = 0; i < 40; i++) {
        console.log(wheatherRequest[i].weather[0].description)
    }
}*/

let mainTempClone = mainElements.mainTemp.cloneNode(true);
function currentWeather() {
    getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=e41afbeea9601a8db44ff5ecb4b347d1", function (json) {
        setIcon(mainElements.info, json.weather[0].description);
        
        mainElements.info.firstElementChild.id = 'mainIcon'
        mainTempClone.innerHTML = Math.round(json.main.temp) + '&deg;';
        mainTempClone.classList.remove('hidden')
        mainElements.info.appendChild(mainTempClone);
        mainElements.temper.innerHTML = Math.round(json.main.temp) + '&deg;';
        mainElements.type.innerText = json.weather[0].description;
        mainElements.humidity.innerText = json.main.humidity + '%';
        mainElements.pressure.innerText = json.main.pressure + ' in';
        mainElements.humType.firstChild.innerText = json.weather[0].description;
        mainElements.humType.children[1].innerHTML = '<i class="material-icons">invert_colors</i>' + json.main.humidity + '%';
    
        
    });
}
currentWeather();