import React, { useState, useEffect } from "react";
import Card from "../card/Card";
const TV_Show = () => {
  const [show, setShow] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5, 6]);

  const Show_API = import.meta.env.VITE_MOVIE_API;

  function handlePage(e) {
    if (e.target.innerHTML === "Next") {
      setCurrentPage((prevPage) => prevPage + 1);
    }
    if (e.target.innerHTML === "Previous" && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=${Show_API}&page=${currentPage}`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setShow(data.results.slice(0, 15));
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    fetchShow();
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
        {show.map((show) => (
          <Card key={show.id} show_mp={show} />
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
          {pageNumbers.map((page_no) => (
            <li key={page_no} className="page-item">
              <button
                className="page-link"
                onClick={() => setCurrentPage(page_no)}>
                {page_no}
              </button>
            </li>
          ))}
          {/* <li className="page-item">
            <a className="page-link">1</a>
          </li>
          <li className="page-item">
            <a className="page-link">2</a>
          </li>
          <li className="page-item">
            <a className="page-link">3</a>
          </li> */}
          <li className="page-item">
            <a className="page-link" aria-label="Next">
              <span onClick={handlePage} className="sr-only">
                Next
              </span>
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>{" "}
    </>
  );
};

export default TV_Show;
