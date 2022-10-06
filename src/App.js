import React, { useState, useRef } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}} />
      <div>
        <select>
          <option value='value1'>По названию</option>
          <option value='value2'>По описанию</option>
        </select>
      </div>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title='Посты про JS' />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      )}
    </div>
  );
};

export default App;
