/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function NewBook({ book }) {
  const {

    id: item_id,
    category,
    title,
  } = book;

  const dispatch = useDispatch();

  const bookRemove = () => {
    dispatch(removeBook(item_id));
  };

  return (
    <div className="book">
      <div className="book-category">{category}</div>
      <div className="book-tittle">{title}</div>

      <div className="book-author">{item_id}</div>
      <div className="buttons">
        <button type="button" className="comments-btn">Comments</button>
        <button
          type="button"
          id={item_id}
          onClick={bookRemove}
          className="remove-btn"
        >
          Remove

        </button>
        <button type="button" className="edit-btn">Edit</button>
      </div>
    </div>
  );
}

NewBook.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  book: PropTypes.arrayOf.isRequired,
  id: PropTypes.string.isRequired,
};

export default NewBook;
