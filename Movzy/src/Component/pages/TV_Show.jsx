import React, { useState, useEffect } from "react";
import Card from "../card/Card";
const TV_Show = () => {
  const [show, setShow] = useState([]);
  const Show_API = import.meta.env.VITE_MOVIE_API;

  useEffect(() => {
    const fetchShow = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${Show_API}`
      );
      const data = await res.json();
      const show_arr = [...data.results];
      setShow(show_arr);
    };
    fetchShow();
  }, []);
  return (
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
  );
};

export default TV_Show;
