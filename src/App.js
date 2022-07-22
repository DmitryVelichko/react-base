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

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  

  return (
    <div className='app'>
      <PostForm create={createPost} />
      {posts.length !== 0 
      ? <PostList posts={posts} remove={removePost} title='Post List JS' />
      : <div>Посты не найдены</div>

      }
    </div>
  );
}

export default App;
