import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../components/Common/Interface";

const initialState: IUserState = {
  user: {
    id: null,
    fullName: null,
    role: null,
    email: null,
  },
  token: null,
};
const userSlice = createSlice({
  name: "user ",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any | null>) => {
      state.user = action.payload;
    },
    setUserToken: (state, action: PayloadAction<any | null>) => {
      state.token = action.payload;
    },
  },
});
export const { setUser, setUserToken } = userSlice.actions;

export default userSlice.reducer;
