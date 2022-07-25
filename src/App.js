import React, { useState, useMemo } from 'react';
import './styles/App.css';
import PostList from './components/PostList.jsx';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'bbbbJS', body: 'bbbbDescription' },
    { id: 2, title: 'ccccJS 2', body: 'ccccDescription' },
    { id: 3, title: 'aaaaJS 3', body: 'aaaaDescription' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [SearchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    console.log("функция отработала")
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  },[selectedSort, posts])


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className='app'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput 
        value={SearchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder='Search...' />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Sort by'
          options={[
            { value: 'title', name: 'By name' },
            { value: 'body', name: 'By description' },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList posts={sortedPosts} remove={removePost} title='Post List JS' />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
      )}
    </div>
  );
}

export default App;
