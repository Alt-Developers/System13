import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAccountState = {
  isLoggedIn: false,
  userInfo: {
    firstName: "",
    lastName: "",
    email: "",
    img: "Main/src/assets/img/defaultProfile.jpg",
    token: "",
  },
};
const accountSlice = createSlice({
  name: "account",
  initialState: initialAccountState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userInfo = action.payload;
      localStorage.setItem("accToken", state.userInfo.token);

      if (state.userInfo.lastName.length > 7) {
        const shortLastName = state.userInfo.lastName.slice(0, 2);
        state.userInfo.lastName =
          shortLastName[0].toUpperCase() + shortLastName[1].toLowerCase() + ".";
      }
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userInfo = initialAccountState.userInfo;

      localStorage.removeItem("accToken");
    },
  },
});

const store = configureStore({
  reducer: accountSlice.reducer,
});

export const accountActions = accountSlice.actions;
export default store;
