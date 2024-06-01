import React from 'react';
import Layout from '../components/Layout';
import styles from './styles.module.css';
import StatsItem from '../components/StatsItem';

function Dashboard() {
    return (
        <Layout>
            <p className={styles.welcome_txt}>Bienvenido USERNAME</p>
            <small>Verifica tus alertas, posees <span>3 alertas sin leer!</span></small>
            <section className={styles.weather_and_stats}>
                <div className={styles.weather_container}>
                    {/* <i className={styles.login_logo_container}>
                        <Image src="https://olsoftware.com/wp-content/uploads/2021/04/cropped-Logo-Oficial-OL-Software-230x64.png" 
                        alt="logo"
                        width={200}
                        height={200}
                        />
                    </i> */}
                </div>

                <div className={styles.stats_container}>
                    <StatsItem
                    title={"Proyectos Registrados"}
                    quantity={"50"}
                    details={"Ultimo proyecto registrado hace 15 días"}
                    bgcolor={"#7FA1FB"}
                    />
                    <StatsItem
                    title={"Proyectos en Desarrollo"}
                    quantity={"12"}
                    details={"total de avance 22.00%"}
                    bgcolor={"#4746A3"}
                    />
                    <StatsItem
                    title={"Proyectos Registrados"}
                    quantity={"50"}
                    details={"Ultimo proyecto registrado hace 15 días"}
                    bgcolor={"#7878E8"}
                    />
                    <StatsItem
                    title={"Proyectos Registrados"}
                    quantity={"50"}
                    details={"Ultimo proyecto registrado hace 15 días"}
                    bgcolor={"#F3777F"}
                    />
                </div>
            </section>
        </Layout>
    );
}

export default Dashboard;