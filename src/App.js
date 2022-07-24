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
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className='app'>
      <PostForm create={createPost} />
        <div>
          <select>
            <option value="value1">Name</option>
            <option value="value1">Description</option>
          </select>
        </div>
      {posts.length ? (
        <PostList posts={posts} remove={removePost} title='Post List JS' />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
      )}
    </div>
  );
}

export default App;
