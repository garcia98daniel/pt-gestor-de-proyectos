import React from 'react';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";


function LineChart() {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Chart.js Line Chart",
          },
        },
      };
      
      const labels = ["10", "20", "30", "40", "50", "60", "70"];
      
    const data = {
        labels,
        datasets: [
          {
            label: "Dataset 1",
            data: labels.map(() => faker.datatype.number({ min: 200, max: 1000 })),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Dataset 2",
            data: labels.map(() => faker.datatype.number({ min: 200, max: 1000 })),
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      };
      
    return (
      <div style={{ width: '100%', height: '256px'}}>
        <Line options={options} data={data} />
      </div>
    );
}

export default LineChart;