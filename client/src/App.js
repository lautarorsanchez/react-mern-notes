import { HomePage, NotFoundPage, PostPage } from "./pages";
import { Route, Routes } from "react-router-dom";
import {PostProvider} from "./context/postContext";
import {Toaster} from 'react-hot-toast'

function App() {
  return (
      <div className='text-white px-10 py-10 bg-neutral-800 min-h-screen items-center'>
        <PostProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<PostPage />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Toaster />
        </PostProvider>
      </div>
  );
}

export default App;
