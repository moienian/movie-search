import React, { useState, useContext } from "react";
import Movie from "../Movie";
import { MovieConsumer, MovieContext } from "../../context";
import "./MovieList.scss";

export default function MovieList() {
  const [textSearch, setTextSearch] = useState("");
  const context = useContext(MovieContext);
  const { getData } = context;

  const handleSearch = (e) => {
    setTextSearch(e.target.value);
    getData(textSearch);
  };
  return (
    <MovieConsumer>
      {(value) => {
        const { movies } = value;
        return (
          <div className="movieContainer">
            <input
              className="search"
              type="search"
              placeholder="Enter Search Term"
              value={textSearch}
              onChange={handleSearch}
            />
            <Movie movies={movies} />
          </div>
        );
      }}
    </MovieConsumer>
  );
}
