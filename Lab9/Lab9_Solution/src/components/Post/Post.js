import React, { Component } from "react";
import "./Post.css";

const Post = ({ postObj }) => {
  return (
    <div className="post-container">
      <label>ID: {postObj.id}</label>
      <label>Title: {postObj.title}</label>
      <label>Author:{postObj.author}</label>
    </div>
  );
};

export default Post;
