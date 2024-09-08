import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/componets/LoginPages/Login";
import CommonPage from "./pages/CommonPage";
import New from "./pages/componets/news/New";
import ListNew from "./pages/componets/news/ListNew";
import TestPage from "./pages/TestPages";
import About_us from "./pages/About_us";
import Pages404 from "./pages/Pages404";
function App() {
  return (
    <Home></Home>
  );
}

export default App;
