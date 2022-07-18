import React, { useState } from 'react';
import './styles/App.css'
import PostItem from './components/PostItem';

function App() {
  

  return (
    <div className="app">
      <PostItem post={{id: 1, title: 'JS', body: 'Description'}}/>
      
    </div>
  );
}

export default App;
