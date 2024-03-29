import React from 'react'
import MyButton from './UI/button/MyButton'

const PostItem = ({post, number, remove}) => {
  return (
    <div className="post">
        <div className="post__content">
          <strong>{`${number + 1}. ${post.title}`}</strong>
          <div>
            {post.body}
          </div>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => remove(post)}>Удалить</MyButton>
        </div>
      </div>
  )
}

export default PostItem