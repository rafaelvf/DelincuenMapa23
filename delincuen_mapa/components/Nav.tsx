import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Nav.module.scss";

const dataCrimenes = ["5 Crimenes Registrados", "3 Muertes", "4 Desaparecidos"];

const Nav = () => {
  const robos = useSelector((state: any) => state.user.robosOriginal);
  const crimenesRegistrados = robos.length;
  function filtrado(filtro: string) {
    const customersFiltrados = [];
    for (let i = 0; i < robos.length; i++) {
      for (let j = 0; j < robos[i].tipo.length; j++) {
        if (filtro === robos[i].tipo[j]) {
          customersFiltrados.push(robos[i]);
        }
      }
    }

    return customersFiltrados;
  }
  const casas = filtrado("Robo a casas habitación");
  const caminaba = filtrado("Asalto a transeúntes");

  return (
    <div className={styles.container}>
      <Link href={"/"}>
        <img src="/logod.png" className={styles.logo} />
      </Link>
      <div className={styles.rightContainer}>
        <div className={styles.banner}>
          <div className={styles.bannerInside}>
            <div className={styles.bannerText}>
              {`${crimenesRegistrados} Crimenes registrados`}
            </div>
            <div className={styles.bannerText}>
              {`${casas.length} Crimenes a casas`}
            </div>
            <div className={styles.bannerText}>
              {`${caminaba.length} Crimenes a peatones`}
            </div>
          </div>
        </div>
        <Link href={"/form"}>
          {" "}
          <img src="/form2.svg" className={styles.formButton}></img>
        </Link>
      </div>
    </div>
  );
};
export default Nav;
