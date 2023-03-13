import Head from "next/head";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import InfoCards from "../components/InfoCards";
import Future from "../components/Future";
import { useEffect, useState } from "react";
const text = "Porque DelincuenMapa?";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateRobosOriginal } from "../redux/userSlice";
import { InferGetServerSidePropsType } from "next";

export default function Home() {
  const [apiInfo, setApiInfo] = useState(null);

  const callAPI = async () => {
    try {
      const res = await fetch(`/api/customer`);
      const data = await res.json();
      setApiInfo(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    callAPI();
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateRobosOriginal(apiInfo));
  }, [apiInfo]);

  return (
    <div className={styles.container}>
      <Head>
        <title>DelincuenMapa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <div className={styles.heroContainer}>
          <div className={styles.heroImg}>
            <div className={styles.overlay}></div>
            <div className={styles.heroTextContainer}>
              <div className={styles.title}>DelincuenMapa</div>
              <div className={styles.text}>
                Plasmamos en un mapa los actos de delincuencia en el lugar donde
                vivimos.
              </div>
              <div className={styles.optionsContainer}>
                <Link href="/mapPage">
                  <div className={styles.crimeNear}>
                    Mira los crímenes cerca
                  </div>
                </Link>
                <div className={styles.o}>o</div>
                <Link href="/form">
                  <div className={styles.registro}>
                    Registra un crimen en el formulario
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.misionContainer}>
          <div className={`${styles.titleBlack}`}>¿Qué es DelincuenMapa?</div>
          <div className={styles.inconsContainer}>
            <img src="/pin.svg" className={styles.icon} />
            <div className={styles.plus}>+</div>
            <img src="/3.svg" className={styles.icon} />
            <div className={styles.plus}>+</div>
            <img src="/map2.svg" className={styles.icon} />
          </div>
          <div className={styles.text2}>
            <span className={styles.underline}>Delincuenmapa </span> es una
            plataforma que ayuda combatir la delincuencia, siendo un espacio
            para que el público pueda registrar a detalle si han vivido algún
            crimen, y a su vez también puedan identificar las zonas más
            peligrosas del país según la experiencia de otros usuarios.
            <br />
            <div className={styles.space}></div> Combinando la tecnología, y la
            unión de la gente podemos plasmar los actos de delincuencia que se
            viven a diario, teniendo así un reporte actualizado de las
            situaciones peligrosas ocurridas.
          </div>
        </div>
        <InfoCards />
        <Future />
        <div style={{ color: "white" }}>hola</div>
      </main>

      <footer></footer>
    </div>
  );
}
