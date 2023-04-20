import React from "react";

const PostDetail = (probes) => {
  return (
    <div className="postDetail-container">
      <h2>PostDetails</h2>
      <h3>{probes.title}</h3>
      <h3>{probes.author}</h3>
      <div className="DetailsButton">
        <button className="ButtonRed"> Edit</button>
        <button className="ButtonRed"> Delete</button>
      </div>
    </div>
  );
};

export default PostDetail;
