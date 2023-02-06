import styles from "../styles/Tweets.module.scss";
import { useEffect, useState } from "react";
type Props = {
  //ciudad: string;
  fecha: string;
  descripcion: string;
  tipo: string;
  valor?: number;
  articulo?: [];
  latitud: number;
  longitud: number;
  //logo: string;
};

export default function Tweets({
  fecha,
  descripcion,
  tipo,
  valor,
  articulo,
  latitud,
  longitud,
}: Props) {
  const [dayImg, setDayimg] = useState("/moon2.svg");
  const [img, setImg] = useState("");
  function imgSelector(imgS: any) {
    if (imgS[0] === "Asalto a transeúntes") {
      setImg("/3.svg");
    } else if (imgS[0] === "Robo de bienes y artículos menores") {
      setImg("/5.svg");
    } else if (imgS[0] === "Robo de vehículos") {
      setImg("/7.svg");
    } else if (imgS[0] === "Robo a casas habitación") {
      setImg("/6.svg");
    } else if (imgS[0] === "Violencia") {
      setImg("/2.svg");
    } else {
      setImg("/1.svg");
    }
  }
  useEffect(() => {
    if (onlyDate[1] > "06:29" && onlyDate[1] < "18:30") {
      setDayimg("/day2.svg");
    } else if (onlyDate[1] < "06:30" || onlyDate[1] > "18:30") {
      setDayimg("/moon2.svg");
    }
  });
  useEffect(() => {
    imgSelector(tipo);
  }, [img]);
  //console.log(articulo, "kkk");

  const onlyDate = fecha.split("T");

  return (
    <div className={styles.container}>
      <img src={img} className={styles.img} />

      <div className={styles.text}>
        {/* <div className={styles.ciudad}>{ciudad}</div> */}
        <div className={styles.tipo}>{tipo[0]}</div>
        <div className={styles.infoContainer}>
          <img src="/description.svg" className={styles.commodity} />
          <div className={styles.descripcion}>{descripcion}</div>
        </div>
        <div className={styles.extraInfo}>
          <div className={styles.locationContainer}>
            <div className={styles.infoContainer}>
              <img src="/date.svg" className={styles.commodity} />
              <div className={styles.fecha}>{onlyDate[0]}</div>
            </div>
            <div className={styles.infoContainer}>
              <img src="/time.svg" className={styles.commodity} />
              <div className={styles.fecha}>{onlyDate[1]}</div>
            </div>
            <div className={styles.infoContainer}>
              <img src="/map.svg" className={styles.commodity} />
              <div className={styles.fecha}>{latitud.toFixed(4)}</div>
              <div className={styles.fecha}>{longitud.toFixed(4)}</div>
            </div>
          </div>
          <div className={styles.locationContainer}>
            <div className={styles.infoContainer}>
              <img src="/dollar.svg" className={styles.commodity} />
              <div className={styles.fecha}>{valor}</div>
            </div>
            {articulo && articulo.length > 0 && (
              <div className={styles.infoContainer}>
                <img src="/bullet.svg" className={styles.commodity} />
                {articulo?.map((i: any, key: any) => (
                  <div className={styles.articuloContainer} key={key}>
                    {/* <img
                      src="/bulletPoint.svg"
                      className={styles.bulletPoint}
                    /> */}
                    {i}
                  </div>
                ))}
              </div>
            )}
          </div>
          <img src={dayImg} className={styles.dayImg} />
        </div>
      </div>
    </div>
  );
}
