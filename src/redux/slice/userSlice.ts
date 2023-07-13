import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
interface IUserState {
  user: {
    email: string | null;
    user_name: string | null;
    role: string | null;
  };
}

const initialState: IUserState = {
  user: {
    user_name: null,
    role: null,
    email: null,
  },
};
const userSlice = createSlice({
  name: "user ",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any | null>) => {
      state.user = action.payload;
    },
  },
});
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
