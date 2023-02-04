import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateCustomers = createAsyncThunk("updateCustomers", async () => {
  const res = await axios.get("http://localhost:3000/api/customer");
  return res.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: "rafael",
      email: "re@gmail.com",
    },
    robosOriginal: [],
    robos: [],
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    updateRobosOriginal: (state, action) => {
      state.robosOriginal = action.payload;
    },
    updateRobos: (state, action) => {
      state.robos = action.payload;
    },
    filterArticulos: (state, action) => {
      const articulosFiltrados = [];
      let customers2 = state.robosOriginal;
      for (let i = 0; i < customers2.length; i++) {
        for (let j = 0; j < customers2[i].articulo.length; j++) {
          if (action.payload === customers2[i].articulo[j]) {
            articulosFiltrados.push(customers2[i]);
          }
        }
      }
      state.robos = articulosFiltrados;
    },
    clearFilter: (state) => {
      state.robos = state.robosOriginal;
    },
  },
  extraReducers: {
    [updateCustomers.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateCustomers.fulfilled]: (state, action) => {
      state.pending = false;
      state.robosOriginal = action.payload;
      //state.robos = action.payload;
    },
    [updateCustomers.pending]: (state) => {
      state.pending = null;
      state.error = true;
    },
  },
});

export const {
  update,
  updateRobos,
  updateRobosOriginal,
  clearFilter,
  filterArticulos,
} = userSlice.actions; //aqui exportamos las acciones podemos tener varias.
export default userSlice.reducer;
