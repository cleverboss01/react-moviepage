import React from "react";
import "./movies.css";
import { NavLink } from "react-router-dom";

const MovieCard = ({ posterURL, title, description, rating }) => {
  return (
    <div className="container">
      <div className="card" style={{ width: "19rem" }}>
        <NavLink to="/trailers/:name">
          <img
            className="card-img-top"
            src={posterURL}
            alt="movie poster"
            style={{ height: "400px" }}
          />
        </NavLink>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <NavLink to="/trailers/:name" className="btn btn-primary">
            See Trailer
          </NavLink>
          <br />
          <small className="bg-warning"> Movie rating: {rating}/5</small>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
