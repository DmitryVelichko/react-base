import React, { useState, useMemo } from 'react';
import './styles/App.css';
import PostList from './components/PostList.jsx';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/myModal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'bbbbJS', body: 'bbbbDescription' },
    { id: 2, title: 'ccccJS 2', body: 'ccccDescription' },
    { id: 3, title: 'aaaaJS 3', body: 'aaaaDescription' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const [modal, setModal] = useState(false);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className='app'>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create User
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        posts={sortedAndSearchedPosts}
        remove={removePost}
        title='Post List JS'
      />
    </div>
  );
}

export default App;
