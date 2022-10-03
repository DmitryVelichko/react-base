import React from 'react';

const PostList = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Список постов</h1>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
};

export default PostList;
