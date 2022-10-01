import React, {useState} from 'react'
import PostItem from './components/PostItem'
import './styles/App.css'

const App = () => {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'},
  ])

  return (
    <div className='App'>
      {posts.map((post) => {
       return <PostItem post={post} />
