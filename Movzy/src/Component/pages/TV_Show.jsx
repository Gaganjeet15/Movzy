import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import Filter from "../Filter/Filter";
import Pagination from "../Pagination/Pagination";
import { tvFilterMap } from "../Filter/filterConfig";
import "./Loader.css";
const TV_Show = () => {
  const [show, setShow] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5, 6]);
  const [filterchange, setSelectedFilter] = useState("popular");
  const [loading, setLoading] = useState(false);

  function handleFilterChange(key) {
    setSelectedFilter(key);
  }
  useEffect(() => {
    const fetchShow = async () => {
      try {
        const Show_API = import.meta.env.VITE_MOVIE_API;
        setLoading(true);
        const res = await fetch(
          `https://api.themoviedb.org/3${tvFilterMap[filterchange]}?api_key=${Show_API}&page=${currentPage}`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setShow(data.results.slice(0, 15));
        setLoading(false);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    fetchShow();
  }, [currentPage, filterchange]);
  return (
    <>
      <Filter onFilterChange={handleFilterChange} type="tv" />
      {loading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="card-container">
          {show.map((show) => (
            <Card key={show.id} show_mp={show} />
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

export default TV_Show;
