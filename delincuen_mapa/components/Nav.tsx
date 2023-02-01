import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Nav.module.scss";

const dataCrimenes = ["5 Crimenes Registrados", "3 Muertes", "4 Desaparecidos"];

const Nav = () => {
  return (
    <div className={styles.container}>
      <Link href={"/"}>
        <img src="/logod.png" className={styles.logo} />
      </Link>
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
        <Link href={"/form"}>
          {" "}
          <img src="/form-svgrepo-com.svg" className={styles.formButton}></img>
        </Link>
      </div>
    </div>
  );
};
export default Nav;
