import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import "./Pagination.css";
const Movies = () => {
  const [movie, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5, 6]);

  const Movie_API = import.meta.env.VITE_MOVIE_API;

  function handlePage(e) {
    if (e.target.innerHTML === "Next") {
      setCurrentPage((prevPage) => prevPage + 1);
    }
    if (e.target.innerHTML === "Previous" && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${Movie_API}&page=${currentPage}`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setMovies(data.results.slice(0, 15));

        setTotalPages(data.total_pages);
        console.log(data.total_pages);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchAllMovies();
  }, [currentPage]);

  return (
    <>
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
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span onClick={handlePage} className="sr-only">
                Previous
              </span>
            </a>
          </li>
          {pageNumbers.map((pageNum) => (
            <li key={pageNum} className="page-item">
              <button
                onClick={() => setCurrentPage(pageNum)}
                className="page-link">
                {pageNum}
              </button>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" aria-label="Next">
              <span onClick={handlePage} className="sr-only">
                Next
              </span>
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Movies;
