import '../style/form.css';

const Form = () => (
  <section className="form-wrapper">
    <h3>ADD NEW BOOK</h3>
    <form>
      <input className="tittle" type="text" placeholder="Book title" required />
      <div className="category">
        <select className="options" required>
          <option hidden>Category</option>
          <option value="classic">Classic</option>
          <option value="fantasy">Fantasy</option>
          <option value="thriller">Thriller</option>
          <option value="western">Western</option>
          <option value="history">History</option>
          <option value="romance">Romance</option>
        </select>
      </div>
      <button className="add-btn" type="button">ADD BOOK</button>
    </form>
  </section>
);

export default Form;
