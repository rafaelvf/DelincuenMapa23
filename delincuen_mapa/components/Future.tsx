import styles from "../styles/Future.module.scss";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { futuro } from "../data";

export default function Future() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.title}>
          Futuros desarrollos
          <img src="/settings.svg" className={styles.lupa} />
        </div>
        <div className={styles.text}>
          Estamos trabajando en agregarle diferentes funcionalidades a la
          pagina. Nuestra meta es que la informacion sea lo mas certera posible
          y contar con la mayor cantidad de Data posible.
        </div>
      </div>

      {futuro.map((i: any, key: any) => (
        <motion.div className={styles.bottom} key={key}>
          <img src="/bulletedlist.svg" className={styles.bullet} />
          <div className={styles.textMap}>{i.desarrollo}</div>
          <img src={i.img} className={styles.iconList} />
        </motion.div>
      ))}
    </div>
  );
}
