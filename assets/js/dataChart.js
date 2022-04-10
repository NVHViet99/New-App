let chart = document.querySelectorAll("#myChart");
// Global Options
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = "#777";

chart.forEach((myChart, index) => {
  new Chart(myChart, {
    type: "horizontalBar", // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: ["CO", "Target"],
      datasets: [
        {
          data: [4245, 6000, 7000],
          //backgroundColor:'green',
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
          ],
          borderWidth: 1,
          borderColor: "#777",
          hoverBorderWidth: 2,
          hoverBorderColor: "#000",
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        },
      },
      tooltips: {
        enabled: true,
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });
});

// let massPopChart = new Chart(myChart, {
//   type: "horizontalBar", // bar, horizontalBar, pie, line, doughnut, radar, polarArea
//   data: {
//     labels: ["CO", "Target"],
//     datasets: [
//       {
//         data: [4245, 6000, 7000],
//         //backgroundColor:'green',
//         backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)"],
//         borderWidth: 1,
//         borderColor: "#777",
//         hoverBorderWidth: 2,
//         hoverBorderColor: "#000",
//       },
//     ],
//   },
//   options: {
//     legend: {
//       display: false,
//     },
//     layout: {
//       padding: {
//         left: 0,
//         right: 0,
//         bottom: 0,
//         top: 0,
//       },
//     },
//     tooltips: {
//       enabled: true,
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//   },
// });
