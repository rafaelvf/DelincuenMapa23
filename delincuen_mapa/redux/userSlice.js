import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: "rafael",
      email: "re@gmail.com",
    },
    robosOriginal: [],
    robos: {},
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
  },
});

export const { update, updateRobos, updateRobosOriginal } = userSlice.actions; //aqui exportamos las acciones podemos tener varias.
export default userSlice.reducer;
