import { Formik, Form, Field, ErrorMessage } from "formik";
import {usePosts} from '../context/postContext'
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup'

export function PostPage() {
  const {createPost} = usePosts()
  const navigate = useNavigate()
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          description: Yup.string().required("Description is required")
        })

        }
        onSubmit={async (values, actions ) => {
          await createPost(values);
          navigate("/")
        }}
      >
        {({handleSubmit}) => (

<Form onSubmit={handleSubmit}>
<Field name="title" placeholder="Title" className="mb-2 px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"/>
<ErrorMessage component="p" name="title" className="mb-3 text-red-700 text-sm"/>
<Field name="description" placeholder="Description" className="mb-2 px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"/>
<ErrorMessage component="p" name="description" className="mb-3 text-red-700 text-sm"/>
<button type="submit" className="rounded px-2 py-2 bg-indigo-900 text-white w-full">Save</button>
</Form>
        )}
      </Formik>
    </div>
  );
}
