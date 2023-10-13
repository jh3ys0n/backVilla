import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/componets/LoginPages/Login";
import CommonPage from "./pages/CommonPage";
import New from "./pages/componets/news/New";
import ListNew from "./pages/componets/news/ListNew";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonPage><Home /></CommonPage>} />
        <Route path="/login" element={<CommonPage><Login /></CommonPage>} />
        <Route path="/news" element={<CommonPage><New></New></CommonPage>} />
        <Route path="/list_news" element={<CommonPage><ListNew></ListNew></CommonPage>} />
   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
