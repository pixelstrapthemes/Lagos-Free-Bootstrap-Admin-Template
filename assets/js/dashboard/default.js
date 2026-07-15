(function () {
    // monthly overview
    var options = {
        series: [{
        name: 'Cash Flow',
        data: [-66, 50, 150, 66, 50, 150, -79, -50, -136, -54, -40, -140, 79, 49, -150, -70,
        50, 140, 60, 44, 130, -80, -40,]

    }],
        chart: {
        type: 'bar',
        height: 250,
        offsetX: 0,
        offsetY: 0,
        toolbar: {
        show: false,
        },
    },
    plotOptions: {
        bar: {
        colors: {
            ranges: [
            {
                from: -150,
                to: -81,
                color: LagosAdminConfig.primary,
            }, 
            {
                from: -80,
                to: -51,
                color: LagosAdminConfig.secondary,
            },
            {
                from: -50,
                to: 0,
                color: "#1669A3",
            },
            {
                from: 0,
                to: 50,
                color: "#1669A3", 
            },
            {
                from: 51,
                to: 80,
                color: LagosAdminConfig.secondary,
            },
            {
                from: 81,
                to: 150,
                color: LagosAdminConfig.primary,
            }
            ]
        },
        columnWidth: '70%',
        borderRadius: 2
        }
    },
    
    colors: [
        LagosAdminConfig.primary
    ],
    dataLabels: {
        enabled: false,
    },
    yaxis: {
        title: {
        show: false,
        },
        labels: {
        formatter: function (y) {
            return y.toFixed(0) + "%";
        }
        }
    },
    
    grid: {
        show: true,
        strokeDashArray: 3,
        borderColor: "rgba(106, 113, 133, 0.30)",
    },
    xaxis: {
        categories: [
            'Jan', '', 'Feb', '', 'Mar', '',
            'Apr', '', 'May', '',
            'Jun', '', 'Jul', '', 'Aug',
            '', 'Sep', '', 'Oct', '', 'Nov',
            '', 'Dec',
          ],
        labels: {
        rotate: -90,
        style: {
          colors: "#9B9B9B",
        },
        
        },
        axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
        },
        axisTicks: {
        show: false,
    },
    },
    responsive: [
        {
        breakpoint: 1600,
        options: {
          xaxis: {
            categories: [
                'Jan', '', 'Feb', '', 'Mar', '',
                'Apr', '', 'May', '',
                'Jun', '', 'Jul', '', 'Aug',
                '', 'Sep',
              ],
          },
          series: [{
            data: [-66, 50, 150, 66, 50, 150, -79, -50, -136, -54, -40, -140, 79, 49, -30, 50, 30]
          }],
        },
        },
        {
        breakpoint: 380,
        options: {
            yaxis: {
            labels: {
                show: false,  // Hide y-axis labels for this breakpoint
            },
            },
        },
        },
    ],
    };
  var chart = new ApexCharts(document.querySelector("#monthly-overview"), options);
  chart.render();

  // beyo line start
var options = {
    series: [
      {
        name: "Net Profit",
        data: [30, 70, 40, 50, 70, 50, 90, 80],
      },
      {
        name: "Free Cash Flow",
        data: [40, 60, 35, 90, 60, 60, 60, 50],
      },
    ],
    chart: {
      type: "bar",
      height: 280,
      offsetY: 5,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 6,
        columnWidth: "40px",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
  
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    tooltip: {
      marker: {
        show: false,
      },
      fixed: {
        enabled: false,
        position: "bottomRight",
        offsetX: 0,
        offsetY: 0,
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      show: false,
    },
    colors: [LagosAdminConfig.secondary, LagosAdminConfig.primary],
  };
  var chart = new ApexCharts(document.querySelector("#beyo-line"), options);
  chart.render();

  // study statistics
  const Option = {
    series: [
        // {
        //     name: 'series1',
        //     data: [4.6, 3.6, 2, 3, 4, 2.4, 2.8, 4.3, 2, 1.6, 3.2, 4],
        // },
        // {
        //     name: 'series2',
        //     data: [1.5, 2, 3.8, 3.5, 2.2, 3.5, 4, 3, 1.5, 3.8, 2, 3.5],
        // },
        {
          name: 'series1',
          data: [2.8, 3.2, 1.9, 4.5, 2.1, 3.7, 3, 3, 4.2, 1.8, 3.9, 2.6],
        },
        {
          name: 'series2',
          data: [1.2, 2, 2.7, 3, 2.5, 3, 1.6, 3.9, 2.5, 2.2, 2.4, 3.2],
        },
    ],
    chart: {
        height: 320,
        type: 'area',
        offsetY: 12,
        offsetX: -10,
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    colors: [LagosAdminConfig.primary, LagosAdminConfig.secondary],

    stroke: {
        curve: 'smooth',
        width: 2,
    },
    grid: {
        show: true,
        strokeDashArray: 5,
        position: 'back',
        xaxis: {
            lines: {
                show: false
            }
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [5, 100, 100, 100]
        },
    },
    annotations: {
        xaxis: [{
            x: 312,
            strokeDashArray: 5,
            borderWidth: 3,
            borderColor: LagosAdminConfig.primary,
        },
        ],
        points: [{
            x: 312,
            y: 4.5,
            marker: {
                size: 8,
                fillColor: LagosAdminConfig.primary,
                strokeColor: "#ffffff",
                strokeWidth: 4,
                radius: 5,
            },
            label: {
                borderWidth: 1,
                offsetY: 0,
                text: '5h a day on average',
                style: {
                    fontSize: '14px',
                    fontWeight: '600',
                    fontFamily: "'Jost', sans-serif",
                }
            }
        }],
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                colors: '#3D434A',
            },

            formatter: (value) => {
                return `${value}h`;
            },
        },
    },
    xaxis: {
        type: 'category',
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        tickAmount: 12,
        labels: {
            minHeight: undefined,
            maxHeight: 28,
            offsetY: 0,
            style: {
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                colors: '#8D8D8D',
            },
            tooltip: {
                enabled: false,
            },
        },
        axisBorder: {
            show: false
        },
    },
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return `<div class="apex-tooltip"> 
                  <span>
                       <span class="bg-secondary"> </span>
                        Selling : ${series[0][dataPointIndex]} K
                  </span> 
                  <span class="mt-2">
                       <span class="bg-primary"> </span>
                        Selling : ${series[1][dataPointIndex]} K
                  </span> 
                </div>`;
        },
    },
    legend: {
        show: false,
    },
    responsive: [
      {
        breakpoint: 1661,
        options: {
          chart: {
            height: 290,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 220,
          },
        },
      },
    ],
};
const ChartEl = new ApexCharts(document.querySelector('#study-statistics'), Option);
ChartEl.render();

// sell view chart start
var options = {
  series: [
    {
      name: "Selling",
      data: [50, 70, 50, 65, 50, 45, 55, 60],
    },
    {
      name: "Selling",
      data: [-60, -65, -45, -40, -50, -55, -35, -50],
    },
  ],
  chart: {
    type: "bar",
    height: 330,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  colors: [LagosAdminConfig.primary, LagosAdminConfig.secondary],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "35%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  stroke: {
    curve: "smooth",
  },
  grid: {
    show: true,
    borderColor: "#f0f0f0",
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  xaxis: {
    min: -99,
    max: 99,
    tickAmount: 8,
    labels: {
      formatter: function (val) {
        return Math.abs(Math.round(val)) + "k";
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 220,
        },
      },
    },
  ],
};
var chart = new ApexCharts(document.querySelector("#sell-view"), options);
chart.render();
// sell view chart end

})();