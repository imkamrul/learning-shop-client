export interface RegisterData {
  password: string;

  email: string;
}
export interface IReview {
  name: string;
  rating: number;
  message: string;
  user: string;
}

export type IBook = {
  _id: string;
  book_img: string;
  rating: number;
  title: string;
  author: string;
  genre: string;
  publishDate: string;
  totalDownload: number;
  price: number;
  seller: string | [];
  reviews?: IReview[];
};
