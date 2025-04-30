import "./App.css";
import NavFun from "./Component/Nav/Nav";
import Filter from "./Component/Filter/Filter";
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
