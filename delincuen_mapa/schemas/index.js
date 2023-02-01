import * as yup from "yup";

export const basicSchema = yup.object().shape({
  fecha: yup.string().required("Escoge una fecha"),
  articulo: yup.array(),
  valor: yup.number(),
  tipo: yup.array().min(1, "Escoge un delito").required("Escoge un tipo"),
  descripcion: yup.string().required("Escribe detalles"),
});
