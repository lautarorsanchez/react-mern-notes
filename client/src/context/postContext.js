import { useState, createContext, useContext } from "react";
import { getPostsRequests, createPostRequests } from "../api/posts";
import { useEffect } from "react";


//CONTEXTO
const context = createContext();

// HOOK CONTEXTO
export const usePosts = () => {
  const globalContext = useContext(context);
  return globalContext;
};

// LÓGICA CONTEXTO
export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await getPostsRequests();
    console.log(res);
    setPosts(res.data);
  };

const createPost = async (post) => {
   const res = await createPostRequests(post)
   setPosts([...posts,res.data])
} 

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <context.Provider
      value={{
        posts,
        getPosts,
        createPost
      }}
    >
      {children}
    </context.Provider>
  );
};
