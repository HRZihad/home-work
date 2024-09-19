document.addEventListener("DOMContentLoaded", function () {
  var data = {
    chart: {
      type: "line",
      height: 350,
      toolbar: {
        show: false,
      },
    },

    colors: ["#9C88FF", "#5758BB"], // Line colors
    stroke: {
      width: 2, // Line thickness
      curve: "straight", // Line type
    },
    title: {
      text: "Analytics",
      align: "left",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "32px",
        fontWeight: "bold",
        fontFamily: "roboto",
        color: "#ffffff",
      },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        style: {
          colors: "#5B617F", // Label color
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#5B617F", // Y-axis label color
        },
      },
      axisBorder: {
        show: false,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      labels: {
        colors: "#A5A7D0", // Legend text color
      },
      markers: {
        width: 16,
        height: 12,
        radius: 12, // Adjust the marker size and shape if needed
        strokeColor: "#fff", // Marker border color
        strokeWidth: 2,
      },
    },
    grid: {
      borderColor: "#3A3C56", // Grid color
    },
    tooltip: {
      theme: "dark", // Tooltip style
    },
    series: [
      {
        name: "Performance 1",
        data: [15, 25, 18, 20, 30, 35, 25],
      },
      {
        name: "Performance 2",
        data: [10, 20, 25, 15, 25, 30, 20],
      },
    ],
  };

  var chart = new ApexCharts(
    document.querySelector("#chart-multiple-line"),
    data
  );
  chart.render();
});
