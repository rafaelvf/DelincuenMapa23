import styles from "../styles/InfoCards.module.scss";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const imageAnimate = {
  offScreen: { x: -1000 },
  onScreen: {
    x: 0,
    transition: {
      duration: 1.5,
      type: "spring",
      bounce: 0.3,
    },
  },
};

export default function InfoCards() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.title}>¿Que vamos a encontrar?</div>
        <div className={styles.text}>
          Actualmente contamos con dos secciones:
        </div>
      </div>

      <div className={styles.bottom}>
        <Link href="/mapPage">
          <motion.div
            className={styles.left}
            variants={imageAnimate}
            initial="offScreen"
            whileInView="onScreen"
            //viewport={{ once: false, amount: 0.2 }}
          >
            <div className={styles.overlay}></div>
            <img src="/map2White.svg" className={styles.imgMap} />
            <div className={styles.textMap}>
              En la sección mapa encontraremos todos los crimenes registrados en
              nuestra base de datos. Donde podrás filtrar la información segun
              lo que quieras ver.
            </div>
          </motion.div>
        </Link>
        <Link href="/form">
          <div className={styles.right}>
            <div className={styles.overlay}></div>
            <img src="/form2.svg" className={styles.imgMap} />
            <div className={styles.textMap}>
              En la sección formulario, podrás registrar un crimen que hayas
              recibido en algun momento.
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
