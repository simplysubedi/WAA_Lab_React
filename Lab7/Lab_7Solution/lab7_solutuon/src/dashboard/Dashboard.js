import React, { useRef, useState } from "react";
import Posts from "../components/Posts";

const data = [
  { id: 111, title: "Happiness", author: "John" },
  { id: 112, title: "MIU", author: "Dean" },
  { id: 113, title: "Enjoy Life", author: "Jasmine" },
];

function Dashboard() {
  const [posts, setPosts] = useState([...data]);
  const inputRef = useRef();

  const handleClick = () => {
    changeFirstPostTitle(inputRef.current.value);
  };

  function clearForm() {
    inputRef.current.value = "";
  }

  function changeFirstPostTitle(newTitle) {
    const newFirstPost = { ...posts[0] };
    newFirstPost.title = newTitle;
    const newPosts = [newFirstPost, ...posts.slice(1)];
    setPosts(newPosts);
    clearForm();
  }

  return (
    <div>
      <Posts data={posts} />
      <div className="Field">
        <input ref={inputRef} type="text" />
      </div>

      <div className="Button">
        <button onClick={handleClick}> Change Name</button>
      </div>
    </div>
  );
}

export default Dashboard;
