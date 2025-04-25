import React, { useState, useEffect } from "react";
import "./Movie_card.css";

const Movie_C = () => {
  return (
    <>
      <div className="movie-poster">
        <div className="movie-img">
          <img src="https://wallpapercave.com/wp/wp7884690.jpg" alt="" />
          <p className="summary-text">shfjvdsbhfshdgfdbsgfdhj shgfbsuhgb</p>
        </div>
        <div className="movie-release">
          <h5>2016</h5>
          <h5>Movie</h5>
        </div>

        <div className="movie-title">Bhaag Milkha Bhaag</div>
      </div>
    </>
  );
};

export default Movie_C;
