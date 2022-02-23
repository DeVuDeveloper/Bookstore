import { addBook } from '../books/books';

export const addBookToAPI = (data) => async (store) => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/5zTkliAlHVC9mJgk6aLj/books', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    store(addBook(data));
  }
};
export default addBookToAPI;
