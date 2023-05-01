import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section>
      <h1>Oops! You should not be here</h1>
      <Link to="/" className="text-2xl text-center text-indigo-400">
          Go Back
      </Link>
    </section>
  )
}

