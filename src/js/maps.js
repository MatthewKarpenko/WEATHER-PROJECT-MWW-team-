//let text = document.querySelector('.showJSON');
//let button = document.querySelector('button');
export function fiveDays(place,checking,elements,mainElements,options) {
let wheatherRequest;
let temp;
let time = 0;
let cloneDiv;


//object z ikonami


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


function gettingJSONforFiveDays() {
    getJSON("https://api.openweathermap.org/data/2.5/forecast?q=" + place + "&units=metric&APPID=e41afbeea9601a8db44ff5ecb4b347d1", function (json) {
        
        wheatherRequest = json.list;
      
        setFiveDaysWheather();
    });
}



function setFiveDaysWheather() {
    for (let i = 0; i < elements.block.length; i++) {
        if (i >= 1) {
            time += 8;
        }

        let date = new Date(wheatherRequest[time].dt_txt);
        
        elements.block[i].querySelector('.date').innerHTML = date.toLocaleString('en-US', options).slice(0, 19);
        elements.block[i].querySelector('.particularDegree').innerHTML = Math.round(wheatherRequest[time].main.temp) + '&deg;';
        elements.block[i].querySelector('.smallDegree').innerHTML = Math.round(wheatherRequest[time].main.temp) + '&deg;';
        elements.block[i].querySelector('.smallHumidity').innerHTML = wheatherRequest[time].main.humidity + '%';
        elements.block[i].querySelector('.smallPressure').innerHTML = Math.round(wheatherRequest[time].main.pressure) + ' in';
        let weatherDescription = wheatherRequest[time].weather[0].id;
        setIcon(elements.block[i].querySelector('.fideDays-element'), weatherDescription)
    }
}
// w tej funkcji działasz
function setIcon(node, description) {
    if (node.firstElementChild !== null) {
         for (let i = 0; i < node.children.length; i++){
            node.children[i].remove()
         }
    }
  chooseDiv(node,description)

}

function chooseDiv(place,id) {
    if (id == 800) {
        cloneDiv = elements.sun.cloneNode(true)
        place.appendChild(cloneDiv)
    } else if (id > 800 && id < 805) {
        cloneDiv = elements.cloud.cloneNode(true)
        place.appendChild(cloneDiv)
    } else if (id > 199 && id < 532) {
        cloneDiv = elements.rainCloud.cloneNode(true)
        place.appendChild(cloneDiv)
    } else if (id > 599 && id < 623) {
        cloneDiv = elements.snow.cloneNode(true)
        place.appendChild(cloneDiv)
    } else if (id > 700 && id < 782) {
        cloneDiv = elements.cloud.cloneNode(true)
        place.appendChild(cloneDiv)
    }
}

/*function checking() {
    for (let i = 0; i < 40; i++) {
        console.log(wheatherRequest[i].weather[0].description)
    }
}*/

let mainTempClone = mainElements.mainTemp.cloneNode(true);
function currentWeather() {

    getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=metric&APPID=e41afbeea9601a8db44ff5ecb4b347d1", function (json) {
        let jsonTemp = Math.round(json.main.temp) + '&deg;';
        mainElements.mainTemp = document.querySelector('.degreeNumber')
        if(mainElements.info.firstElementChild.children.length > 0){
        if (mainElements.info.firstElementChild.firstElementChild.classList.contains('icon')) {
            mainElements.info.firstElementChild.firstElementChild.remove()
        }
    }
        chooseDiv(elements.insertEl, json.weather[0].id)
        mainElements.info.firstElementChild.id = 'mainIcon';
        
        mainElements.temper.innerHTML = jsonTemp;
       
        if(checking === 0) {
            mainElements.info.appendChild(mainTempClone);
            mainTempClone.innerHTML = jsonTemp;
            mainTempClone.classList.remove('hidden')
        }else {
            
            mainElements.mainTemp.innerHTML = jsonTemp
        }
        if (json.weather[0].description.length > 12) {
            elements.hideIfLong.classList.add('hidden')
        }
        console.log(json.weather[0].description.length)
        mainElements.type.innerText = json.weather[0].description;
        mainElements.humidity.innerText = json.main.humidity + '%';
        mainElements.pressure.innerText = json.main.pressure + ' in';
        mainElements.humType.firstChild.innerText = json.weather[0].description;
        mainElements.humType.children[1].innerHTML = '<i class="material-icons">invert_colors</i>' + json.main.humidity + '%';
        mainElements.nameOfTheCity.innerHTML = place.charAt(0).toUpperCase() + place.slice(1);
        mainElements.humType.firstElementChild.innerHTML = json.weather[0].description;
    
    
    });
}
gettingJSONforFiveDays();
currentWeather();
}

