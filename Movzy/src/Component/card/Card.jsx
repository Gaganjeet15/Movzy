import React from "react";
import "./Card.css";
import star from "../../assets/star.png";

const Card = ({ movie_mp, show_mp }) => {
  const data = movie_mp || show_mp;
  const isMovie = !!movie_mp;

  // Ensure we have a valid overview to prevent errors
  const overview = data.overview || "No overview available";

  return (
    <div className="movie-card">
      <div className="movie-img-container">
        <div className="rating-badge">
          <img src={star} alt="rating star" />
          <span>{Math.floor(data.vote_average * 10) / 10}</span>
        </div>

        <img
          className="poster-img"
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.original_title || data.name}
          loading="lazy"
        />

        <div className="movie-details">
          <h3 className="movie-title">{data.original_title || data.name}</h3>
          <p className="movie-year">
            {data.release_date?.slice(0, 4) || data.first_air_date?.slice(0, 4)}
          </p>
          <p className="movie-overview">
            {overview.length > 120 ? overview.slice(0, 120) + "..." : overview}
          </p>
          <a
            href={`https://www.themoviedb.org/${isMovie ? "movie" : "tv"}/${
              data.id
            }`}
            target="_blank"
            rel="noopener noreferrer"
            className="view-more-btn">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
