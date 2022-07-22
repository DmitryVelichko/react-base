import React, { useState, useRef } from 'react';
import './styles/App.css';
import PostList from './components/PostList.jsx';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Description' },
    { id: 2, title: 'JS 2', body: 'Description' },
    { id: 3, title: 'JS 3', body: 'Description' },
  ]);

  const [post, setPost] = useState({title: '', body: ''})


  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  };

  return (
    <div className='app'>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({...post, title: e.target.value})}
        type='text'
        placeholder='Post name'
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({...post, body: e.target.value})}
        type='text'
        placeholder='Post description'
      />
      <MyButton onClick={addNewPost}>Create Post</MyButton>
      <PostList posts={posts} title='Post List JS' />
    </div>
  );
}

export default App;
