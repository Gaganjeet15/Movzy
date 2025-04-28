import React, { useState, useEffect } from "react";
import Card from "../card/Card";
const Movies = () => {
  const [movie, setMovies] = useState([]);
  const Movie_API = import.meta.env.VITE_MOVIE_API;

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${Movie_API}`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        const movie_arr = [...data.results];
        setMovies(movie_arr);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
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
