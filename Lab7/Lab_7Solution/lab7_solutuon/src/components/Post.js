import "./Post.css";
function Post(props) {
  return (
    <div className="content">
      <h1>{props.id}</h1>
      <h1>{props.title}</h1>
      <h1>{props.author}</h1>
    </div>
  );
}
export default Post;
