export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// const bookImages = [
//   "https://res.cloudinary.com/dnlnzptzc/image/upload/v1689523385/product-details-1_1.webp",
//   "https://res.cloudinary.com/dnlnzptzc/image/upload/v1689523386/product-details-3.webp",
//   "https://res.cloudinary.com/dnlnzptzc/image/upload/v1689523386/product-details-2.webp",
//   "https://res.cloudinary.com/dnlnzptzc/image/upload/v1689523324/product-details-1.webp",
// ];
export const bookGenres = [
  "Science Fiction",
  "Mystery",
  "Fantasy",
  "Romance",
  "Thriller",
  "Biography",
  "Historical Fiction",
  "Self-Help",
  "Horror",
  "Travel",
];

export const bookAuthors = [
  "John Smith",
  "Emily Brown",
  "David Johnson",
  "Sarah Thompson",
  "Michael Davis",
  "Olivia Wilson",
  "Benjamin Martinez",
  "Emma Lee",
  "Christopher Moore",
  "Ava Harris",
];

// const sellerIds = ["64b2c9b993872ea5902069ad", "64b3bacb298cb7fbfb5db5df"];

// const generateDummyBooks = (count: number): IBook[] => {
//   const dummyBooks: IBook[] = [];

//   for (let i = 0; i < count; i++) {
//     const randomImage =
//       bookImages[Math.floor(Math.random() * bookImages.length)];
//     const randomSellerId =
//       sellerIds[Math.floor(Math.random() * sellerIds.length)];

//     const dummyBook: IBook = {
//       book_img: randomImage,
//       rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1 and 5
//       title: `Book ${i + 1}`,
//       author: bookAuthors[Math.floor(Math.random() * bookAuthors.length)],
//       genre: bookGenres[Math.floor(Math.random() * bookGenres.length)],
//       publishDate: "2023-07-16", // Replace with appropriate publish date format
//       totalDownload: Math.floor(Math.random() * 1000), // Random total downloads
//       price: Math.floor(Math.random() * 100) + 1, // Random price between 1 and 100
//       seller: randomSellerId,
//       reviews: [],
//     };

//     dummyBooks.push(dummyBook);
//   }

//   return dummyBooks;
// };

// const dummyBooks = generateDummyBooks(40);

// console.log(dummyBooks);
