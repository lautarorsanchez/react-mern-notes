import { usePosts } from "../context/postContext";
import { Link } from "react-router-dom";
import { Postcard } from "../components/Postcard";
import { VscGithubAlt } from "react-icons/vsc";

export function HomePage() {
  const { posts } = usePosts();

  if (posts.length === 0)
    return (
      <header className="content-center">
        <h1 className="text-4xl">Lauta's notes app</h1>
        <h2 className="text-2xl mb-2">Leave your note for posterity</h2>
        <h3 className="mb-5">
          <Link
            className="shadow-md rounded px-2 py-2 bg-indigo-600 hover:bg-indigo-900"
            target="_blank"
            to="https://github.com/lautarorsanchez/react-mern/tree/main"
          >
            {" "}
            <VscGithubAlt className="h-5 inline w-5"></VscGithubAlt>{" "}
            Documentation
          </Link>
        </h3>
        <Link
          to="/new"
          className="shadow-md rounded px-9 py-2 bg-orange-600 hover:bg-orange-900"
        >
          Start{" "}
        </Link>
      </header>
    );

  return (
    <>
      <header className="mt-5 flex justify-between ">
        <span>
          {" "}
          <h1 className="text-4xl">Lauta's notes app</h1>
          <h2 className="mb-5"> Notes on board: {posts.length} </h2>
        </span>

        <button className="rounded px-4 h-10 align-middle bg-orange-600 hover:bg-orange-900 ">
          <Link to="/new"> Create post </Link>
        </button>
      </header>
      <main className="grid md:grid-cols-3 gap-2">
        {posts.map((post) => (
          <Postcard post={post} key={post._id} />
        ))}
      </main>
    </>
  );
}
