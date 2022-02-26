import '../style/chapter.css';

import React from 'react';

const Chapter = () => (
  <div className="update-progress">
    <h3>CURRENT CHAPTER</h3>
    <h5>
      Chapter
      {' '}
      {Math.floor(Math.random() * 100) + 1}
    </h5>
    <button className="btn" type="button">UPDATE PROGRESS</button>
  </div>
);

export default Chapter;
