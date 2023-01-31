import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/FormSub.module.scss";
import { useFormik } from "formik";
import { Country, State, City } from "country-state-city";

const categorias = [
  "Billetera",
  "Carro",
  "Casa",
  "Dispositivos electrónicos",
  "Joyas",
  "Otros",
];

const metodo = [
  "Asalto a transeúntes",
  "Robo de bienes y artículos menores",
  "Robo de vehículos",
  "Robo a casas habitación",
  "Violencia",
  "Otros",
];

const FormSub = () => {
  //@ts-ignore
  const formik = useFormik({
    initialValues: {
      ciudad: "",
      fecha: "",
      articulo: [],
      valor: "",
      tipo: [],
      descripcion: "",
    },
  });
  console.log(formik.values);

  // console.log(City.getAllCities(), "allcities");

  // const allCities = City.getAllCities();
  // let EcCities = allCities.filter((i: any) => {
  //   return i.countryCode === "EC";
  // });

  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        {/* <div className={styles.labelContainer}>
          <label className={styles.title}>Ciudad</label>
          <select
            name="ciudad"
            value={formik.values.ciudad}
            onChange={formik.handleChange}
            className={styles.input}
          >
            {EcCities.map((i: any, key: any) => (
              <option key={key}>{i.name}</option>
            ))}
          </select>
        </div> */}
        <div className={styles.labelContainer}>
          <label className={styles.title}>Fecha & Hora</label>
          <input
            name="fecha"
            type="datetime-local"
            value={formik.values.fecha}
            onChange={formik.handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.labelContainer}>
          <label className={styles.title}>Delito</label>
          <div className={styles.grid}>
            {metodo.map((i: any, key: any) => (
              <label key={key}>
                <input
                  id="tipo"
                  name="tipo"
                  type="checkbox"
                  value={i}
                  onChange={formik.handleChange}
                  className={styles.input22}
                />
                <span className={styles.checkSpan}>{i}</span>
              </label>
            ))}
          </div>
        </div>
        {/* <div className={styles.labelContainer}>
          <label className={styles.title}>Delito</label>
          {metodo.map((i: any, key: any) => (
            <div key={key}>
              <input
                id="tipo"
                name="tipo"
                type="checkbox"
                value={i}
                onChange={formik.handleChange}
                className={styles.input2}
              />
              <label>{i}</label>
            </div>
          ))}
        </div> */}
        <div className={styles.labelContainer}>
          <label className={styles.title}>Selecciona qué te robaron</label>
          <div>
            {categorias.map((i: any, key: any) => (
              <label key={key}>
                <input
                  id="articulo"
                  name="articulo"
                  type="checkbox"
                  value={i}
                  onChange={formik.handleChange}
                  className={styles.input22}
                />
                <span className={styles.checkSpan}>{i}</span>
              </label>
            ))}
          </div>
        </div>
        <div className={styles.labelContainer}>
          <label className={styles.title}>Valor de la perdida</label>
          <div className={styles.sign}>
            <input
              name="valor"
              type="number"
              value={formik.values.valor}
              onChange={formik.handleChange}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.labelContainer}>
          <label className={styles.title}>Detalles</label>
          <textarea
            name="descripcion"
            value={formik.values.descripcion}
            onChange={formik.handleChange}
            className={styles.input3}
          />
        </div>
        <div>
          <button type="submit" className={styles.button}>
            Registrar{" "}
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormSub;
