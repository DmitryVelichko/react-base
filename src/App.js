import React, { useState } from 'react';
import './styles/App.css'

function App() {
  

  return (
    <div className="app">
      <div className="post">
        <div className="post__content">
          <strong>1. JS</strong>
          <div>
            Lorem ipsum, sit amet.
          </div>
        </div>
        <div className="post__btns">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
