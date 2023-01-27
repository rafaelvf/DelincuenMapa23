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
        <div>
          <label>Fecha y hora</label>
          <input
            name="fecha"
            type="datetime-local"
            value={formik.values.fecha}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label>Selecciona qué te robaron</label>
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
        <div>
          <label>Valor aproximado de tu perdida</label>
          <input
            name="valor"
            type="integer"
            value={formik.values.valor}
            onChange={formik.handleChange}
          />
        </div>
      </form>
    </div>
  );
};
export default FormSub;
