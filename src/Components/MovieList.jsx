import React, { useState, useRef } from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import poster1 from "./asset/poster1.jpg";
import poster2 from "./asset/poster2.jpg";
import poster3 from "./asset/poster3.jpg";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      posterURL: poster1,
      title: "The Hill",
      rating: "4.8",
      description: "Awesome watch! You'd be glad you saw it.",
      id: 1,
    },
    {
      posterURL: poster2,
      title: "Archer",
      rating: "4.7",
      description:
        "Pretty badass. Women too can be deadly when driven by survival!",
      id: 2,
    },
    {
      posterURL: poster3,
      title: "Black Panther",
      rating: "4.5",
      description: "From Wakanda to the world! AFrica the greatest!",
      id: 3,
    },
  ]);

  const title = useRef();
  const rating = useRef();
  const description = useRef();
  const posterURL = useRef();
  const filteredMovies = useRef();

  const filteredMoviesHandler = () => {
    movies.filter((movie) => {
      if (movie.title !== filteredMovies.current.value) {
        return movie;
      }
      setMovies([movie]);
      console.log(movie);
    });
  };

  const addMovieHandler = (e) => {
    e.preventDefault();

    const movie = {
      posterURL: posterURL.current.value,
      title: title.current.value,
      rating: rating.current.value,
      description: description.current.value,
    };
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  return (
    <div className="movie-list">
      <div className="movie-list-cards" style={{ display: "flex" }}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterURL={movie.posterURL}
            title={movie.title}
            rating={movie.rating}
            description={movie.description}
          />
        ))}
      </div>{" "}
      <br />
      <div className="addMovieForm">
        <small className="form-text text-muted">Add your favorite movie.</small>
        <form onSubmit={addMovieHandler}>
          <div className="form-group">
            <label>
              Title:
              <input
                style={{ width: "400px" }}
                type="text"
                className="form-control"
                ref={title}
                placeholder="Movie Title"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Rating:
              <input
                style={{ width: "400px" }}
                type="text"
                className="form-control"
                ref={rating}
                placeholder="Movie rating"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Description:
              <input
                type="text"
                style={{ width: "400px" }}
                className="form-control"
                ref={description}
                placeholder="Add Movie description"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Poster Link:
              <input
                type="text"
                style={{ width: "400px" }}
                className="form-control"
                ref={posterURL}
                placeholder="Movie Poster Link"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-success">
            Add Movie
          </button>
        </form>
      </div>
      <div>
        <label>
          <input
            type="text"
            style={{ width: "400px" }}
            className="form-control"
            ref={filteredMovies}
            placeholder="Filter by Movie name..."
          />
        </label>
        <Filter onFilter={filteredMoviesHandler} />
      </div>
    </div>
  );
};

export default MovieList;
