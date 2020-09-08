import React from "react";

export default function Movie({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <table key={movie.id}>
          <tbody>
            <tr>
              <td>
                <img
                  src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                  alt="movie poster"
                />
              </td>
              <td>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}
