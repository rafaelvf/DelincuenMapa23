import styles from "../styles/Board.module.scss";
import Tweets from "./Tweets";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Board({ customers }: any) {
  const customersFiltered = useSelector((state: any) => state.user.robos);
  const peopleArray = customersFiltered ? customersFiltered : customers;

  return (
    <div className={styles.container}>
      {peopleArray.map((i: any, key: any) => (
        <Tweets
          //ciudad={i.ciudad}
          fecha={i.fechaHora}
          descripcion={i.descripcion}
          tipo={i.tipo}
          valor={i.valor}
          articulo={i.articulo}
          key={key}
        />
      ))}
    </div>
  );
}
