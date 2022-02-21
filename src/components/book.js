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
        </div>
      ))}
      <div className="line" />

    </section>
  );
};

export default Books;
