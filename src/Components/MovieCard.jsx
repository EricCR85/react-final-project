import { Link } from "react-router-dom";
import { IMG_URL } from "../api/movies";

export default function MovieCard({ movie }) {
  return (
    <div className="card">
      <Link to={`/movie/${movie.id}`}>
      <img
      src={IMG_URL + movie.poster_path}
      alt={movie.title}
      />
      </Link>
      <p>{movie.title}</p>
    </div>
  )
}
