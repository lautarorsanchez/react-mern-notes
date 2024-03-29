import { usePosts } from "../context/postContext";
import { Link } from "react-router-dom";
import { Postcard } from "../components/Postcard";
import { VscGithubAlt } from "react-icons/vsc";

export function HomePage() {
  const { posts } = usePosts();

  if (posts.length === 0)
    return (
      <header className="content-center">
        <h1 className="text-4xl">Lautaro's Wall App</h1>
        <h2 className="text-l mb-2">
          ¡Share a message! Built with MongoDB, Express.js, React.js, Node.js
          and Cloudinary.
        </h2>
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
      <header className="mt-5 md:flex justify-between">
        <section>
          {" "}
          <h1 className="text-4xl">Lautaro's wall app</h1>
          <h2 className="text-l mb-2">
            ¡Share a message! Built with MongoDB, Express.js, React.js, Node.js
            and Cloudinary.
          </h2>
          <p className="mb-5"> Notes on board: {posts.length} </p>
        </section>
        <section>
          <button className="rounded px-4 mb-10 h-10  bg-orange-600 hover:bg-orange-900 ">
            <Link to="/new"> Create post </Link>
          </button>
          <button className="ml-5 mb-10 rounded px-4 h-10  bg-indigo-600 hover:bg-indigo-900 ">
            <Link
              target="_blank"
              to="https://github.com/lautarorsanchez/react-mern/tree/main"
            >
              {" "}
              <VscGithubAlt className="h-5 inline w-5"></VscGithubAlt>{" "}
              Documentation
            </Link>
          </button>
        </section>
      </header>
      <main className="grid md:grid-cols-3 gap-2">
        {posts.map((post) => (
          <Postcard post={post} key={post._id} />
        ))}
      </main>
    </>
  );
}
