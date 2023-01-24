import React, { useEffect, useRef } from "react";
import styles from "../styles/Nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.container}>
      <img src="/logod.png" className={styles.logo} />
      <div className={styles.banner}>
        <div className={styles.bannerText}>5 crimenes registrados</div>
      </div>
      <div className={styles.formButton}>ddddd</div>
    </div>
  );
};
export default Nav;
