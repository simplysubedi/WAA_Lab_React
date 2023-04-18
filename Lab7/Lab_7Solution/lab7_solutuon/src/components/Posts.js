import React, { useState } from "react";
import Post from "./Post";

function Posts(props) {
  const [selected, setSelected] = useState(null);

  const handleClick = (id) => {
    const selected = props.data.find((item) => item.id === id);
    setSelected(selected);
  };

  console.log(props.data);
  return (
    <>
      <div className="posts-container">
        {props.data.map((item) => (
          <Post
            key={item.id}
            post={item}
            onClick={() => handleClick(item.id)}
          />
        ))}
      </div>

      <div className="content-clicked">
        {selected && (
          <div>
            <h3 className="underline">{selected.title}</h3>
            <p>{selected.author}</p>
          </div>
        )}
        <p>This is the content in the post....</p>

        <div className="center-text">
          <p>
            <a className="link-color-change" href="https://google.com">
              edit
            </a>
          </p>

          <th className="spaced-text" />
          <p>
            <a className="link-color-change" href="https://google.com">
              delete
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Posts;
