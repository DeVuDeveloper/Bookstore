import React from 'react';
import PropTypes from 'prop-types';

function NewBook({ props }) {
  const { category, tittle, author } = props;
  return (
    <div className="book">
      <div className="book-category">{category}</div>
      <div className="book-title">{tittle}</div>
      <div className="book-author">{author}</div>
      <div className="buttons">
        <button type="button" className="comments-btn">Comments</button>
        <button type="button" className="remove-btn">Remove</button>
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

};

export default NewBook;
