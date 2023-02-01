import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/FormSub.module.scss";
import { useFormik } from "formik";
import { basicSchema } from "../schemas/index";
import axios from "axios";

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

const FormSub = ({ coord }: any) => {
  const [validate, setValidate] = useState(false);
  const onSubmit = (values: any, actions: any) => {
    handleSubmit();
  };
  //@ts-ignore
  const formik = useFormik({
    initialValues: {
      fecha: "",
      articulo: [],
      valor: 0,
      tipo: [],
      descripcion: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  const post = {
    coordenadas: coord,
    fechaHora: formik.values.fecha,
    articulo: formik.values.articulo,
    valor: formik.values.valor,
    tipo: formik.values.tipo,
    descripcion: formik.values.descripcion,
  };
  console.log(post, "post");

  async function handleSubmit() {
    //i.preventDefault();
    if (coord.lat === 1 && coord.lng === 1) {
      console.log("vali v");
      alert("Por favor selccionar en el mapa");
    } else {
      let res = await axios.post(`http://localhost:3000/api/customer`, post);
      alert("Se ha creado correctamente!");
      console.log(res.data);
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
        <div className={styles.labelContainer}>
          <label className={styles.title}>
            Fecha & Hora<sup className={styles.sup}>*</sup>
          </label>
          <input
            name="fecha"
            type="datetime-local"
            onBlur={formik.handleBlur}
            value={formik.values.fecha}
            onChange={formik.handleChange}
            className={styles.input}
          />
          {formik.errors.fecha && formik.touched.fecha && (
            <span className={styles.errorMessage}>{formik.errors.fecha}</span>
          )}
        </div>
        <div className={styles.labelContainer}>
          <label className={styles.title}>
            Delito<sup className={styles.sup}>*</sup>
          </label>
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
                <span onBlur={formik.handleBlur} className={styles.checkSpan}>
                  {i}
                </span>
              </label>
            ))}
          </div>
          {formik.errors.tipo && validate && (
            <span className={styles.errorMessage2}>{formik.errors.tipo}</span>
          )}
        </div>

        <div className={styles.labelContainer}>
          <label className={styles.title2}>
            Selecciona qué te robaron<sup className={styles.sup}>*</sup>
          </label>
          <div>
            {categorias.map((i: any, key: any) => (
              <label key={key}>
                <input
                  id="articulo"
                  name="articulo"
                  type="checkbox"
                  value={i}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className={styles.input22}
                />
                <span className={styles.checkSpan}>{i}</span>
              </label>
            ))}
          </div>
          {formik.errors.articulo && validate && (
            <span className={styles.errorMessage2}>
              {formik.errors.articulo}
            </span>
          )}
        </div>
        <div className={styles.labelContainer}>
          <label className={styles.title2}>Valor de la perdida</label>
          <div className={styles.sign}>
            <input
              name="valor"
              type="number"
              value={formik.values.valor}
              onChange={formik.handleChange}
              className={styles.input}
            />
            <span className={styles.dollar}>$</span>
          </div>
        </div>

        <div className={styles.labelContainer}>
          <label className={styles.title}>
            Detalles<sup className={styles.sup}>*</sup>
          </label>
          <textarea
            name="descripcion"
            onBlur={formik.handleBlur}
            value={formik.values.descripcion}
            onChange={formik.handleChange}
            className={styles.input3}
          />
        </div>
        {formik.errors.descripcion && formik.touched.descripcion && (
          <span className={styles.errorMessage2}>
            {formik.errors.descripcion}
          </span>
        )}
        <div>
          <button
            //disabled={formik.isSubmitting}
            type="submit"
            onClick={() => setValidate(true)}
            className={styles.button}
          >
            Registrar{" "}
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormSub;
