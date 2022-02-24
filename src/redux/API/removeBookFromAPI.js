/* eslint-disable camelcase */
import { removeBook } from '../books/books';

export const removeBookFromAPI = (id) => async (dispatch) => (
  fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/5zTkliAlHVC9mJgk6aLj/books/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.text())
    .then(dispatch(removeBook(id)))

);
export default removeBookFromAPI;
