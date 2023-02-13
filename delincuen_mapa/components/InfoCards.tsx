import styles from "../styles/InfoCards.module.scss";

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
        <div className={styles.left}>
          <div className={styles.overlay}></div>
          <img src="/map2White.svg" className={styles.imgMap} />
          <div className={styles.textMap}>
            En la sección mapa encontraremos todos los crimenes registrados en
            nuestra base de datos. Donde podrás filtrar la información segun lo
            que quieras ver.
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.overlay}></div>
          <img src="/form2.svg" className={styles.imgMap} />
          <div className={styles.textMap}>
            En la sección formulario, podrás registrar un crimen que hayas
            recibido en algun momento.
          </div>
        </div>
      </div>
    </div>
  );
}
