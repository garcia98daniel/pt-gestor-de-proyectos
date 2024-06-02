import React from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import styles from "./styles.module.css";
import { Stack } from '@mui/material';

// Modifica el componente de estilo para aceptar la prop color
const BorderLinearProgress = styled(LinearProgress)(({ theme, customcolor }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: customcolor, // Usa la prop customcolor
    },
}));

function PercentageChartProgress() {
    return (
        <div className={styles.PercentageChartProgress_container}>
            <div className={styles.progressBar_container}>
                <small>Confenalco App</small>
                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                    <BorderLinearProgress variant="determinate" value={75} customcolor="#4746A3" />
                </Stack>
                <p>75%</p>
            </div>
            <div className={styles.progressBar_container}>
                <small>Brandefy</small>
                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                    <BorderLinearProgress variant="determinate" value={25} customcolor="#ffff00" />
                </Stack>
                <p>25%</p>
            </div>
            <div className={styles.progressBar_container}>
                <small>RNT</small>
                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                    <BorderLinearProgress variant="determinate" value={95} customcolor="#ff0000" />
                </Stack>
                <p>95%</p>
            </div>
            <div className={styles.progressBar_container}>
                <small>Balance</small>
                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                    <BorderLinearProgress variant="determinate" value={50} customcolor="#1a90ff" />
                </Stack>
                <p>50%</p>
            </div>
            <div className={styles.progressBar_container}>
                <small>BDC</small>
                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                    <BorderLinearProgress variant="determinate" value={25} customcolor="#4746A3" />
                </Stack>
                <p>25%</p>
            </div>
            <div className={styles.progressBar_container}>
                <small>Confenalco App</small>
                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                    <BorderLinearProgress variant="determinate" value={10} customcolor="#ffa500" />
                </Stack>
                <p>75%</p>
            </div>
        </div>
    );
}

export default PercentageChartProgress;
