import { useState } from "react";

const GENRES = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 18, name: "Drama" },
  { id: 14, name: "Fantasy" },
  { id: 27, name: "Horror" },
  { id: 10749, name: "Romance" },
];

export default function GenreFilter({ selected, onChange }) {
  function toggleGenre(id) {
    if (selected.includes(id)) {
      onChange(selected.filter((g) => g !== id));
    } else {
      onChange([...selected, id]);
    }
  }

  return (
    <div className="genre-container">
      {GENRES.map((g) => (
        <button
          key={g.id}
          className={selected.includes(g.id) ? "tag highlight" : "tag"}
          onClick={() => toggleGenre(g.id)}
        >
          {g.name}
        </button>
      ))}
    </div>
  );
}
