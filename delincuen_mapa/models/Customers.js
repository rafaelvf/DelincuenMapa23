import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    coordenadas: {
      type: Object,
      trim: true,
      required: true,
    },
    fechaHora: {
      type: String,
      trim: true, //trim sirve para que se boore al ser almacenado
    },
    articulo: {
      type: Array,
      trim: true,
    },
    valor: {
      type: Number,
      min: 0,
      trim: true,
    },
    tipo: {
      type: Array,
      trim: true,
    },
    descripcion: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true } //esto sirve para que nos cree una hora y fecha. es uitl mas no necesario
);

export default mongoose.models.Customers ||
  mongoose.model("Customers", ProductSchema); //las C en customers tiene que ser o mayus o no
