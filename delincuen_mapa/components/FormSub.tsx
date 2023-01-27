import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/FormSub.module.scss";
import { useFormik } from "formik";

const categorias = [
  "Billetera",
  "Carro",
  "Casa",
  "Dispositivos electrónicos",
  "Joyas",
  "Otros",
];

const metodo = [
  "Caminando por la calle",
  "En mi auto",
  "En transporte público",
  "En un lugar público",
  "Entraron a mi hogar",
  "Otros",
];

const FormSub = () => {
  //@ts-ignore
  const formik = useFormik({
    initialValues: {
      fecha: "",
      articulo: [],
      valor: 0,
      tipo: [],
      descripcion: "",
    },
  });
  console.log(formik.values);
  return (
    <div className={styles.container}>
      <form>
        <div className={styles.labelContainer}>
          <label className={styles.title}>Fecha y hora</label>
          <input
            name="fecha"
            type="datetime-local"
            value={formik.values.fecha}
            onChange={formik.handleChange}
            className={styles.input}
          />
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
          <label className={styles.title}>Tipo de crimen</label>
          {metodo.map((i: any) => (
            <div>
              <input
                id="tipo"
                name="tipo"
                type="checkbox"
                value={i}
                onChange={formik.handleChange}
              />
              <label>{i}</label>
            </div>
          ))}
        </div>
        <div className={styles.labelContainer}>
          <label className={styles.title}>Detalles</label>
          <input
            name="descripcion"
            type="text"
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
