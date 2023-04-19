import React, { Component, createContext, useEffect, useState } from "react";
import Posts from "../components/Posts/Posts";
import PostUpdate from "../components/PostUpdate/PostUpdate";

// const PostContext = createContext();

let data = [
  {
    id: 111,
    title: "Happiness",
    author: "John",
  },
  {
    id: 112,
    title: "MIU",
    author: "Dean",
  },
  {
    id: 113,
    title: "Enjoy Life",
    author: "Jasmine",
  },
];

const Dashboard = () => {
  const [postData, setPostData] = useState([...data]);

  const updatePostTitle = (title) => {
    const newFirstPostData = { ...postData[0] };
    newFirstPostData.title = title;
    const newPostData = [newFirstPostData, ...postData.slice(1)];
    setPostData(newPostData);
  };

  return (
    <>
      <Posts postData={postData} />
      <PostUpdate updatePostTitle={updatePostTitle} />
    </>
  );
};

export default Dashboard;
