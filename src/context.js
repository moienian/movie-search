import React, { Component } from "react";

const MovieContext = React.createContext("");

class MovieProvider extends Component {
  state = {
    movies: [],
  };

  getData = (search) => {
    if (!search || search.length < 1) {
      return false;
    }
    const urlString = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`;

    try {
      fetch(urlString)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            movies: data.results,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <MovieContext.Provider value={{ ...this.state, getData: this.getData }}>
        {this.props.children}
      </MovieContext.Provider>
    );
  }
}

const MovieConsumer = MovieContext.Consumer;

export { MovieContext, MovieProvider, MovieConsumer };
