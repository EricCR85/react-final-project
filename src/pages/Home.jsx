import React, { useEffect, useState } from 'react';
import { BASE_URL, API_KEY } from "../Api/movie";
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import GenreFilter from '../Components/GenreFilter';
import RatingFilter from '../Components/RatingFilter';
import Pagination from '../Components/Pagination';
import SearchBar from '../Components/SearchBar';
import MovieList from '../Components/MovieList';
import Loading from '../Components/Loading';
import { mapRating } from "../utils/ratingMap";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [rating, setRating] = useState("");
  const [page, setPage] = useState(1);

  async function fetchMovies() {
    setLoading(true);
    const genreString = selectedGenres.join(",");
    const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}&with_genres=${genreString}&query=${query}`;
    const res = await fetch(url);
    const data = await res.json();
    const filtered = data.results.filter(movie => {
      if (!rating) return true;
      return mapRating(movie.vote_average) === rating;
    });
    setMovies(filtered);
    setLoading(false);
  }

  async function handleSearch(text) {
    setQuery(text);
    setPage(1);
  }

  useEffect(() => {
    fetchMovies();
  }, [query, selectedGenres, rating, page]);

  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar onSearch={handleSearch} />
      <GenreFilter selected={selectedGenres} onChange={setSelectedGenres} />
      <RatingFilter rating={rating} onChange={setRating} />
      <Pagination
        page={page}
        onPrev={() => setPage(page - 1)}
        onNext={() => setPage(page + 1)}
      />
      {loading ? <Loading /> : <MovieList movies={movies} />}
    </>
  );
}
