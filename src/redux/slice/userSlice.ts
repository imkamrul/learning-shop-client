import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
interface IUserState {
  user: {
    email: string | null;
    fullName?: string | null;
    role: string | null;
  };
  token: string | null;
}

const initialState: IUserState = {
  user: {
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
