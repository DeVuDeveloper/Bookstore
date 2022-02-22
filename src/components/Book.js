import { useSelector } from 'react-redux';
import Form from './Form';
import NewBook from './NewBook';
import Completed from './Completed';
import Chapter from './Chapter';
import '../style/book.css';

const Books = () => {
  const booksArr = useSelector((state) => state.booksReducer);

  return (

    <>
      <section className="book-wrapper">
        {booksArr.map((book) => (
          <div key={book.id} className="book-card">
            <NewBook props={book} />
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
