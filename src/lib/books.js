import books from '@/data/books.json';

export function getAllBooks() {
  return books;
}

export function getBookById(id) {
  return books.find((book) => book.id === String(id));
}
