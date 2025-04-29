import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import "./Loader.css";
import "../Pagination/Pagination.css";
import Filter from "../Filter/Filter";
import { MoveiefilterMap } from "../Filter/filterConfig";
import Pagination from "../Pagination/Pagination";

const Movies = () => {
  const [movie, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5, 6]);
  const [filterchange, setSelectedFilter] = useState("popular");
  const [loading, setLoading] = useState(false);

  function handleFilterChange(key) {
    setSelectedFilter(key);
  }

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const Movie_API = import.meta.env.VITE_MOVIE_API;
        setLoading(true);
        const res = await fetch(
          `https://api.themoviedb.org/3${MoveiefilterMap[filterchange]}?api_key=${Movie_API}&page=${currentPage}`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setMovies(data.results.slice(0, 15));
        setLoading(false);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    fetchAllMovies();
  }, [currentPage, filterchange]);

  return (
    <>
      <Filter onFilterChange={handleFilterChange} type="movie" />
      {loading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="card-container">
          {movie.map((movie) => (
            <Card key={movie.id} movie_mp={movie} />
          ))}
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageNumbers={pageNumbers}
      />
    </>
  );
};

export default Movies;
