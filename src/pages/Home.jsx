import React from 'react'
import { useState } from "react"
import { searchMovies } from "../Api/movies";

import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import SearchBar from '../Components/SearchBar';
import MovieList from '../Components/MovieList';
import Loading from '../Components/Loading';


export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(query) {
    setLoading(true);
    const data = await searchMovies(query);
    setMovies(data.results);
    setLoading(false)
  }
    return(
      <>
      <Navbar />
      <Hero />
      <SearchBar onSearch={handleSearch} />

      {loading ? <Loading /> : <MovieList movies={movies} />}
      </>
    )
  
}
