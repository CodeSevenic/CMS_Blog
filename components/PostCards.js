import React from 'react';

const PostCards = ({ post }) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  );
};

export default PostCards;
