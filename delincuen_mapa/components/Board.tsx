import styles from "../styles/Board.module.scss";
import Tweets from "./Tweets";

const dataRobos = [
  {
    ciudad: "guayaquil",
    fecha: "2008-01-19T23:26",
    descripcion: "Entraron a mi casa y robaron mucha plata",
    tipoDeRobo: "Asalto",
  },
  {
    ciudad: "cuenca",
    fecha: "2008-01-19T23:26",
    descripcion: "Entraron a mi casa y robaron mucha plata",
    tipoDeRobo: "Asalto",
  },
  {
    ciudad: "quito",
    fecha: "2008-01-19T23:26",
    descripcion: "Entraron a mi casa y robaron mucha plata",
    tipoDeRobo: "Asalto",
  },
  {
    ciudad: "quito",
    fecha: "2008-01-19T23:26",
    descripcion: "Entraron a mi casa y robaron mucha plata",
    tipoDeRobo: "Asalto",
  },
  {
    ciudad: "quito",
    fecha: "2008-01-19T23:26",
    descripcion: "Entraron a mi casa y robaron mucha plata",
    tipoDeRobo: "Asalto",
  },
  {
    ciudad: "quito",
    fecha: "2008-01-19T23:26",
    descripcion: "Entraron a mi casa y robaron mucha plata",
    tipoDeRobo: "Asalto",
  },
  {
    ciudad: "quito",
    fecha: "2008-01-19T23:26",
    descripcion: "Entraron a mi casa y robaron mucha plata",
    tipoDeRobo: "Asalto",
  },
  {
    ciudad: "quito",
    fecha: "2008-01-19T23:26",
    descripcion: "Entraron a mi casa y robaron mucha plata",
    tipoDeRobo: "Asalto",
  },
];
const images = ["/1.svg", "/2.svg", "/3.svg"];

export default function Board() {
  const logo = Math.floor(Math.random() * 3);
  console.log(logo, "logo");
  return (
    <div className={styles.container}>
      {dataRobos.map((i: any, key: any) => (
        <Tweets
          ciudad={i.ciudad}
          fecha={i.fecha}
          descripcion={i.descripcion}
          tipo={i.tipoDeRobo}
          key={key}
          logo={images[logo]}
        />
      ))}
    </div>
  );
}
