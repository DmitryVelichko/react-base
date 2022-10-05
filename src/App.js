import React, {useState, useRef} from 'react'
import PostForm from './components/PostForm'
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
      <PostForm />
      <PostList posts={posts} title='Посты про JS'/>
    </div>
  )
}

export default App