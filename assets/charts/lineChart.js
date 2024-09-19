document.addEventListener("DOMContentLoaded", function () {
  var baseLine = {
    series: [
      {
        name: "Desktops",
        data: [0, 200, 100, 400, 300, 600],
      },
    ],
    chart: {
      height: 110,
      width: 120,
      type: "line",
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
      colors: ["#5A4AD2"],
      width: 2,
    },
    tooltip: {
      enabled: false,
    },

    grid: {
      show: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar"],
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
      min: 0,
      max: 600,
      labels: {
        show: false, // Hides x-axis text labels
      },
      axisBorder: {
        show: true,
        color: "#1F2336",
      },
      axisTicks: {
        show: false, // Hides the y-axis ticks
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#second-line"), baseLine);
  chart.render();
});
