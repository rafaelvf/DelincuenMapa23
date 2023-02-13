import Head from "next/head";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

const text = "Porque DelincuenMapa?";
export default function Home() {
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
                    Mira los crimenes cerca
                  </div>
                </Link>
                <div className={styles.o}>o</div>
                <Link href="/form">
                  <div className={styles.registro}>
                    Resgistra un crimen en el formulario
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.misionContainer}>
          <div className={`${styles.title} ${styles.titleBlack}`}>
            Que es DelincuenMapa?
          </div>
          <div className={styles.inconsContainer}>
            <img src="/pin.svg" className={styles.icon} />
            <div className={styles.plus}>+</div>
            <img src="/3.svg" className={styles.icon} />
            <div className={styles.plus}>+</div>
            <img src="/map2.svg" className={styles.icon} />
          </div>
          <div className={styles.text2}>
            <span className={styles.underline}>Delincuenmapa </span>surge debido
            a la alta inseguridad que se vive en el pais hoy en dia y la falta
            de informacion al respecto.
            <br />
            <div className={styles.space}></div> Usando la tecnologia
            <span className={styles.plus2}>+</span>la union de la gente, podemos
            lograr plasmar realmente los actos de delincuencia que se viven. De
            la gente para la gente{" "}
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
