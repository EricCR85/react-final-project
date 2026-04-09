
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL, API_KEY, IMG_URL } from "../Api/config";
import Loading from "../Components/Loading";
import Navbar from "../Components/Navbar";

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovieDetails() {
      setLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
      setLoading(false);
    }

    fetchMovieDetails();
  }, [id]);

  if (loading) return <Loading />;
  if (!movie) return <div className="no-results"><p>Movie not found!</p></div>;

  return (
    <div className="movie-detail-container">
      <Navbar />
      <div className="movie-detail-content">
        <button className="btn back-btn" onClick={() => navigate(-1)}>
          &larr; Back to Movies
        </button>
        
        <div className="detail-card">
          <div className="detail-poster">
            <img src={IMG_URL + movie.poster_path} alt={movie.title} />
          </div>
          
          <div className="detail-info">
            <h1>{movie.title}</h1>
            <div className="detail-meta">
              <span className="tag highlight">{movie.release_date?.split("-")[0]}</span>
              <span className="tag highlight">{movie.runtime} min</span>
              <span className="tag highlight">Rating: {movie.vote_average?.toFixed(1)}/10</span>
            </div>
            
            <div className="detail-genres">
              {movie.genres?.map((genre) => (
                <span key={genre.id} className="tag">{genre.name}</span>
              ))}
            </div>
            
            <h3>Overview</h3>
            <p className="overview-text">{movie.overview}</p>
            
            <div className="extra-info">
              <p><strong>Status:</strong> {movie.status}</p>
              <p><strong>Language:</strong> {movie.original_language?.toUpperCase()}</p>
              <p><strong>Budget:</strong> ${movie.budget?.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 My Movie App. All rights reserved!</p>
      </footer>
    </div>
  );
}