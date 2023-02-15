import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Nav.module.scss";

const dataCrimenes = ["5 Crimenes Registrados", "3 Muertes", "4 Desaparecidos"];

const Nav = () => {
  const [open, setOpen] = useState(false);
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
        <img src="/nuevologo.png" className={styles.logo} />
      </Link>
      <div className={styles.rightContainer}>
        <Link href={"/mapPage"}>
          <div className={styles.banner}>
            <div className={styles.bannerInside}>
              <div className={styles.bannerText}>
                {`${crimenesRegistrados} Crímenes registrados`}
              </div>
              <div className={styles.bannerText}>
                {`${casas.length} Crímenes a casas`}
              </div>
              <div className={styles.bannerText}>
                {`${caminaba.length} Crímenes a peatones`}
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/form"}>
          {" "}
          <img src="/edit.svg" className={styles.formButton}></img>
        </Link>
      </div>
      {!open && (
        <img
          src="/open.svg"
          className={styles.menu}
          onClick={() => setOpen(!open)}
        />
      )}
      <div
        className={
          open
            ? `${styles.modalContainer} ${styles.modalContainerOpen}`
            : styles.modalContainer
        }
      >
        <img
          src="/close2.svg"
          className={styles.close}
          onClick={() => setOpen(!open)}
        />
        <div className={styles.mobileContainer}>
          <Link href={"/mapPage"} onClick={() => setOpen(!open)}>
            <div className={styles.mobileLinks}>Mapa</div>
          </Link>
          <Link href={"/form"} onClick={() => setOpen(!open)}>
            <div className={styles.mobileLinks}>Formulario de registro</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Nav;
