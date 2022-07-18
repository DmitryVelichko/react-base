import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList.jsx';
import MyButton from './components/UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Description' },
    { id: 2, title: 'JS 2', body: 'Description' },
    { id: 3, title: 'JS 3', body: 'Description' },
  ]);


  return <div className='app'>
    <input type="text" placeholder='Post name' />
    <input type="text" placeholder='Post description' />
    <MyButton>Create Post</MyButton>
    <PostList posts={posts} title='Post List JS'/>
  </div>;
}

export default App;
