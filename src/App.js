import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList.jsx';


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Description' },
    { id: 2, title: 'JS 2', body: 'Description' },
    { id: 3, title: 'JS 3', body: 'Description' },
  ]);

  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Python', body: 'Description' },
    { id: 2, title: 'Python 2', body: 'Description' },
    { id: 3, title: 'Python 3', body: 'Description' },
  ]);

  return <div className='app'>
    <PostList posts={posts} title='Post List JS'/>
    <PostList posts={posts2} title='Post List Python'/>
  </div>;
}

export default App;
