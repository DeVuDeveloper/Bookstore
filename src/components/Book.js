import Form from './Form';
import NewBook from './NewBook';
import Completed from './Completed';
import Chapter from './Chapter';
import '../style/book.css';

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
