import React from 'react'

export default function MovieList({ movies }) {
  return (
    <div>
        <div className='grid-container'>
            {movies.map(mvoie => (
                <MovieCard key={movies.id} movie={movie} />
            ))}
        </div>
    </div>
  )
}
