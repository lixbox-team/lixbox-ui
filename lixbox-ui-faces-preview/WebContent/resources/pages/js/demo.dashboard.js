! function(r) {
    "use strict";
    var e = function() {
        this.$body = r("body"), this.charts = []
    };
    e.prototype.respChart = function(e, a, t, o) {
        var n = Chart.controllers.line.prototype.draw;
        Chart.controllers.line.prototype.draw = function() {
            n.apply(this, arguments);
            var r = this.chart.chart.ctx,
                e = r.stroke;
            r.stroke = function() {
                r.save(), r.shadowColor = "rgba(0,0,0,0.01)", r.shadowBlur = 20, r.shadowOffsetX = 0, r.shadowOffsetY = 5, e.apply(this, arguments), r.restore()
            }
        };
        var s = Chart.controllers.doughnut.prototype.draw;
        Chart.controllers.doughnut = Chart.controllers.doughnut.extend({
            draw: function() {
                s.apply(this, arguments);
                var r = this.chart.chart.ctx,
                    e = r.fill;
                r.fill = function() {
                    r.save(), r.shadowColor = "rgba(0,0,0,0.03)", r.shadowBlur = 4, r.shadowOffsetX = 0, r.shadowOffsetY = 3, e.apply(this, arguments), r.restore()
                }
            }
        });
        var i = Chart.controllers.bar.prototype.draw;
        Chart.controllers.bar = Chart.controllers.bar.extend({
            draw: function() {
                i.apply(this, arguments);
                var r = this.chart.chart.ctx,
                    e = r.fill;
                r.fill = function() {
                    r.save(), r.shadowColor = "rgba(0,0,0,0.01)", r.shadowBlur = 20, r.shadowOffsetX = 4, r.shadowOffsetY = 5, e.apply(this, arguments), r.restore()
                }
            }
        });
        var l = e.get(0).getContext("2d"),
            c = r(e).parent();
        return function() {
            var n;
            switch (e.attr("width", r(c).width()), a) {
                case "Line":
                    n = new Chart(l, {
                        type: "line",
                        data: t,
                        options: o
                    });
                    break;
                case "Doughnut":
                    n = new Chart(l, {
                        type: "doughnut",
                        data: t,
                        options: o
                    });
                    break;
                case "Pie":
                    n = new Chart(l, {
                        type: "pie",
                        data: t,
                        options: o
                    });
                    break;
                case "Bar":
                    n = new Chart(l, {
                        type: "bar",
                        data: t,
                        options: o
                    });
                    break;
                case "Radar":
                    n = new Chart(l, {
                        type: "radar",
                        data: t,
                        options: o
                    });
                    break;
                case "PolarArea":
                    n = new Chart(l, {
                        data: t,
                        type: "polarArea",
                        options: o
                    })
            }
            return n
        }()
    }, e.prototype.initCharts = function() {
        var e = [];
        if (r("#revenue-chart").length > 0) {
            e.push(this.respChart(r("#revenue-chart"), "Line", {
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [{
                    label: "Current Week",
                    backgroundColor: "transparent",
                    borderColor: "#727cf5",
                    data: [32, 42, 42, 62, 52, 75, 62]
                }, {
                    label: "Previous Week",
                    fill: !0,
                    backgroundColor: "transparent",
                    borderColor: "#0acf97",
                    data: [42, 58, 66, 93, 82, 105, 92]
                }]
            }, {
                maintainAspectRatio: !1,
                legend: {
                    display: !1
                },
                tooltips: {
                    intersect: !1
                },
                hover: {
                    intersect: !0
                },
                plugins: {
                    filler: {
                        propagate: !1
                    }
                },
                scales: {
                    xAxes: [{
                        reverse: !0,
                        gridLines: {
                            color: "rgba(0,0,0,0.05)"
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            stepSize: 20
                        },
                        display: !0,
                        borderDash: [5, 5],
                        gridLines: {
                            color: "rgba(0,0,0,0)",
                            fontColor: "#fff"
                        }
                    }]
                }
            }))
        }
        if (r("#high-performing-product").length > 0) {
            var a = document.getElementById("high-performing-product").getContext("2d").createLinearGradient(0, 500, 0, 150);
            a.addColorStop(0, "#fa5c7c"), a.addColorStop(1, "#727cf5");
            var t = {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: "Sales Analytics",
                    backgroundColor: a,
                    borderColor: a,
                    hoverBackgroundColor: a,
                    hoverBorderColor: a,
                    data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81]
                }, {
                    label: "Dollar Rate",
                    backgroundColor: "#e3eaef",
                    borderColor: "#e3eaef",
                    hoverBackgroundColor: "#e3eaef",
                    hoverBorderColor: "#e3eaef",
                    data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59]
                }]
            };
            e.push(this.respChart(r("#high-performing-product"), "Bar", t, {
                maintainAspectRatio: !1,
                legend: {
                    display: !1
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: !1
                        },
                        stacked: !1,
                        ticks: {
                            stepSize: 20
                        }
                    }],
                    xAxes: [{
                        barPercentage: .7,
                        categoryPercentage: .5,
                        stacked: !1,
                        gridLines: {
                            color: "rgba(0,0,0,0.01)"
                        }
                    }]
                }
            }))
        }
        if (r("#average-sales").length > 0) {
            e.push(this.respChart(r("#average-sales"), "Doughnut", {
                labels: ["Direct", "Affilliate", "Sponsored", "E-mail"],
                datasets: [{
                    data: [300, 135, 48, 154],
                    backgroundColor: ["#727cf5", "#fa5c7c", "#0acf97", "#ebeff2"],
                    borderColor: "transparent",
                    borderWidth: "3"
                }]
            }, {
                maintainAspectRatio: !1,
                cutoutPercentage: 60,
                legend: {
                    display: !1
                }
            }))
        }
        return e
    }, e.prototype.initMaps = function() {
        r("#world-map-markers").length > 0 && r("#world-map-markers").vectorMap({
            map: "world_mill_en",
            normalizeFunction: "polynomial",
            hoverOpacity: .7,
            hoverColor: !1,
            regionStyle: {
                initial: {
                    fill: "#e3eaef"
                }
            },
            markerStyle: {
                initial: {
                    r: 9,
                    fill: "#727cf5",
                    "fill-opacity": .9,
                    stroke: "#fff",
                    "stroke-width": 7,
                    "stroke-opacity": .4
                },
                hover: {
                    stroke: "#fff",
                    "fill-opacity": 1,
                    "stroke-width": 1.5
                }
            },
            backgroundColor: "transparent",
            markers: [{
                latLng: [40.71, -74],
                name: "New York"
            }, {
                latLng: [37.77, -122.41],
                name: "San Francisco"
            }, {
                latLng: [-33.86, 151.2],
                name: "Sydney"
            }, {
                latLng: [1.3, 103.8],
                name: "Singapore"
            }],
            zoomOnScroll: !1
        })
    }, e.prototype.init = function() {
        var e = this;
        Chart.defaults.global.defaultFontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif', r("#dash-daterange").daterangepicker({
            singleDatePicker: !0
        }), e.charts = this.initCharts(), this.initMaps(), r(window).on("resize", function(a) {
            r.each(e.charts, function(r, e) {
                try {
                    e.destroy()
                } catch (r) {}
            }), e.charts = e.initCharts()
        })
    }, r.Dashboard = new e, r.Dashboard.Constructor = e
}(window.jQuery),
function(r) {
    "use strict";
    r.Dashboard.init()
}(window.jQuery);


//window.addEventListener("load", 
//	function(){
//		if ($("#testART").length > 0) 
//		{
//			alert('renderchart');
//			renderChart($("#testART"), "Doughnut",
//					{
//						labels : [ "pipo", "papi", "pipu", "pupy" ],
//						datasets : [ {
//							data : [ 305, 115, 80, 114 ],
//							backgroundColor : [ "#727cf5", "#fa5c7c", "#0acf97",
//									"#ebeff2" ],
//							borderColor : "transparent",
//							borderWidth : "3"
//						} ]
//					}, 
//					{
//						maintainAspectRatio : !1,
//						cutoutPercentage : 60,
//						legend : { display : !1 }
//					})
//		}
//	}
//);