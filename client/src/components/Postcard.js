import toast from 'react-hot-toast'
import { usePosts } from "../context/postContext";
import {useNavigate} from 'react-router-dom'

export const Postcard = ({ post }) => {

const {deletePost} = usePosts() 
const navigate = useNavigate()

const handleDelete = (_id) => {
    toast((t) => (
        <div className='text-white' >
            <p> You're about to delete <strong>{_id}</strong>. Proceed?</p>
            <div className='mt-1'>
            <button className='mr-2 px-4 py-1 rounded bg-indigo-500 hover:bg-indigo-600' onClick={() => toast.dismiss(t.id)}>No</button>                
            <button className='px-4 py-1 rounded bg-red-700 hover:bg-red-600' onClick={()=> { deletePost(_id); toast.dismiss(t._id)}}>Yes</button>
            </div>
        </div>
    ),{
     style:{
        background: '#202020'
     }   
    })
}

  return (
    <div className="bg-zinc-700 rounded-sm shadow-md shadow-black hover:bg-zinc-600 " >
      <div className="px-5 py-10">
        <div className="flex justify-between">
          <h2 className="text-xl">{post.title}</h2>
          <div>
          <button className="px-2 py-1 rounded mx-2 bg-red-700 hover:bg-red-900" onClick={() => handleDelete(post._id)}>
            Delete
          </button> 
          <button className="px-2 py-1 rounded bg-indigo-700 hover:bg-indigo-900" onClick={() => navigate(`/posts/${post._id}`)}>Edit</button>
          </div>
        </div>
        <p>{post.description}</p>
      </div>
    </div>
  );
};
