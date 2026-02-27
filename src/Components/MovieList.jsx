import { renderToPipeableStream } from "react-dom/server";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return (
      <div className="no-resutls">
        <p>No movies found.</p>
      </div>
    )
  }

  return (
    <div className="grid-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))} 
    </div>
  )
}
