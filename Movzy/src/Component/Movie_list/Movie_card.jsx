import React from "react";
import "./Movie_card.css";

const Movie_card = ({ movie_mp }) => {
  return (
    <div className="movie-poster">
      <div className="movie-img">
        <a
          href={`https://www.themoviedb.org/movie/${movie_mp.id}`}
          target="_blank"
          rel="noopener noreferrer">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie_mp.poster_path}`}
            alt={movie_mp.original_title}
          />
        </a>
        <p className="summary-text">
          {movie_mp.overview.slice(0, 100) + "..."}
        </p>
      </div>

      <div className="movie-release">
        <h5>{movie_mp.release_date?.slice(0, 4)}</h5>
        <h5>Movie</h5>
        <h5>
          {Math.floor(movie_mp.vote_average)}
          <img className="star-logo" src="src/assets/star.png" alt="" />
        </h5>
      </div>

      <div className="movie-title">{movie_mp.original_title}</div>
    </div>
  );
};

export default Movie_card;
