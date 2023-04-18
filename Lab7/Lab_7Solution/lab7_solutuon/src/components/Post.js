import React from "react";

function Post(props) {
  const { post, onClick } = props;
  return (
    <div className="Content" onClick={onClick}>
      <h3>Id: {post.id}</h3>
      <h3>Title: {post.title}</h3>
      <h3>Author: {post.author}</h3>
    </div>
  );
}

export default Post;
