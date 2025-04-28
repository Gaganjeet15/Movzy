import React from "react";
import "./Card.css";

const Card = ({ movie_mp, show_mp }) => {
  const data = movie_mp || show_mp;
  const isMovie = !!movie_mp;

  return (
    <div className="movie-poster">
      <div className="movie-img">
        <div className="star-logo">
          <img src="src/assets/star.png" alt="Star logo" />
          <p>
            {Math.floor(data.vote_average * 10) / 10 ||
              Math.floor(data.vote_average * 10) / 10}
          </p>
        </div>
        <a
          href={`https://www.themoviedb.org/${isMovie ? "movie" : "tv"}/${
            data.id
          }`}
          target="_blank"
          rel="noopener noreferrer">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.original_title || data.name}
          />
        </a>
        <p className="summary-text">
          {data.overview.slice(0, 100) + "..." ||
            data.overview.slice(0, 100) + "..."}
        </p>
      </div>

      <div className="movie-release">
        <h5>
          {data.release_date?.slice(0, 4) || data.first_air_date?.slice(0, 4)}
        </h5>
        <h5>Movie</h5>
      </div>

      <div className="movie-title">
        {data.original_title || show_mp.original_name}
      </div>
    </div>
  );
};

export default Card;
