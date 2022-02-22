import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Navbar from './components/Navbar';
import Books from './components/Book';
import Categories from './components/Category';
import './App.css';

function App() {
  return (

    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </Provider>
    </>

  );
}

export default App;
