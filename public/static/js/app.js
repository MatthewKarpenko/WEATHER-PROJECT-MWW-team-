!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=9)}([function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),l=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),s=null,c=0,d=[],u=n(6);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],t))}else{var l=[];for(a=0;a<r.parts.length;a++)l.push(g(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:l}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}function m(e,t){var n=l(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=l(e.insertAt.before,n);n.insertBefore(t,o)}}function y(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return b(t,e.attrs),m(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=c++;n=s||(s=h(t)),r=T.bind(null,n,a,!1),o=T.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),m(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}.bind(null,n,t),o=function(){y(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){y(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return f(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(l=i[a.id]).refs--,r.push(l)}e&&f(p(e,t),t);for(o=0;o<r.length;o++){var l;if(0===(l=r[o]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete i[l.id]}}}};var v,w=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function T(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){},function(e,t){let n=setInterval(()=>{document.querySelector(".cityName").innerText.length>1&&(r.city=document.querySelector(".cityName").innerText,r.getData(),clearInterval(n))},100);var r=new Vue({el:"#app",data:{chart:null,city:"Poland",dates:[],temps:[],pressures:[],humidities:[],coords:{},loading:!1,errored:!1},methods:{getData:function(){this.loading=!0,null!=this.chart&&this.chart.destroy(),axios.get("https://api.openweathermap.org/data/2.5/forecast",{params:{q:this.city,units:"metric",appid:"1037ede13ab9fda54c38964a0a095a14"}}).then(e=>{this.coords=e.data.city.coord,this.dates=e.data.list.map(e=>e.dt_txt),this.temps=e.data.list.map(e=>e.main.temp),this.pressures=e.data.list.map(e=>e.main.pressure),this.humidities=e.data.list.map(e=>e.main.humidity);var t=document.getElementById("myChartTemp");this.chart=new Chart(t,{type:"line",data:{labels:this.dates,datasets:[{label:"Temperature °C",backgroundColor:"rgba(54, 162, 235, 0.5)",borderColor:"rgb(54, 162, 235)",fill:!1,data:this.temps}]},options:{title:{display:!0,text:"Temperature",fontSize:24,fontStyle:600,lineHeight:1.3,fontColor:"rgb(255,255,255)"},scales:{xAxes:[{type:"time",time:{unit:"hour",displayFormats:{hour:"hA MMM Do"}},scaleLabel:{display:!1,labelString:"Date.Time"},ticks:{fontSize:16,fontStyle:600}}],yAxes:[{scaleLabel:{display:!1,labelString:"Temperature (°C)"},ticks:{fontSize:16,fontStyle:600}}]},legend:{display:!1},ticks:{callback:function(e,t,n){return e+"°C"}}}});var n=document.getElementById("myChartPressure");this.chart=new Chart(n,{type:"line",data:{labels:this.dates,datasets:[{label:"Pressure hPa",backgroundColor:"rgba(54, 162, 235, 0.5)",borderColor:"rgb(54, 162, 235)",fill:!1,data:this.pressures}]},options:{title:{display:!0,text:"Pressure",fontSize:24,fontStyle:600,lineHeight:1.3,fontColor:"rgb(255,255,255)"},scales:{xAxes:[{type:"time",time:{unit:"hour",displayFormats:{hour:"hA MMM Do"}},scaleLabel:{display:!1,labelString:"Date.Time"},ticks:{fontSize:16,fontStyle:600}}],yAxes:[{scaleLabel:{display:!1,labelString:"Pressure (hPa)"},ticks:{fontSize:16,fontStyle:600}}]},legend:{display:!1},ticks:{callback:function(e,t,n){return e+"hPa"}}}});var r=document.getElementById("myChartHumid");this.chart=new Chart(r,{type:"line",data:{labels:this.dates,datasets:[{label:"Humidity %",backgroundColor:"rgba(54, 162, 235, 0.5)",borderColor:"rgb(54, 162, 235)",fill:!1,data:this.humidities}]},options:{title:{display:!0,text:"Humidity",fontSize:24,fontStyle:600,fontColor:"rgb(255,255,255)",lineHeight:1.3},scales:{xAxes:[{type:"time",time:{unit:"hour",displayFormats:{hour:"hA MMM Do"}},scaleLabel:{display:!1,labelString:"Date.Time"},ticks:{fontSize:16,fontStyle:600}}],yAxes:[{scaleLabel:{display:!1,labelString:"Humidity (%)"},ticks:{fontSize:16,fontStyle:600}}]},legend:{display:!1},ticks:{callback:function(e,t,n){return e+"%"}}}})}).catch(e=>{this.errored=!0})}}})},function(e,t){let n={leftBlock:document.querySelector("#leftPhoto"),rightBlock:document.querySelector("#rightPhoto"),blocks:document.getElementsByClassName("wholeBlock"),mainDiv:document.querySelector(".wheatherForFiveDaysBlock")},r=[];n.rightBlock.addEventListener("click",function(){if(r.length<=1){r.unshift(n.blocks[0]),n.blocks[0].remove();for(let e=0;e<n.blocks.length;e++)if(n.blocks[e].classList.contains("hidden")){n.blocks[e].classList.remove("hidden");break}}}),n.leftBlock.addEventListener("click",function(){if(r.length>0){n.mainDiv.insertBefore(r[0],n.blocks[0]),r.shift();for(let e=0;e<n.blocks.length;e++)if(n.blocks[e].classList.contains("hidden")){n.blocks[e-1].classList.add("hidden");break}n.blocks[3].classList.add("hidden")}})},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1),n(2);function r(e,t,n,r,o){let i,a,l=0;var s=function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="json",n.onload=function(){var e=n.status;200===e?t(n.response):t(e,n.response)},n.send()};function c(e,t){if(null!==e.firstElementChild)for(let t=0;t<e.children.length;t++)e.children[t].remove();d(e,t)}function d(e,t){800==t?(a=n.sun.cloneNode(!0),e.appendChild(a)):t>800&&t<805?(a=n.cloud.cloneNode(!0),e.appendChild(a)):t>199&&t<532?(a=n.rainCloud.cloneNode(!0),e.appendChild(a)):t>599&&t<623?(a=n.snow.cloneNode(!0),e.appendChild(a)):t>700&&t<782&&(a=n.cloud.cloneNode(!0),e.appendChild(a))}let u=r.mainTemp.cloneNode(!0);s("https://api.openweathermap.org/data/2.5/forecast?q="+e+"&units=metric&APPID=e41afbeea9601a8db44ff5ecb4b347d1",function(e){i=e.list,function(){for(let e=0;e<n.block.length;e++){e>=1&&(l+=8);let t=new Date(i[l].dt_txt);n.block[e].querySelector(".date").innerHTML=t.toLocaleString("en-US",o).slice(0,19),n.block[e].querySelector(".particularDegree").innerHTML=Math.round(i[l].main.temp)+"&deg;",n.block[e].querySelector(".smallDegree").innerHTML=Math.round(i[l].main.temp)+"&deg;",n.block[e].querySelector(".smallHumidity").innerHTML=i[l].main.humidity+"%",n.block[e].querySelector(".smallPressure").innerHTML=Math.round(i[l].main.pressure)+" in";let r=i[l].weather[0].id;c(n.block[e].querySelector(".fideDays-element"),r)}}()}),s("https://api.openweathermap.org/data/2.5/weather?q="+e+"&units=metric&APPID=e41afbeea9601a8db44ff5ecb4b347d1",function(o){let i=Math.round(o.main.temp)+"&deg;";r.mainTemp=document.querySelector(".degreeNumber"),r.info.firstElementChild.children.length>0&&r.info.firstElementChild.firstElementChild.classList.contains("icon")&&r.info.firstElementChild.firstElementChild.remove(),d(n.insertEl,o.weather[0].id),r.info.firstElementChild.id="mainIcon",r.temper.innerHTML=i,0===t?(r.info.appendChild(u),u.innerHTML=i,u.classList.remove("hidden")):r.mainTemp.innerHTML=i,o.weather[0].description.length>12?(n.hideIfLong.classList.add("hidden"),window.innerWidth<602&&n.hideLine.classList.add("hidden")):n.hideIfLong.classList.remove("hidden"),r.type.innerText=o.weather[0].description,r.humidity.innerText=o.main.humidity+"%",r.pressure.innerText=o.main.pressure+"in",r.humType.firstChild.innerText=o.weather[0].description,r.humType.children[1].innerHTML='<i class="material-icons">invert_colors</i>'+o.main.humidity+"%",r.nameOfTheCity.innerHTML=e.charAt(0).toUpperCase()+e.slice(1),r.humType.firstElementChild.innerHTML=o.weather[0].description})}n(3);function o(e,t){var n,r,o,i=!1;let a=document.querySelector(".mapid");var l=function(){for(;!0===i;)o.abort(),i=!1;s()},s=function(){var e=n.getBounds(),t=e.getNorthEast(),r=e.getSouthWest();c(t.lat(),t.lng(),r.lat(),r.lng())},c=function(e,t,r,a){i=!0;var l="https://api.openweathermap.org/data/2.5/box/city?bbox="+a+","+e+","+t+","+r+","+n.getZoom()+"&cluster=yes&format=json&APPID=f7d78a32bb25ee5de1c6ce5f4954f4ce";(o=new XMLHttpRequest).onload=d,o.open("get",l,!0),o.send()},d=function(){var e=JSON.parse(this.responseText);if(e.list.length>0){m();for(var t=0;t<e.list.length;t++)r.features.push(f(e.list[t]));p(r)}},u=new google.maps.InfoWindow,f=function(e){var t={type:"Feature",properties:{city:e.name,weather:e.weather[0].main,temperature:e.main.temp,min:e.main.temp_min,max:e.main.temp_max,humidity:e.main.humidity,pressure:e.main.pressure,windSpeed:e.wind.speed,windDegrees:e.wind.deg,windGust:e.wind.gust,icon:"https://openweathermap.org/img/w/"+e.weather[0].icon+".png",coordinates:[e.coord.Lon,e.coord.Lat]},geometry:{type:"Point",coordinates:[e.coord.Lon,e.coord.Lat]}};return n.data.setStyle(function(e){return{icon:{url:e.getProperty("icon"),anchor:new google.maps.Point(25,25)}}}),t},p=function(e){n.data.addGeoJson(r),i=!1},m=function(){r={type:"FeatureCollection",features:[]},n.data.forEach(function(e){n.data.remove(e)})};!function(){a.classList.remove("hidden");var r={zoom:10,center:new google.maps.LatLng(e,t),styles:[{elementType:"geometry",stylers:[{color:"#212121"}]},{elementType:"labels.text.stroke",stylers:[{color:"#212121"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}]};n=new google.maps.Map(document.getElementById("map-canvas"),r),google.maps.event.addListener(n,"idle",l),n.data.addListener("click",function(e){u.setContent("<img src="+e.feature.getProperty("icon")+"><br /><strong>"+e.feature.getProperty("city")+"</strong><br />"+e.feature.getProperty("temperature")+"&deg;C<br />"+e.feature.getProperty("weather")),u.setOptions({position:{lat:e.latLng.lat(),lng:e.latLng.lng()},pixelOffset:{width:0,height:-15}}),u.open(n)})}()}let i={block:document.querySelectorAll(".wholeBlock"),cloud:document.querySelector("#simpleCloud"),rainCloud:document.querySelector("#rainCloud"),thunder:document.querySelector("#thunderCloud"),sun:document.querySelector("#sun"),drizzle:document.querySelector("#drizzleCloud"),snow:document.querySelector("#snow"),wind:document.querySelector("#wind"),insertEl:document.querySelector(".forIconInsertion"),hideIfLong:document.querySelector("#hideIfLong"),hideLine:document.querySelector("#hideLines"),notFound:document.querySelector(".cityNotFound")},a={mainTemp:document.querySelector(".degreeNumber"),type:document.querySelector("#main"),temper:document.querySelector("#temperature"),humidity:document.querySelector("#humidity"),humType:document.querySelector(".wheatherType"),pressure:document.querySelector("#pressure"),info:document.querySelector(".mainInfo"),nameOfTheCity:document.querySelector(".cityName")},l={era:"long",year:"numeric",month:"long",day:"numeric",weekday:"short",timezone:"UTC",hour:"numeric",minute:"numeric",second:"numeric"},s=document.querySelector("#getCityName"),c=document.querySelector(".search__input"),d=0,u={cityName:null,countryName:null,x:null,y:null};var f=function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="json",n.onload=function(){var e;if(200!==n.status)return(e=i.notFound).style.display="block",setTimeout(()=>{e.style.display="none"},2e3),!1;t(n.response)},n.send()};window.onload=function(){f("https://api.ipdata.co/?api-key=905a23d9c0ba4910406a83a900e6b1033436fa1a707de2915a5fe2a7",function(e){u.cityName=e.city,u.countryName=e.country_name,u.x=e.latitude,u.y=e.longitude,""==u.cityName?r(u.countryName,d,i,a,l):r(u.cityName,d,i,a,l),o(u.x,u.y),d++})},s.addEventListener("click",function(e,t){let n=c.value;console.log("dlfj"),""==n?alert("Please enter city name"):(u.cityName=n,f("https://api.openweathermap.org/data/2.5/weather?q="+u.cityName+"&units=metric&APPID=e41afbeea9601a8db44ff5ecb4b347d1",function(e){u.x=e.coord.lat,console.log("gal"),u.y=e.coord.lon,o(u.x,u.y),r(u.cityName,void 0,i,a,l)}))});n(4),n(7)}]);