import React from "react";
import "./Pagination.css";
const Pagination = ({ currentPage, setCurrentPage, pageNumbers }) => {
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span
                onClick={() => {
                  if (currentPage > 1)
                    setCurrentPage((prevPage) => prevPage - 1);
                }}
                className="sr-only">
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
              <span
                onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
                className="sr-only">
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

export default Pagination;
