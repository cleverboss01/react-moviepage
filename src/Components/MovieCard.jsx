import React from "react";
import "./movies.css";

const MovieCard = ({ posterURL, title, description, rating }) => {
  return (
    <div className="container">
      <div className="card" style={{ width: "19rem" }}>
        <img
          className="card-img-top"
          src={posterURL}
          alt="movie poster"
          style={{ height: "400px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="https://www.netflix.com" className="btn btn-primary">
            See movie
          </a>
          <br />
          <small className="bg-warning"> Movie rating: {rating}/5</small>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
