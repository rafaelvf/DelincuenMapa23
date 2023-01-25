import styles from "../styles/Tweets.module.scss";

type Props = {
  ciudad: string;
  fecha: string;
  descripcion: string;
  tipo: string;
};

export default function Tweets({ ciudad, fecha, descripcion, tipo }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.ciudad}>{ciudad}</div>
      <div className={styles.tipo}>{tipo}</div>
      <div className={styles.descripcion}>{descripcion}</div>
      <div className={styles.fecha}>{fecha}</div>
    </div>
  );
}
