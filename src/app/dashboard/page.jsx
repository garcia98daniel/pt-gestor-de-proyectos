"use client";
import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import styles from "./styles.module.css";
import StatsItem from "../../components/StatsItem";
import Image from "next/image";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PercentageChartProgress from "../../components/PercentageChartProgress";
import PieChart from "../../components/PieChart";
import Weather from "../../hooks/weather";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosGetRequesting } from "@/redux/todos/slice";
import { dashboardCardsGetRequesting } from "@/redux/dashboardCards/slice";

const TEMP_KELVIN = 273.15

function Dashboard() {
  const dispatch = useDispatch();
  const [city,setCity] = useState('')
  const [weather,setWeather] = useState('')
  const [celcius, setCelcius] = useState('')

  const onWeatherReponse = (dataWeather) => {
    setCity(dataWeather.name)
    setWeather(dataWeather.weather[0].main)
    const tempCelcius = Math.round(dataWeather.main.temp - TEMP_KELVIN);
    setCelcius(tempCelcius)
  };

  const {user:{user}} = useSelector(state => state.user);
  const {dashboardCards} = useSelector(state => state.dashboardCards);

  useEffect(()=>{
    dispatch(dashboardCardsGetRequesting());
  },[]);

  return (
    <Layout>
      <p className={styles.welcome_txt}>Bienvenido {user}</p>
      <small>
        Verifica tus alertas, posees <span>3 alertas sin leer!</span>
      </small>
      <section className={styles.weather_and_stats}>
        <div className={styles.weather_container}>
          <i className={styles.weather_img_container}>
          {weather === "Clear" && <Image src="/imgs/despejado.jpg" alt="despejado" fill />}
          {weather === "Clouds" && <Image src="/imgs/nublado.jpg" alt="nublado" fill />}
          {weather === "Rain" && <Image src="/imgs/lluvioso.jpg" alt="lluvia" fill />}
          {weather === "Drizzle" && <Image src="/imgs/lluvioso.jpg" alt="llovizna" fill />}
          {weather === "Thunderstorm" && <Image src="/imgs/tormenta.jpg" alt="tormenta" fill />}
          {weather === "Snow" && <Image src="/imgs/nieve.jpg" alt="nieve" fill />}
          {weather === "Mist" && <Image src="/imgs/niebla.jpg" alt="niebla" fill />}
          {weather === "Smoke" && <Image src="/imgs/humo.jpg" alt="humo" fill />}
          {weather === "Haze" && <Image src="/imgs/neblina.jpg" alt="neblina" fill />}
          {weather === '' && <p>Cargando... </p>}
          </i>

          <Weather onWeatherReponse={onWeatherReponse} />

          <div className={styles.weather_detail}>{celcius}C {city} {weather} </div>
        </div>

        <div className={styles.stats_container}>
          <StatsItem
            title={"Proyectos Registrados"}
            quantity={dashboardCards?.projects}
            details={"Ultimo proyecto registrado hace 15 días"}
            bgcolor={"#7FA1FB"}
          />
          <StatsItem
            title={"Proyectos en Desarrollo"}
            quantity={dashboardCards?.projects_dev}
            details={"total de avance 22.00%"}
            bgcolor={"#4746A3"}
          />
          <StatsItem
            title={"NC's sin resolver"}
            quantity={dashboardCards?.peding_nc}
            details={"Ultima NC registrada hace 1 día"}
            bgcolor={"#7878E8"}
          />
          <StatsItem
            title={"Cantidad de Errores"}
            quantity={dashboardCards?.errors_deploy}
            details={"Ultimo error hace 2 horas"}
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
          <LineChart />
        </div>

        <div className={styles.commits_chart_container}>
          <h3>Reporte De Commits</h3>
          <small>
            Total de commits realizados por cada mes diferenciando los tag de
            Ajusted(fix) y Caracteristicas(feat)
          </small>
          <BarChart />
        </div>
      </section>

      <section className={styles.deliveries_chart_container}>
        <div className={styles.delivery_stats_chart_container}>
          <p style={{ margin: "0px" }}>Entregas</p>
          <h1 style={{ margin: "0px", color: "#4746A3" }}>%30</h1>
          <p
            style={{ marginBotton: "10px", marginTop: "0px", color: "#4746A3" }}
          >
            Proximo Ciclo: Jun-27 2020
          </p>
          <small>
            El ciclo de entrega se calcula usando las fechas estimadas de los
            Sprints en cada proyecto
          </small>
        </div>

        <PercentageChartProgress />
        <PieChart />
      </section>
    </Layout>
  );
}

export default Dashboard;
