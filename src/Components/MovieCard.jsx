import React from "react";
import { IMG_URL } from "../api/movies";

export default function MovieCard() {
  return (
    <div>
      <div className="card">
        <img src={IMG_URL + movie.poster_path} alt={movie.title} />
        <p>{movie.title}</p>
      </div>
    </div>
  );
}
