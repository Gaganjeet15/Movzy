import React, { useState, useEffect } from "react";
import Movie_card from "./Movie_card";
const Movie_list = () => {
  const [movie, setMovies] = useState([]);
  const Movie_API = import.meta.env.VITE_MOVIE_API;

  useEffect(() => {
    const fetchAllMovies = async () => {
      const allMovies = [];

      const res = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${Movie_API}`
      );
      const data = await res.json();
      console.log(data);

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
        <Movie_card key={movie.id} movie_mp={movie} />
      ))}
    </div>
  );
};

export default Movie_list;
