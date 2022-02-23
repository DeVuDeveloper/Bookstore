/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function NewBook({ book }) {
  const {

    id, category, title,
  } = book;

  const dispatch = useDispatch();

  const bookRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book">
      <div className="book-category">{category}</div>
      <div className="book-tittle">{title}</div>

      <div className="book-author">{id}</div>
      <div className="buttons">
        <button type="button" className="comments-btn">Comments</button>
        <button type="button" id={id} onClick={bookRemove} className="remove-btn">Remove</button>
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
