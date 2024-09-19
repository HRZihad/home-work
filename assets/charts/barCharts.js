document.addEventListener("DOMContentLoaded", function () {
  var barChart = {
    series: [
      {
        name: "Inflation",
        data: [50, 70, 100, 60],
      },
    ],
    chart: {
      height: 110,
      width: 120,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        // borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: false,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "April"],
      position: "top",
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          //  color: "#966BCF",
          gradient: {
            colorFrom: "#966BCF",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    grid: {
      show: false,
    },
    yaxis: {
      min: 0,
      max: 100,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },

      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#bar-chart"), barChart);
  chart.render();
});
