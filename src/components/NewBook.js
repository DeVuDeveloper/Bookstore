import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromAPI } from '../redux/API/removeBookFromAPI';
import '../style/newbook.css';

function NewBook({ book }) {
  const {

    item_id: id,
    category,
    title,
  } = book;

  const dispatch = useDispatch();

  const bookRemove = () => {
    dispatch(removeBookFromAPI(id));
  };

  return (
    <div className="book">
      <div className="book-category">{category.charAt(0).toUpperCase() + category.slice(1)}</div>
      <div className="book-tittle">{title}</div>
      <div className="buttons">
        <button type="button" className="comments-btn">Comments</button>
        <button
          type="submit"
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
};

export default NewBook;
