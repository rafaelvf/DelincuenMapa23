import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateCustomers = createAsyncThunk("updateCustomers", async () => {
  const res = await axios.get("/api/customer");
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
    loading: false,
    error: null,
    despacho: false,
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
    filterDay: (state, action) => {
      let articulosFiltrados = [];
      let customers2 = state.robosOriginal;
      const dia = customers2.filter((i) => {
        if (
          i.fechaHora.split("T")[1] > "06:29" &&
          i.fechaHora.split("T")[1] < "18:31"
        ) {
          return i;
        }
      });
      const noche = customers2.filter((i) => {
        if (
          i.fechaHora.split("T")[1] < "06:30" ||
          i.fechaHora.split("T")[1] > "18:30"
        ) {
          return i;
        }
      });
      if (action.payload === "Dia") {
        articulosFiltrados = dia;
      } else if (action.payload === "Noche") {
        articulosFiltrados = noche;
      }
      state.robos = articulosFiltrados;
    },
    filterId: (state, action) => {
      let id = [];
      let robos = state.robosOriginal;
      for (let i = 0; i < robos.length; i++) {
        if (robos[i]._id === action.payload) {
          id.push(robos[i]);
        }
      }
      state.robos = id;
    },
    despacho: (state, action) => {
      state.despacho = action.payload;
    },
    clearFilter: (state) => {
      state.robos = state.robosOriginal;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(updateCustomers.pending, (state) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(updateCustomers.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.robosOriginal = action.payload;
  //     state.error = "";
  //   });
  //   builder.addCase(updateCustomers.rejected, (state, action) => {
  //     state.loading = false;
  //     state.robosOriginal = [];
  //     state.error = action.error.message;
  //   });
  // },
});

export const {
  update,
  updateRobos,
  updateRobosOriginal,
  clearFilter,
  filterArticulos,
  filterDay,
  filterId,
  despacho,
} = userSlice.actions; //aqui exportamos las acciones podemos tener varias.
export default userSlice.reducer;

// {
//   [updateCustomers.pending]: (state) => {
//     state.loading = true;
//     state.error = null;
//   },
//   [updateCustomers.fulfilled]: (state, action) => {
//     state.loading = false;
//     state.robosOriginal = action.payload;
//     //state.robos = action.payload;
//   },
//   [updateCustomers.rejected]: (state, action) => {
//     state.error = action.error;
//     state.loading = false;
//   },
// },
