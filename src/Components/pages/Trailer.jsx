import React from "react";
import { useParams } from "react-router-dom";

export default function Trailer(props) {
  const { name } = useParams();
  return (
    <div>
      {props.movies
        .filter((movie) => movie.title === name)
        .map((movie) => (
          <div key={movie.id}>
            <h4>This is the {movie.title} page</h4>
            <h5>Movie description: {movie.description}</h5>
            <p>
              Watch Trailer below: <br />
              {movie.trailer}
            </p>
          </div>
        ))}
    </div>
  );
}
