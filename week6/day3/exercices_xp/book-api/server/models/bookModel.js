let books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho", publishedYear: 1988 },
  { id: 2, title: "1984", author: "George Orwell", publishedYear: 1949 },
];

export const getAllBooks = () => books;

export const getBookById = (id) => books.find((b) => b.id === id);

export const createBook = (bookData) => {
  const newBook = { id: books.length + 1, ...bookData };
  books.push(newBook);
  return newBook;
};

export const updateBook = (id, updatedData) => {
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return null;
  books[index] = { ...books[index], ...updatedData };
  return books[index];
};

export const deleteBook = (id) => {
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return false;
  books.splice(index, 1);
  return true;
};
