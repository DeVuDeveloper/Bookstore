import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Book';
import Categories from './components/Category';
import './App.css';

function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>

    </>

  );
}

export default App;
