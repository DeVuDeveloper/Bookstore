import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookToAPI } from '../redux/API/addBookToAPI';
import '../style/form.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const ChangeTittle = (element) => setTitle(element.target.value);

  const ChangeCategory = (element) => setCategory(element.target.value);

  const id = uuidv4();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: id,
      title,
      category,
    };
    dispatch(addBookToAPI(newBook));

    setTitle('');
    setCategory('');
  };

  return (
    <section className="form-wrapper">
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={submitBookToStore}>
        <input className="tittle" value={title} onChange={ChangeTittle} type="text" placeholder="Book title" required />
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
