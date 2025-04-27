import "./App.css";
import NavFun from "./Component/Nav/Nav";
import MovieList from "./Component/movie_list/Movie_list";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <NavFun />
      <Outlet />
    </>
  );
}

export default App;
