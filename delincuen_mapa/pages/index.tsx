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
import { updateRobos, clearFilter, filterArticulos } from "../redux/userSlice";
import { useEffect, useState } from "react";

import { updateCustomers } from "../redux/userSlice";
import { metodo, categorias } from "../data";

export default function Home({
  customers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const Map = dynamic(
    () => import("../components/Map"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  );

  const [tipo, setTipo] = useState("");
  const [customersFiltrados, setCustomersFiltrados] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    dispatch(updateCustomers());
  }, []);

  const customers2 = useSelector((state: any) => state.user.robosOriginal);

  function filtrado(filtro: string) {
    const customersFiltrados = [];
    for (let i = 0; i < customers2.length; i++) {
      for (let j = 0; j < customers2[i].tipo.length; j++) {
        if (filtro === customers2[i].tipo[j]) {
          customersFiltrados.push(customers2[i]);
        }
      }
    }

    console.log(customersFiltrados);
    setCustomersFiltrados(customersFiltrados);
  }
  console.log(customersFiltrados, "customersFiltrados");
  useEffect(() => {
    dispatch(updateRobos(customersFiltrados));
  }, [customersFiltrados]);
  return (
    <div className={styles.container}>
      <Head>
        <title>DelincuenMapa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <div className={styles.filterContainer}>
          {tipo !== "" && (
            <div
              className={styles.filterBorrar}
              onClick={() => {
                setTipo(""), dispatch(clearFilter());
              }}
            >
              Borrar Filtros
            </div>
          )}
          {(tipo === "" || tipo === "Delito") && (
            <div className={styles.filter} onClick={() => setTipo("Delito")}>
              Delito
            </div>
          )}
          {(tipo === "" || tipo === "Articulos") && (
            <div className={styles.filter} onClick={() => setTipo("Articulos")}>
              Artículos
            </div>
          )}
          {(tipo === "" || tipo === "Dia") && (
            <div className={styles.filter} onClick={() => setTipo("Dia")}>
              <div className={styles.filterAlignment}>
                Día <img src="/sun.svg" className={styles.sun} />
              </div>
            </div>
          )}
          {(tipo === "" || tipo === "Noche") && (
            <div className={styles.filter} onClick={() => setTipo("Noche")}>
              <div className={styles.filterAlignment}>
                Noche <div className={styles.moon}></div>
              </div>
            </div>
          )}
          {tipo === "Delito" && (
            <>
              {metodo.map((i: any, key: any) => (
                <div
                  className={styles.filter}
                  key={key}
                  onClick={() => filtrado(i)}
                >
                  {i}
                </div>
              ))}
            </>
          )}
          {tipo === "Articulos" && (
            <>
              {categorias.map((i: any, key: any) => (
                <div
                  className={styles.filter}
                  key={key}
                  onClick={() => dispatch(filterArticulos(i))}
                >
                  {i}
                </div>
              ))}
            </>
          )}
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
