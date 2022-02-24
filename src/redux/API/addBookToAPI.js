import { addBook } from '../books/books';

export const addBookToAPI = (book) => async (adding) => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/5zTkliAlHVC9mJgk6aLj/books', {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    adding(addBook(book));
  }
};
export default addBookToAPI;
