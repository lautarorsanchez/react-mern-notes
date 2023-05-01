import { HomePage, NotFoundPage, PostPage } from "./pages";
import { Route, Routes } from "react-router-dom";
import {PostProvider} from "./context/postContext";
import {Toaster} from 'react-hot-toast'

function App() {
  return (
      <>
        <PostProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<PostPage />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Toaster />
        </PostProvider>
      </>
  );
}

export default App;
