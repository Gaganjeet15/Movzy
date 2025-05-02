import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import Filter from "../Filter/Filter";
import Pagination from "../Pagination/Pagination";
import { tvFilterMap } from "../Filter/filterConfig";
import "./Loader.css";
const TV_Show = () => {
  const [show, setShow] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterchange, setSelectedFilter] = useState("popular");

  function handleFilterChange(key) {
    setSelectedFilter(key);
  }

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const Show_API = import.meta.env.VITE_MOVIE_API;
        const res = await fetch(
          `https://api.themoviedb.org/3${tvFilterMap[filterchange]}?api_key=${Show_API}&page=${currentPage}`
        );
        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();
        setShow((prev) => [...prev, ...data.results]); // No slice unless needed
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchShow();
  }, [currentPage, filterchange]);

  useEffect(() => {
    setShow([]);
    setCurrentPage(1);
  }, [filterchange]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Filter onFilterChange={handleFilterChange} type="tv" />
      <div className="card-container">
        {show.map((show) => (
          <Card key={show.id} show_mp={show} />
        ))}
      </div>
    </>
  );
};

export default TV_Show;
