import { getBooks } from '../books/books';

export const getBooksFromAPI = () => async (storing) => {
  const result = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/5zTkliAlHVC9mJgk6aLj/books');
  const booksArr = await result.json();
  const books = Object.entries(booksArr).map(([id, props]) => {
    const { category, title } = props[0];
    return {
      id,
      category,
      title,
    };
  });
  storing(getBooks(books));
};

export default getBooksFromAPI;
