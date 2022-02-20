import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './components/book';
import Categories from './components/category';
import Navbar from './components/navbar';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>

    <Navbar />

    <Routes>
      <Route path="/books" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>

  </Provider>
);

export default App;
