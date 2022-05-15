import React from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";

export default function MovieList(props) {
  return (
    <div>
      <div className="movie-list">
        <div className="movie-list-cards" style={{ display: "flex" }}>
          {props.movies.map((movie) => (
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
          <small className="form-text text-muted">
            Add your favorite movie.
          </small>
          <form onSubmit={props.addMovieHandler}>
            <div className="form-group">
              <label>
                Title:
                <input
                  style={{ width: "400px" }}
                  type="text"
                  className="form-control"
                  ref={props.title}
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
                  ref={props.rating}
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
                  ref={props.description}
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
                  ref={props.posterURL}
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
              ref={props.filteredMovies}
              placeholder="Filter by name.."
            />
          </label>
          <Filter onFilter={props.filteredMoviesHandler} />
        </div>
        <div>
          <label>
            <input
              type="text"
              style={{ width: "400px" }}
              className="form-control"
              ref={props.filteredMovies}
              placeholder="Filter by rating.."
            />
          </label>
          <Filter onFilter={props.filteredRatingsHandler} />
        </div>
      </div>
    </div>
  );
}
