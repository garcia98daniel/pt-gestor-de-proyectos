import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart(props) {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                label: "Feat",
                data: [480, 340, 540, 150],
                backgroundColor: "#4746A3"
            },
            {
                label: "Fix",
                data: [380, 480, 320],
                backgroundColor: "#97BDFE"
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: true,
                        drawBorder: false,
                        borderDash: [3, 3],
                        zeroLineColor: "blue"
                    },
                    categoryPercentage: 0.7,
                    barPercentage: 0.9,
                    ticks: {
                        beginAtZero: true
                    }
                }
            ],
            yAxes: [
                {
                    display: false,
                    gridLines: {
                        display: false,
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    };

    return (
        <div style={{ width: '100%', height: '256px', marginTop:"110px" }}>
            <Bar data={data} options={options} />
        </div>
    );
}

export default BarChart;
