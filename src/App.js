import React, { useState, useRef } from 'react';
import './styles/App.css';
import PostList from './components/PostList.jsx';


import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Description' },
    { id: 2, title: 'JS 2', body: 'Description' },
    { id: 3, title: 'JS 3', body: 'Description' },
  ]);

  

  return (
    <div className='app'>
      <PostForm />
      <PostList posts={posts} title='Post List JS' />
    </div>
  );
}

export default App;
