import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      onSearch(text);
    }
  }

  return (
    <div className="search-box">
      <input
        type="text"
        className="searchInput"
        placeholder="Search movies..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button className="searchBtn" onClick={() => onSearch(text)}>
        Search
      </button>
    </div>
  );
}
