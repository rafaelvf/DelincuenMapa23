import styles from "../styles/InfoCards.module.scss";

export default function InfoCards() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>Que vamos a encontrar?</div>
        <div className={styles.text}>
          Actualmente contamos con dos secciones, en la seccion mapa
          encontraremos todos los crimenes registrados en nuestra base de datos.
          Donde porfras filtrar la infomarcion segun lo que quieras ver. Y en la
          seccion formulario, podras registrar un crimen que hayas recibido en
          algun momento.
        </div>
      </div>

      <div className={styles.right}></div>
    </div>
  );
}
