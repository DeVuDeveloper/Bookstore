import React from 'react';
import progress from '../img/progress.png';
import '../style/completed.css';

const Completed = () => (

  <>
    <div className="book-completed">
      <img className="book-image" src={progress} alt="progress" />
      <div>
        <span className="progress">{`${Math.floor(Math.random() * 100) + 1}%`}</span>
        <br />
        <span className="completed">Completed</span>
      </div>
    </div>
    <div className="line" />
  </>
);

export default Completed;
