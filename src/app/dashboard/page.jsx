"use client";
import React from "react";
import Layout from "../components/Layout";
import styles from "./styles.module.css";
import StatsItem from "../components/StatsItem";
import Image from "next/image";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import PercentageChartProgress from "../components/PercentageChartProgress";
import PieChart from "../components/PieChart";



function Dashboard() {
  return (
    <Layout>
      <p className={styles.welcome_txt}>Bienvenido USERNAME</p>
      <small>
        Verifica tus alertas, posees <span>3 alertas sin leer!</span>
      </small>
      <section className={styles.weather_and_stats}>
        <div className={styles.weather_container}>
          <i className={styles.weather_img_container}>
            <Image src="/imgs/nublado.jpg" alt="logo" fill />
          </i>

          <div className={styles.weather_detail}>27C Cali</div>
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

      <section className={styles.server_and_commits}>
        <div className={styles.server_chart_container}>
          <h3>Detalles Del Servidor</h3>
          <small>
            The total number of sessions within the date range. It is the period
            time a user is actively engaged with your website. page or app. etc
          </small>

          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ marginTop: "20px" }}>
              <small style={{ color: "gray" }}>Tiempo de Uso</small>
              <h1 style={{ margin: "10px 0", color: "#4746A3" }}>71.56%</h1>
            </div>
            <div style={{ marginTop: "20px" }}>
              <small style={{ color: "gray" }}>Proyectos Desplegados</small>
              <h1 style={{ margin: "10px 0", color: "#4746A3" }}>10</h1>
            </div>
          </div>
          <LineChart/>
        </div>

        <div className={styles.commits_chart_container}>
          <h3>Reporte De Commits</h3>
          <small>
            Total de commits realizados por cada mes diferenciando los tag de
            Ajusted(fix) y Caracteristicas(feat)
          </small>
          <BarChart/>
        </div>

      </section>

      <section className={styles.deliveries_chart_container}>
        <div className={styles.delivery_stats_chart_container}>
            <p style={{ margin:"0px"}}>Entregas</p>
            <h1 style={{ margin:"0px", color: "#4746A3" }}>%30</h1>
            <p style={{ marginBotton: "10px", marginTop:"0px", color: "#4746A3" }}>Proximo Ciclo: Jun-27 2020</p>
            <small>El ciclo de entrega se calcula usando las fechas estimadas de los Sprints en cada proyecto</small>
        </div>

        <PercentageChartProgress/>
        <PieChart/>
      </section>
    </Layout>
  );
}

export default Dashboard;
