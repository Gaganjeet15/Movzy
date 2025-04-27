import "./App.css";
import NavFun from "./Component/Nav/Nav";
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
