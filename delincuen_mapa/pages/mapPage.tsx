import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { InferGetServerSidePropsType } from "next";
import Nav from "../components/Nav";
import Map from "../components/Map";
import dynamic from "next/dynamic";
import styles from "../styles/MapPage.module.scss";
import Loader from "../components/Loader";
import Board from "../components/Board";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  updateRobos,
  clearFilter,
  filterArticulos,
  filterDay,
  despacho,
  updateRobosOriginal,
} from "../redux/userSlice";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
//import { updateCustomers } from "../redux/userSlice";
import { metodo, categorias } from "../data";
// {
//   customers,
// }: InferGetServerSidePropsType<typeof getServerSideProps>

export default function mapPage() {
  const Map = dynamic(
    () => import("../components/Map"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  );

  const [apiInfo, setApiInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);
  const [tipo, setTipo] = useState("");
  const [subTipo, setSubTipo] = useState("");
  const [customersFiltrados, setCustomersFiltrados] = useState();

  function fetchData(url: string, retries = 3, delay = 1000, onData: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        // Call the onData callback function with the fetched data
        onData(data);
        resolve(data);
      } catch (error: any) {
        console.error(`Error fetching data: ${error.message}`);
        if (retries > 0) {
          console.log(`Retrying in ${delay / 1000} seconds...`);
          setTimeout(async () => {
            const data = await fetchData(url, retries - 1, delay, onData);
            resolve(data);
          }, delay);
        } else {
          reject(error);
        }
      }
    });
  }

  useEffect(() => {
    fetchData(`/api/customer`, 3, 1000, setApiInfo);
  }, []);

  const customers2 = useSelector((state: any) => state.user.robosOriginal);
  const despacho2 = useSelector((state: any) => state.user.despacho);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateRobosOriginal(apiInfo));
  }, [apiInfo]);

  const handleClick = (borrado: string) => {
    // 👇️ take the parameter passed from the Child component
    setTipo(borrado);
  };
  const handleClickMarker = (filterMarker: string) => {
    // 👇️ take the parameter passed from the Child component
    setTipo(filterMarker);
  };
  function filtrado(filtro: string) {
    const customersFiltrados = [];
    for (let i = 0; i < customers2.length; i++) {
      for (let j = 0; j < customers2[i].tipo.length; j++) {
        if (filtro === customers2[i].tipo[j]) {
          customersFiltrados.push(customers2[i]);
        }
      }
    }
    //@ts-ignore
    setCustomersFiltrados(customersFiltrados);
  }

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
                setSubTipo(""), setTipo(""), dispatch(clearFilter());
              }}
            >
              Borrar Filtros
            </div>
          )}
          {(tipo === "" || tipo === "Delito") && (
            <div
              className={tipo === "Delito" ? styles.filterClick : styles.filter}
              onClick={() => setTipo("Delito")}
            >
              Delito
            </div>
          )}
          {(tipo === "" || tipo === "Articulos") && (
            <div
              className={
                tipo === "Articulos" ? styles.filterClick : styles.filter
              }
              onClick={() => setTipo("Articulos")}
            >
              Objetos
            </div>
          )}
          {(tipo === "" || tipo === "Dia") && (
            <div
              className={tipo === "Dia" ? styles.filterClick : styles.filter}
              onClick={() => {
                setTipo("Dia"), dispatch(filterDay("Dia"));
              }}
            >
              <div className={styles.filterAlignment}>
                Día <img src="/sun.svg" className={styles.sun} />
              </div>
            </div>
          )}
          {(tipo === "" || tipo === "Noche") && (
            <div
              className={tipo === "Noche" ? styles.filterClick : styles.filter}
              onClick={() => {
                setTipo("Noche"), dispatch(filterDay("Noche"));
              }}
            >
              <div className={styles.filterAlignment}>
                Noche <div className={styles.moon}></div>
              </div>
            </div>
          )}
          {tipo === "Delito" && (
            <>
              {metodo.map((i: any, key: any) => (
                <div
                  className={subTipo === i ? styles.filterClick : styles.filter}
                  key={key}
                  onClick={() => {
                    filtrado(i), setSubTipo(i);
                  }}
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
                  className={subTipo === i ? styles.filterClick : styles.filter}
                  key={key}
                  onClick={() => {
                    dispatch(filterArticulos(i)), setSubTipo(i);
                  }}
                >
                  {i}
                </div>
              ))}
            </>
          )}
        </div>
        <div className={styles.subContainer}>
          <div className={styles.subSubContainer}>
            <Map customers={customers2} handleClickMarker={handleClickMarker} />
          </div>
          <div className={styles.subSubContainer}>
            {!customers2 ||
            customers2.length === 0 ||
            Object.keys(customers2).length === 0 ? (
              <div className={styles.loading}>
                <Loader />
              </div>
            ) : (
              <Board customers={customers2} handleClick={handleClick} />
            )}
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await axios.get("api/customer");
//   return {
//     props: {
//       customers: res.data,
//     },
//   };
// }

//https://catfact.ninja/fact
