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
      valor: 0,
      tipo: [],
      descripcion: "",
    },
  });
  console.log(formik.values);
  //console.log(City, "city");
  console.log(City.getAllCities(), "allcities");
  //console.log(Country.getAllCountries());

  const allCities = City.getAllCities();
  let EcCities = allCities.filter((i: any) => {
    return i.countryCode === "EC";
  });
  console.log(EcCities, "electrónicos");
  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <div className={styles.labelContainer}>
          <label className={styles.title}>Ciudad</label>
          <select
            name="ciudad"
            value={formik.values.ciudad}
            onChange={formik.handleChange}
            className={styles.input}
          >
            {EcCities.map((i: any, key: any) => (
              <option>{i.name}</option>
            ))}
          </select>
        </div>
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
          {metodo.map((i: any) => (
            <div>
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
        </div>
        <div className={styles.labelContainer}>
          <label className={styles.title}>Selecciona qué te robaron</label>
          {categorias.map((i: any) => (
            <div>
              <input
                id="articulo"
                name="articulo"
                type="checkbox"
                value={i}
                onChange={formik.handleChange}
                className={styles.input2}
              />
              <label>{i}</label>
            </div>
          ))}
        </div>
        <div className={styles.labelContainer}>
          <label className={styles.title}>Valor aproximado de tu perdida</label>
          <input
            name="valor"
            type="integer"
            value={formik.values.valor}
            onChange={formik.handleChange}
            className={styles.input}
          />
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
      </form>
    </div>
  );
};
export default FormSub;
