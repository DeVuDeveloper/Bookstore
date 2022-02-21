import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Books from './components/book';
import Form from './components/form';
import Categories from './components/category';
import './App.css';

function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Books />
              <Form />
            </>
)}
        />
        <Route path="categories" element={<Categories />} />
      </Routes>

    </>

  );
}

export default App;
