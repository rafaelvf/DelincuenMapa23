import styles from "../styles/Tweets.module.scss";
import { useEffect, useState } from "react";
type Props = {
  //ciudad: string;
  fecha: string;
  descripcion: string;
  tipo: string;
  //logo: string;
};
const images = ["/1.svg", "/2.svg", "/3.svg"];
export default function Tweets({ fecha, descripcion, tipo }: Props) {
  const [img, setImg] = useState("");
  function imgSelector(imgS: any) {
    if (imgS[0] === "Asalto a transeúntes") {
      console.log(imgS, "imgS");
      setImg("/1.svg");
    }
  }
  useEffect(() => {
    imgSelector(tipo);
  }, [img]);
  console.log(tipo[0], "kkk");

  return (
    <div className={styles.container}>
      <img src={img} className={styles.img} />

      <div className={styles.text}>
        {/* <div className={styles.ciudad}>{ciudad}</div> */}
        <div className={styles.tipo}>{tipo}</div>
        <div className={styles.descripcion}>{descripcion}</div>
        <div className={styles.fecha}>{fecha}</div>
      </div>
    </div>
  );
}
