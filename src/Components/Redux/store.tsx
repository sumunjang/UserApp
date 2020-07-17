import { createSlice, configureStore } from "@reduxjs/toolkit";

const userInformation = createSlice({
  name: "userInformation",
  initialState: {
    username: "aa",
  },
  reducers: {
    get: (state, action) => {
      console.log(state);
    },
  },
});

const store = configureStore({ reducer: userInformation.reducer });
export default store;
