$(document).ready(function() {
var balance = {
    series: [44, 55, 13],
    chart: {
      width: 340,
      // height: '100%',
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
        show: false
    },
    //   colors:[ '#D0A2FA', '#DECBEE'],
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 340,
          },
        },
      },
      // {
      //   breakpoint: 1200,
      //   options: {
      //     chart: {
      //       width: 200,
      //     },
      //   },
      // },
    ],
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), balance);
  chart.render();
});