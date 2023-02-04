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
      console.log(state, "state");
      state.robos = action.payload;
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

export const { update, updateRobos, updateRobosOriginal, clearFilter } =
  userSlice.actions; //aqui exportamos las acciones podemos tener varias.
export default userSlice.reducer;
