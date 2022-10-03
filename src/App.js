import React, {useState} from 'react'
import PostList from './components/PostList'
import './styles/App.css'

const App = () => {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'},
  ])

  return (
    <div className='App'>
      <form>
        <input type="text" placeholder='Название поста'/>
        <input type="text" placeholder='Описание поста'/>
        <button>Создать пост</button>
      </form>
      <PostList posts={posts} title='Посты про JS'/>
    </div>
  )
}

export default App