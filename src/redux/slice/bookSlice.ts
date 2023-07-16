import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../components/Common/Interface";
interface IBookState {
  //   allBooks: IBook[] | null;
  singleBook: IBook | null;
}

const initialState: IBookState = {
  singleBook: null,
  //   allBooks: null,
};
const bookSlice = createSlice({
  name: "user ",
  initialState,
  reducers: {
    setSingleBook: (state, action: PayloadAction<any | null>) => {
      state.singleBook = action.payload;
    },
  },
});
export const { setSingleBook } = bookSlice.actions;

export default bookSlice.reducer;
