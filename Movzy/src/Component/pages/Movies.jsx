import React, { useState, useEffect } from "react";
import Card from "../card/Card";
const Movies = () => {
  const [movie, setMovies] = useState([]);
  const Movie_API = import.meta.env.VITE_MOVIE_API;

  useEffect(() => {
    const fetchAllMovies = async () => {
      const allMovies = [];

      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${Movie_API}`
      );
      const data = await res.json();
      allMovies.push(...data.results);

      setMovies(allMovies);
    };

    fetchAllMovies();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}>
      {movie.map((movie) => (
        <Card key={movie.id} movie_mp={movie} />
      ))}
    </div>
  );
};

export default Movies;
