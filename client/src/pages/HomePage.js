import { usePosts } from "../context/postContext";
import { Link } from 'react-router-dom'
import { Postcard } from '../components/Postcard'
import {VscGithubAlt} from "react-icons/vsc"


export function HomePage() {
  const { posts } = usePosts();

if(posts.length === 0)
  return (
    <div className="text-white">
      <header className="mb-10">
        <h1 className="text-4xl">Lauta's notes app</h1>
        <h2 className="text-2xl">Leave your note for posterity</h2>
      </header>
      <h3 className="mb-5"><Link className="shadow-md rounded px-2 py-2 bg-indigo-600 hover:bg-indigo-900" target="_blank" to="https://github.com/lautarorsanchez/react-mern/tree/main"> <VscGithubAlt className="h-5 inline w-5"></VscGithubAlt> Documentation</Link></h3>
      <Link to="/new" className="shadow-md rounded px-9 py-2 bg-orange-600 hover:bg-orange-900">Start </Link>
    </div>

 
  ) 

  return (
   
   <div className="text-white">
       <Link to="/new" className="rounded px-2 py-2 bg-orange-600 hover:bg-orange-900 "> Create post </Link>
      <div className="pb-15">
      <h1 className="text-4xl">Lauta's notes app</h1>
      <h2 className="mb-5"> Notes on board: {posts.length} </h2>
      
        </div>
      
      <div className="grid grid-cols-3 gap-2">{posts.map((post) => (
        <Postcard post={post} key={post._id}/>
        ))}
      </div>
    </div>
  );
}
