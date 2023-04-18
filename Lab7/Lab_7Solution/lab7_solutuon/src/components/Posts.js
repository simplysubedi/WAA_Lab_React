import Post from "./Post";

function Posts(props) {
  const posts = [
    { id: 111, title: "Happiness", author: "John" },
    { id: 112, title: "MIU", author: "Dean" },
    { id: 113, title: "Enjoy Life", author: "Jasmine" },
  ];

  const postList = posts.map((p) => {
    return <Post id={p.id} key={p.id} title={p.title} author={p.author} />;
  });

  return postList;
}

export default Posts;
