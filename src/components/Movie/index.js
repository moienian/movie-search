import React from "react";
import "./Movie.scss";

export default function Movie({ movies }) {
  function viewMovie(id) {
    window.location.href = `https://themoviedb.org/movie/${id}`;
  }
  return (
    <div>
      {movies.map((movie) => (
        <div className="movie-item" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="movie poster"
            className="movie-poster"
          />

          <div className="movie-review">
            <div>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </div>
            <input
              type="button"
              value="View"
              className="view-btn"
              onClick={() => viewMovie(movie.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
