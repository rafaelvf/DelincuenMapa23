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
      setImg("/3.svg");
    } else if (imgS[0] === "Robo de bienes y artículos menores") {
      console.log(imgS, "imgS");
      setImg("/5.svg");
    } else if (imgS[0] === "Robo de vehículos") {
      console.log(imgS, "imgS");
      setImg("/7.svg");
    } else if (imgS[0] === "Robo a casas habitación") {
      console.log(imgS, "imgS");
      setImg("/6.svg");
    } else if (imgS[0] === "Violencia") {
      console.log(imgS, "imgS");
      setImg("/2.svg");
    } else {
      setImg("/1.svg");
    }
  }
  useEffect(() => {
    imgSelector(tipo);
  }, [img]);
  console.log(tipo[0], "kkk");

  const onlyDate = fecha.split("T");
  console.log(onlyDate, "onlyDate");

  return (
    <div className={styles.container}>
      <img src={img} className={styles.img} />

      <div className={styles.text}>
        {/* <div className={styles.ciudad}>{ciudad}</div> */}
        <div className={styles.tipo}>{tipo}</div>
        <div className={styles.infoContainer}>
          <img src="/description.svg" className={styles.commodity} />
          <div className={styles.descripcion}>{descripcion}</div>
        </div>
        <div className={styles.infoContainer}>
          <img src="/date.svg" className={styles.commodity} />
          <div className={styles.fecha}>{onlyDate[0]}</div>
        </div>
        <div className={styles.infoContainer}>
          <img src="/time.svg" className={styles.commodity} />
          <div className={styles.fecha}>{onlyDate[1]}</div>
        </div>
      </div>
    </div>
  );
}
