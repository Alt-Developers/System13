import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userInfo: {
    firstName: "",
    lastName: "",
    email: "",
    img: "",
    bio: "",
  },
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userInfo = action.payload;

      if (state.userInfo.lastName.length > 7) {
        const shortLastName = state.userInfo.lastName.slice(0, 2);
        state.userInfo.lastName =
          shortLastName[0].toUpperCase() + shortLastName[1].toLowerCase() + ".";
      }
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userInfo = initialState.userInfo;
    },
  },
});

const store = configureStore({
  reducer: accountSlice.reducer,
});

export const accountActions = accountSlice.actions;
export default store;
