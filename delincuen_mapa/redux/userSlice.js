import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: "rafael",
      email: "re@gmail.com",
    },
    robos: {},
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    updateRobos: (state, action) => {
      state.robos = action.payload;
    },
  },
});

export const { update, updateRobos } = userSlice.actions; //aqui exportamos las acciones podemos tener varias.
export default userSlice.reducer;
