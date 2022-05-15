import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import MovieList from "./Components/MovieList";
import NotFound from "./Components/pages/NotFound";
import Trailers from "./Components/pages/Trailers";
import Trailer from "./Components/pages/Trailer";
import About from "./Components/pages/About";
import poster1 from "./Components/asset/poster1.jpg";
import poster2 from "./Components/asset/poster2.jpg";
import poster3 from "./Components/asset/poster3.jpg";

function App() {
  const [movies, setMovies] = useState([
    {
      posterURL: poster1,
      title: "The Hill",
      rating: "4.8",
      description: "Awesome watch! You'd be glad you saw it.",
      trailer: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cnJ-Uc8qQaE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
      id: 1,
    },
    {
      posterURL: poster2,
      title: "Archer",
      rating: "4.7",
      description:
        "Pretty badass. Women too can be deadly when driven by survival!",
      trailer: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pXSJKllkuk4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
      id: 2,
    },
    {
      posterURL: poster3,
      title: "Black Panther",
      rating: "4.5",
      description: "From Wakanda to the world! AFrica the greatest!",
      trailer: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dxWvtMOGAhw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
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
      return movie;
    });
  };

  const filteredRatingsHandler = () => {
    movies.filter((movie) => {
      if (movie.rating !== filteredMovies.current.value) {
        return movie;
      }
      setMovies([movie]);
      return movie;
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
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              DanielFlix
            </NavLink>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav">
                <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link active" to="/trailers">
                  Trailers
                </NavLink>
                <NavLink className="nav-link active" to="/about">
                  About
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
        <header className="container">
          <h1
            style={{
              textAlign: "center",
              color: "red",
              padding: "30px",
            }}
          >
            DANIEL'S NETFLIX
          </h1>

          <Routes>
            <Route
              path="/"
              element={
                <MovieList
                  movies={movies}
                  filteredMovies={filteredMovies}
                  filteredMoviesHandler={filteredMoviesHandler}
                  filteredRatingsHandler={filteredRatingsHandler}
                  addMovieHandler={addMovieHandler}
                  title={title}
                  rating={rating}
                  description={description}
                  posterURL={posterURL}
                />
              }
            ></Route>
            <Route path="/trailers" element={<Trailers />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/trailers/:name"
              element={<Trailer movies={movies} />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
