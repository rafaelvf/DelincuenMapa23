import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Nav.module.scss";

const dataCrimenes = ["5 Crimenes Registrados", "3 Muertes", "4 Desaparecidos"];

const Nav = () => {
  //const [crimenes, setCrimenes] = useState();

  //   dataCrimenes.map((i: any) => {
  //     setTimeout(() => {
  //       setCrimenes(i);
  //     }, 1000);
  //   });

  return (
    <div className={styles.container}>
      <img src="/logod.png" className={styles.logo} />
      <div className={styles.rightContainer}>
        <div className={styles.banner}>
          <div className={styles.bannerInside}>
            {dataCrimenes.map((i: any, key: any) => (
              <div className={styles.bannerText} key={key}>
                {i}
              </div>
            ))}
          </div>
        </div>
        <img src="/form-svgrepo-com.svg" className={styles.formButton}></img>
      </div>
    </div>
  );
};
export default Nav;
