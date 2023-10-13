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
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<CommonPage><Home /></CommonPage>} />
        <Route path="/login" element={<CommonPage><Login /></CommonPage>} />
        <Route path="/news" element={<CommonPage><New></New></CommonPage>} />
        <Route path="/list_news" element={<CommonPage><ListNew></ListNew></CommonPage>} />
        <Route path="/about" element={<CommonPage><About_us></About_us>  </CommonPage>} />
        <Route path="/404" element={<CommonPage> <Pages404></Pages404> </CommonPage>} />
        <Route path="/test" element={<TestPage></TestPage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
