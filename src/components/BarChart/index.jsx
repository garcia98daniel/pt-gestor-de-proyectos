import { commitsGetRequesting } from '@/redux/commits/slice';
import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';

function BarChart() {
    const dispatch = useDispatch();
    const { commits } = useSelector(state => state.commits);

    useEffect(() => {
        dispatch(commitsGetRequesting());
    }, []);

    // Extraer los valores de los commits y sus meses correspondientes
    const featData = commits.map(commit => commit.feat);
    const fixData = commits.map(commit => commit.fix);
    const labels = commits.map(commit => {
        // Mapear el número del mes al nombre del mes
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return months[commit.month - 1];
    });

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Feat",
                data: featData,
                backgroundColor: "#4746A3"
            },
            {
                label: "Fix",
                data: fixData,
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
        <div style={{ width: '100%', height: '256px', marginTop: "110px" }}>
            <Bar data={data} options={options} />
        </div>
    );
}

export default BarChart;
