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
      </main>

      <footer></footer>
    </div>
  );
}
