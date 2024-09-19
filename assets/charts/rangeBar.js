document.addEventListener("DOMContentLoaded", function(){
    var rangeOptions = {
        chart: {
          type: 'rangeBar',
          height: '100%',
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true, // Horizontal bars
            barHeight: '50%',
          },
        },
        colors: ['#9C88FF', '#00A3E0'], // Bar colors (like purple and blue)
        xaxis: {
          min: 1,
          max: 10,
          labels: {
            style: {
              colors: '#5B617F', // X-axis label color
            },
          },
          axisBorder: {
            show: false
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: '#5B617F', // Y-axis label color
            },
          },
          axisBorder: {
            show: false
          }
        },
        grid: {
          borderColor: '#3A3C56', // Grid color
        },
        dataLabels: {
          enabled: false, // Hide the data labels on bars
        },
        title:{
          text: 'Statistics',
          align: 'left',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize:  '32px',
            fontWeight:  'bold',
            fontFamily: "roboto",
            color:  '#ffffff'
          },
        },
        series: [
          {
            data: [
              {
                x: 'Mon',
                y: [8, 10],
              },
              {
                x: 'Tue',
                y: [3, 5],
              },
              {
                x: 'Wed',
                y: [4, 6],
              },
              {
                x: 'Thu',
                y: [2, 9],
              },
              {
                x: 'Fri',
                y: [1, 2],
              },
            ],
          },
        ],
        tooltip: {
          theme: 'dark', // Tooltip style
        },
      };
      
      var chart = new ApexCharts(document.querySelector("#show-rangebar"), rangeOptions);
      chart.render();
      
})