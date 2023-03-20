import { usePosts } from "../context/postContext";
import { Link } from 'react-router-dom'
import { Postcard } from '../components/Postcard'

export function HomePage() {
  const { posts } = usePosts();

if(posts.length === 0)
  return (
    <div className="text-white">
      <header className="mb-10">
        <h1 className="text-4xl">Lauta's notes app</h1>
        <h2 className="text-2xl">Leave your note for posterity</h2>
      </header>
      <h3 className="mb-5">No posts yet</h3>
      <Link to="/new" className="shadow-md rounded px-2 py-2 bg-indigo-900 hover:bg-indigo-700"> Create post </Link>
    </div>
  ) 

  return (
   
   <div className="text-white">
      <header>
      <h1> Posts: {posts.length} </h1>
      <Link to="/new" className="rounded px-2 py-2 bg-indigo-900 hover:bg-indigo-700 text-white "> Create post </Link>
        </header>
      
      <div className="grid grid-cols-3 gap-2">{posts.map((post) => (
       <Postcard post={post} key={post._id}/>
      ))}
      </div>
    </div>
  );
}
