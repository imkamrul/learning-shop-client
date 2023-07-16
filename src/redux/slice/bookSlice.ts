import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../components/Common/Interface";
interface IBookState {
  allBooks: IBook[] | null;
  singleBook: IBook | null;
  bookName: string;
  author: string;
  genre: string;
  filteredBook: IBook[] | null;
}

const initialState: IBookState = {
  singleBook: null,
  allBooks: null,
  bookName: "All",
  author: "All",
  genre: "All",
  filteredBook: null,
};
const bookSlice = createSlice({
  name: "user ",
  initialState,
  reducers: {
    setSingleBook: (state, action: PayloadAction<any | null>) => {
      state.singleBook = action.payload;
    },
    setAlleBook: (state, action: PayloadAction<any | null>) => {
      state.allBooks = action.payload;
      state.filteredBook = action.payload;
    },
    setFilterBook: (state, action: PayloadAction<any | null>) => {
      state.filteredBook = action.payload;
    },
    setGenre: (state, action: PayloadAction<any | null>) => {
      state.genre = action.payload;
    },
    setAuthor: (state, action: PayloadAction<any | null>) => {
      state.author = action.payload;
    },
    setBookName: (state, action: PayloadAction<any | null>) => {
      state.bookName = action.payload;
    },
  },
});
export const {
  setSingleBook,
  setGenre,
  setBookName,
  setAuthor,
  setAlleBook,
  setFilterBook,
} = bookSlice.actions;

export default bookSlice.reducer;
