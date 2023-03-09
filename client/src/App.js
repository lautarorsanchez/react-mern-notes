import { HomePage, NotFoundPage, PostPage } from "./pages";
import { Route, Routes } from "react-router-dom";
import {PostProvider} from "./context/postContext";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
        <PostProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<PostPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PostProvider>
      </div>
    </div>
  );
}

export default App;
