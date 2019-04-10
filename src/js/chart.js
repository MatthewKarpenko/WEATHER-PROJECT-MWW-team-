

var app = new Vue({
    el: "#app",
    data: {
        chart: null,
        city: "",
        dates: [],
        temps: [],
        pressures: [],
        humidities: [],
        coords: {},
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

                    this.coords = response.data.city.coord;
                    console.log(this.coords);

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
                                label: "Temperature °C",
                                backgroundColor: "rgba(54, 162, 235, 0.5)",
                                borderColor: "rgb(54, 162, 235)",
                                fill: false,
                                data: this.temps

                            }]
                        },
                        options: {
                            // maintainAspectRatio: true,
                            title: {
                                display: true,
                                text: 'Temperature',
                                fontSize: 24,
                                fontStyle: 600,
                                lineHeight: 1.3,
                                fontColor: "rgb(255,255,255)"
                            },
                            scales: {
                                xAxes: [{
                                    type: "time",
                                    time: {
                                        unit: "hour",
                                        displayFormats: {
                                            hour: "hA MMM Do"
                                        },
                                    },
                                    scaleLabel: {
                                        display: false,
                                        labelString: "Date.Time"
                                    },
                                    ticks: {
                                        fontSize: 16,
                                        fontStyle: 600
                                    }
                                }],
                                yAxes: [{
                                    scaleLabel: {
                                        display: false,
                                        labelString: "Temperature (°C)"
                                    },
                                    ticks: {
                                        fontSize: 16,
                                        fontStyle: 600
                                    }
                                }]
                            },
                            legend: {
                                display: false,
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
                        // maintainAspectRatio: false,
                        type: "line",
                        data: {
                            labels: this.dates,
                            datasets: [{
                                label: "Pressure hPa",
                                backgroundColor: "rgba(54, 162, 235, 0.5)",
                                borderColor: "rgb(54, 162, 235)",
                                fill: false,
                                data: this.pressures
                            }]
                        },
                        options: {
                            title: {
                                display: true,
                                text: 'Pressure',
                                fontSize: 24,
                                fontStyle: 600,
                                lineHeight: 1.3,
                                fontColor: "rgb(255,255,255)"
                            },
                            scales: {
                                xAxes: [{
                                    type: "time",
                                    time: {
                                        unit: "hour",
                                        displayFormats: {
                                            hour: "hA MMM Do"
                                        }
                                    },
                                    scaleLabel: {
                                        display: false,
                                        labelString: "Date.Time"
                                    },
                                    ticks: {
                                        fontSize: 16,
                                        fontStyle: 600
                                    }
                                }],
                                yAxes: [{
                                    scaleLabel: {
                                        display: false,
                                        labelString: "Pressure (hPa)"
                                    },
                                    ticks: {
                                        fontSize: 16,
                                        fontStyle: 600
                                    }
                                }]
                            },
                            legend: {
                                display: false
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
                        // maintainAspectRatio: false,
                        type: "line",
                        data: {
                            labels: this.dates,
                            datasets: [{
                                label: "Humidity %",
                                backgroundColor: "rgba(54, 162, 235, 0.5)",
                                borderColor: "rgb(54, 162, 235)",
                                fill: false,
                                data: this.humidities
                            }]
                        },
                        options: {
                            title: {
                                display: true,
                                text: 'Humidity',
                                fontSize: 24,
                                fontStyle: 600,
                                fontColor: "rgb(255,255,255)",
                                lineHeight: 1.3
                            },
                            scales: {
                                xAxes: [{
                                    type: "time",
                                    time: {
                                        unit: "hour",
                                        displayFormats: {
                                            hour: "hA MMM Do"
                                        }
                                    },
                                    scaleLabel: {
                                        display: false,
                                        labelString: "Date.Time"
                                    },
                                    ticks: {
                                        fontSize: 16,
                                        fontStyle: 600
                                    }
                                }],
                                yAxes: [{
                                    scaleLabel: {
                                        display: false,
                                        labelString: "Humidity (%)"
                                    },
                                    ticks: {
                                        fontSize: 16,
                                        fontStyle: 600
                                    }
                                }]
                            },
                            legend: {
                                display: false
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
                    
                    this.errored = true;
                })
        }
    }
});