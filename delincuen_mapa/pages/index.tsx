import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { InferGetServerSidePropsType } from "next";
import Nav from "../components/Nav";
import Map from "../components/Map";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.scss";
import Board from "../components/Board";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateRobos, updateRobosOriginal } from "../redux/userSlice";
import { useEffect, useState } from "react";
import { updateRobosAction } from "../redux/apiCalls";

export default function Home({
  customers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const Map = dynamic(
    () => import("../components/Map"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  );
  const [ready, setReady] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    updateRobosAction(dispatch);
    setReady(true);
  }, []);

  const customers2 = useSelector((state: any) => state.user.robosOriginal);
  console.log(customers2, "customers");
  useEffect(() => {
    setTimeout(() => {
      const filtrado = customers2.robosOriginal.filter(
        (i: any) => i.valor === 0
      );
      console.log(filtrado, "filtrado");
    }, 5000);
  }, [ready]);

  // useEffect(() => {
  //   dispatch(updateRobos(filtrado));
  //   dispatch(updateRobosOriginal(customers));
  // }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>DelincuenMapa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <div className={styles.filterContainer}>
          <div className={styles.filter}>Delito</div>
          <div className={styles.filter}>Artículos</div>
          <div className={styles.filter}>
            <div className={styles.filterAlignment}>
              Día <img src="/sun.svg" className={styles.sun} />
            </div>
          </div>
          <div className={styles.filter}>
            <div className={styles.filterAlignment}>
              Noche <div className={styles.moon}></div>
            </div>
          </div>
        </div>
        <div className={styles.subContainer}>
          <div style={{ width: "50%" }}>
            <Map customers={customers} />
          </div>
          <div style={{ width: "50%" }}>
            <Board customers={customers} />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/customer");
  return {
    props: {
      customers: res.data,
    },
  };
}
