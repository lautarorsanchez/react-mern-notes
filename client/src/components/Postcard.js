import toast from 'react-hot-toast'
import { usePosts } from "../context/postContext";
import {useNavigate} from 'react-router-dom'
import {VscFeedback} from 'react-icons/vsc'

export const Postcard = ({ post }) => {

const {deletePost} = usePosts() 
const navigate = useNavigate()

const handleDelete = (_id) => {
    toast((t) => (
        <div className='text-white' >
            <p> You're about to delete <strong>{post.title}</strong>. Proceed?</p>
            <div className='mt-1'>
            <button className='mr-2 px-4 py-1 rounded bg-indigo-600 hover:bg-indigo-900' onClick={() => toast.dismiss(t.id)}>No</button>                
            <button className='px-4 py-1 rounded bg-red-600 hover:bg-red-900' onClick={()=> { deletePost(_id); toast.dismiss(t._id)}}>Yes</button>
            </div>
        </div>
    ),{
     style:{
        background: '#202020'
     }   
    })
}

  return (
    <div className=" bg-zinc-700 rounded-sm shadow-md shadow-black hover:bg-zinc-600" >
      <div className=" px-5 py-10 ">
        <div className="flex justify-between">
          <h2 className="text-xl"><VscFeedback className='h-5 w-5 inline mr-2'></VscFeedback >{post.title}</h2>
          <div>
          <button className="px-2 py-1 rounded mx-2 bg-red-600 hover:bg-red-900" onClick={() => handleDelete(post._id)}>
            Delete
          </button> 
          <button className="px-2 py-1 rounded bg-indigo-600 hover:bg-indigo-900" onClick={() => navigate(`/posts/${post._id}`)}>Edit</button>
          </div>
        </div>
        <p className='mb-5'>{post.description}</p>
      {post.image && <img src={post.image.url} className=' w-50 h-50 object-cover'></img>}
      </div>

    </div>
  );
};
