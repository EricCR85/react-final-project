import React from "react";

export default function SearchBar({ onSearch }) {
  return (
    <div>
      <input
        type="text"
        className="searchInput"
        placeholder="Search movies..."
        onKeyDown={(event) => {
          if (event.key === "Enter") onSearch(event.target.value);
        }}
      />
    </div>
  );
}
