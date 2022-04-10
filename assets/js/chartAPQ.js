let apqChart = document.querySelectorAll("#chart-APQ");

apqChart.forEach((chart, index) => {
  new Chart(chart, {
    type: "bar", // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: ["A", "P", "Q"],
      datasets: [
        {
          data: [83, 85, 100],
          //backgroundColor:'green',
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
          ],
          borderWidth: 1,
          borderColor: "#777",
          hoverBorderWidth: 3,
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
