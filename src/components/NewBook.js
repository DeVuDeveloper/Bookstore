import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function NewBook({ props }) {
  const {
    id, category, tittle, author,
  } = props;

  const dispatch = useDispatch();

  const bookRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book">
      <div className="book-category">{category}</div>
      <div className="book-title">{tittle}</div>
      <div className="book-author">{author}</div>
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
  tittle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  props: PropTypes.arrayOf.isRequired,
  id: PropTypes.number.isRequired,
};

export default NewBook;
