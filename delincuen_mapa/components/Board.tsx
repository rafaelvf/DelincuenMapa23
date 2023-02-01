import styles from "../styles/Board.module.scss";
import Tweets from "./Tweets";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Board({ customers }: any) {
  //const customers = useSelector((state: any) => state.user.robos);

  return (
    <div className={styles.container}>
      {customers.map((i: any, key: any) => (
        <Tweets
          //ciudad={i.ciudad}
          fecha={i.fechaHora}
          descripcion={i.descripcion}
          tipo={i.tipo}
          key={key}
        />
      ))}
    </div>
  );
}
