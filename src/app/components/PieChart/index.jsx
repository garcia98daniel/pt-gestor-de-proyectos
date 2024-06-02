import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styles from "./styles.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [50, 25, 25],
      backgroundColor: [
        '#4746A3',
        '#ffff00',
        '#1a90ff',
      ],
    },
  ],
};

function PieChart() {
    return (
        <div className={styles.container}>
            <div className={styles.chartWrapper}>
                <div className={styles.centeredDiv}>
                    <h1>90</h1>
                </div>
                <Pie data={data} />
            </div>


            <div className={styles.details}>
                <div className={styles.detailItem}>
                    <span className={styles.circle_one}></span>
                    <small>Detectadas</small>
                </div>
                <small>120</small>
            </div>
            <div className={styles.details}>
                <div className={styles.detailItem}>
                    <span className={styles.circle_two}></span>
                    <small>En Proceso</small>
                </div>
                <small>120</small>
            </div>
            <div className={styles.details}>
                <div className={styles.detailItem}>
                    <span className={styles.circle_three}></span>
                    <small>Resueltas</small>
                </div>
                <small>120</small>
            </div>
        </div>
    );
}

export default PieChart;
