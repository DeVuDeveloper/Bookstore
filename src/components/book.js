import '../style/book.css';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from './redux/books/books';

const dispatch = useDispatch();
const submitBookToStore = () => {
  const newBook = {
    id, // make sure it's unique
    title,
    author,
  };

  // dispatch an action and pass it the newBook object (your action's payload)
  dispatch(addBook(newBook));
};

  <button onClick={submitBookToStore}>Add Book</button>;

const Books = () => {
  const booksArr = [
    {
      id: 1,
      category: 'Romance',
      tittle: 'The Higgler',
      author: 'A.E.Coppard',
    },
  ];

  return (
    <section className="book-wrapper">
      {booksArr.map((book) => (
        <div key={book.id} className="book-card">
          <div className="book">
            <div className="book-category">{book.category}</div>
            <div className="book-title">{book.tittle}</div>
            <div className="book-author">{book.author}</div>
            <div className="buttons">
              <button type="button" className="comments-btn">Comments</button>
              <button type="button" className="remove-btn">Remove</button>
              <button type="button" className="edit-btn">Edit</button>
            </div>
          </div>
          <div className="completed">
            <h2>
              0%
              <br />
              <span>Completed</span>
            </h2>
          </div>
          <div className="update-progress">
            <h3>CURRENT CHAPTER</h3>
            <h5>Introduction</h5>
            <button className="btn" type="button">UPDATE PROGRESS</button>
          </div>
        </div>

      ))}

    </section>
  );
};

export default Books;
