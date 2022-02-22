/* eslint-disable max-len */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import '../style/form.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const ChangeTittle = (element) => setTitle(element.target.value);
  const ChangeAuthor = (element) => setAuthor(element.target.value);
  const ChangeCategory = (element) => setCategory(element.target.value);
  const clearFieldTittle = () => setTitle('');
  const clearFieldAuthor = () => setAuthor('');
  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    clearFieldTittle();
    clearFieldAuthor();
  };

  return (
    <section className="form-wrapper">
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={submitBookToStore}>
        <input className="tittle" value={title} onChange={ChangeTittle} type="text" placeholder="Book title" required />
        <input className="author" value={author} onChange={ChangeAuthor} type="text" placeholder="Book author" required />
        <div className="category">

          <select className="options" default value={category} id="category" name="category" onChange={ChangeCategory}>
            <option hidden>Category</option>
            <option value="classic">Classic</option>
            <option value="fantasy">Fantasy</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="history">History</option>
            <option value="romance">Romance</option>
          </select>
        </div>

        <button className="add-btn" type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};
export default Form;
