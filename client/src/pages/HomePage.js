import { usePosts } from "../context/postContext";
import { Link } from 'react-router-dom'
import { Postcard } from '../components/Postcard'

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
      <Link to="/new" className="hover:text-red-600"> Create post </Link>
      
      <div className="grid grid-cols-3 gap-2">{posts.map((post) => (
       <Postcard post={post} key={post._id}/>
      ))}
      </div>
    </div>
  );
}
