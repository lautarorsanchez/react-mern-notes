import { usePosts } from "../context/postContext";
import { Link } from 'react-router-dom'


export function HomePage() {
  const { posts } = usePosts();

if(posts.length === 0)
  return (
    <div>
      <h1>No posts</h1>
      <Link to="/new"> Create post </Link>
    </div>
  ) 

  return (
    <div className="text-white">
      <Link to="/new"> Create post </Link>
      {posts.map((post) => (
        <div key={post._id}>{post.title}</div>
      ))}
    </div>
  );
}
