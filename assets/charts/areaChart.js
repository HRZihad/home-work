document.addEventListener("DOMContentLoaded", function () {
  var line = {
    series: [
      {
        name: "Network",
        data: [
          {
            x: "Dec 24 2017",
            y: 0,
          },
          {
            x: "Dec 25 2017",
            y: 31,
          },
          {
            x: "Dec 26 2017",
            y: 15,
          },
          {
            x: "Dec 27 2017",
            y: 34,
          },
        ],
      },
    ],
    chart: {
      type: "area",
      height: 110,
      width: 120,
      animations: {
        enabled: false,
      },
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false, // Disable the toolbar (menu bar)
      },
      // Add offset adjustments
      offsetX: 0, // Horizontal offset (removes side padding)
      offsetY: 0, // Vertical offset (removes top/bottom padding)
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["#9276F1"],
      width: 2,
    },
    fill: {
      opacity: 1,
      type: "solid",
      colors: ["#524892"],
    },
    markers: {
      size: 3,
      hover: {
        size: 5,
      },
      colors: ["#9276F1"],
      strokeColor: "transparent", // Removes the border
      strokeWidth: 0, // Ensures no border width
    },

    tooltip: {
      enabled: false,
    },
    theme: {
      palette: "palette1",
    },
    xaxis: {
      labels: {
        show: false, // Hides x-axis text labels
      },
      axisBorder: {
        show: false, // Hides the x-axis border/line
      },
      axisTicks: {
        show: false, // Hides the y-axis ticks
      },
    },
    yaxis: {
      labels: {
        show: false, // Hides x-axis text labels
      },
      axisBorder: {
        show: true, // Show the y-axis border
        color: "#1F2336", // Change the y-axis border color to red (or any desired color)
      },
    },
    grid: {
      show: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#line"), line);
  chart.render();
});
