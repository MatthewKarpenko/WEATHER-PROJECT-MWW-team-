/*import Chart from 'chart.js';
let cityName; 
let x;
let y;
var app = new Vue({
    el: "#app",
    data: {
        chart: null,
        city: "",
        dates: [],
        temps: [],
        pressures: [],
        humidities: [],
        coords: [],
        loading: false,
        errored: false,

    },
    methods: {
        getData: function () {
            this.loading = true;

            if (this.chart != null) {
                this.chart.destroy();
            }

            axios
                .get("https://api.openweathermap.org/data/2.5/forecast", {
                    params: {
                        q: this.city,
                        units: "metric",
                        appid: "1037ede13ab9fda54c38964a0a095a14"
                    }
                })
                .then(response => {

                    // this.coords = response.data.city.push(city => {
                    //     return city.coord.lat;
                    // });


                    this.dates = response.data.list.map(list => {
                        return list.dt_txt;
                    });

                    this.temps = response.data.list.map(list => {
                        return list.main.temp;
                    });

                    this.pressures = response.data.list.map(list => {
                        return list.main.pressure;
                    });

                    this.humidities = response.data.list.map(list => {
                        return list.main.humidity;
                    });

                    var ctx1 = document.getElementById("myChartTemp");
                    this.chart = new Chart(ctx1, {
                        type: "line",
                        data: {
                            labels: this.dates,
                            datasets: [{
                                label: "Avg. Temperature °C",
                                backgroundColor: "rgba(54, 162, 235, 0.5)",
                                borderColor: "rgb(54, 162, 235)",
                                fill: false,
                                data: this.temps
                            }]
                        },
                        options: {
                            scales: {
                                xAxes: [{
                                    type: "time",
                                    time: {
                                        unit: "hour",
                                        displayFormats: {
                                            hour: "DD.MM h:mm"
                                        },
                                        tooltipFormat: "MMM. DD h:mm"
                                    },
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Date.Time"
                                    }
                                }],
                                yAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Temperature (°C)"
                                    }
                                }]
                            },
                            ticks: {
                                callback: function (value, index, values) {
                                    return value + "°C";
                                }
                            }
                        }
                    });

                    var ctx2 = document.getElementById("myChartPressure");
                    this.chart = new Chart(ctx2, {
                        type: "line",
                        data: {
                            labels: this.dates,
                            datasets: [{
                                label: "Avg. Pressure hPa",
                                backgroundColor: "rgba(54, 162, 235, 0.5)",
                                borderColor: "rgb(54, 162, 235)",
                                fill: false,
                                data: this.pressures
                            }]
                        },
                        options: {
                            scales: {
                                xAxes: [{
                                    type: "time",
                                    time: {
                                        unit: "hour",
                                        displayFormats: {
                                            hour: "DD.MM h:mm"
                                        },
                                        tooltipFormat: "MMM. DD h:mm"
                                    },
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Date.Time"
                                    }
                                }],
                                yAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Pressure (hPa)"
                                    }
                                }]
                            },
                            ticks: {
                                callback: function (value, index, values) {
                                    return value + "hPa";
                                }
                            }
                        }
                    });

                    var ctx3 = document.getElementById("myChartHumid");
                    this.chart = new Chart(ctx3, {
                        type: "line",
                        data: {
                            labels: this.dates,
                            datasets: [{
                                label: "Avg. Humidity %",
                                backgroundColor: "rgba(54, 162, 235, 0.5)",
                                borderColor: "rgb(54, 162, 235)",
                                fill: false,
                                data: this.humidities
                            }]
                        },
                        options: {
                            scales: {
                                xAxes: [{
                                    type: "time",
                                    time: {
                                        unit: "hour",
                                        displayFormats: {
                                            hour: "DD.MM h:mm"
                                        },
                                        tooltipFormat: "MMM. DD h:mm"
                                    },
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Date.Time"
                                    }
                                }],
                                yAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Humidity (%)"
                                    }
                                }]
                            },
                            ticks: {
                                callback: function (value, index, values) {
                                    return value + "%";
                                }
                            }
                        }
                    });



                })
                .catch(error => {
                    console.log(error);
                    this.errored = true;
                })
        }
    }
});


    */