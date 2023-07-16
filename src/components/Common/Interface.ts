export interface RegisterData {
  password: string;

  email: string;
}
export interface IReview {
  title: string;
  name: string;
  rating: number;
  message: string;
  user: string | null;
}

export type IBook = {
  _id?: string;
  book_img: string;
  rating: number;
  title: string;
  author: string;
  genre: string;
  publishDate: string;
  totalDownload: number;
  price: number;
  seller?: string | [] | null;
  reviews?: IReview[];
};
export interface IUserState {
  user: {
    id: string | null;
    email: string | null;
    fullName?: string | null;
    role: string | null;
  };
  token: string | null;
}
