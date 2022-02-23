/* eslint-disable import/named */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksFromAPI } from '../redux/API/getBooksFromAPI';
import Form from './Form';
import NewBook from './NewBook';
import Completed from './Completed';
import Chapter from './Chapter';
import '../style/book.css';

const Books = () => {
  const booksArr = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksFromAPI());
  }, []);
  return (

    <>
      <section className="book-wrapper">
        {booksArr.map((book) => (
          <div key={book.id} id={book.id} className="book-card">
            <NewBook book={book} />
            <Completed />
            <Chapter />
          </div>

        ))}

      </section>
      <Form />

    </>

  );
};
export default Books;
