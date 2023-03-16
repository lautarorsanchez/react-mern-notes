import { Formik, Form, Field, ErrorMessage } from "formik";
import {usePosts} from '../context/postContext'
import {useNavigate, useParams, Link} from 'react-router-dom'
import * as Yup from 'yup'
import { useEffect, useState } from "react";

export function PostPage() {
  const {createPost, getPost, updatePost} = usePosts()
  const navigate = useNavigate()
  const params = useParams()
  const [post, setPost] = useState({
    title:"",
    description:""
  })
 
  useEffect( () => {
   (async () => {
    if(params.id){
      const post = await getPost(params.id)
      setPost(post)
          }
   } )()
  }, [params.id])
  
  return (
    <div className="flex items-center justify-center text-white">
      <div className="bg-zinc-700 rounded shadow-md shadow-black p-8">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-xl">Create a new post</h1>
        <Link to='/' className=" text-center text-indigo-400">Go Back</Link>
      </div>
      
      <Formik
        initialValues={post}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          description: Yup.string().required("Description is required")
        })

        }
        onSubmit={async (values, actions ) => {
if(params.id){
 await updatePost(params.id,values)
} else {
  await createPost(values);
}
          navigate("/")
        }}
        enableReinitialize
      >
        {({handleSubmit}) => (

<Form onSubmit={handleSubmit}>
  <label htmlFor="title" className="text-sm text-white block text-gray-400">Post Title</label>
<Field name="title" placeholder="Title" className="mb-2 px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"/>
<ErrorMessage component="p" name="title" className="mb-3 text-red-700 text-sm"/>
<label htmlFor="description" className="text-sm text-white block text-gray-400">Post Description</label>
<Field component="textarea" name="description" placeholder="Description" 
rows="3" className="mb-2 px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"/>
<ErrorMessage component="p" name="description" className="mb-3 text-red-700 text-sm"/>
<button type="submit" className="rounded px-2 py-2 bg-indigo-900 text-white w-full">Save</button>
</Form>
        )}
      </Formik>
      </div>
     
    </div>
  );
}
