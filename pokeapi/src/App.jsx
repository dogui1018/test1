import { useDispatch } from "react-redux";
import "./App.scss";
import { useEffect } from "react";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import "tailwindcss";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";
import Detail from "./pages/Detail";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <>
      <h1 className="text-[40px] text-center">포켓몬 도감</h1>
      <nav className="flex gap-[10px] justify-center">
        <Link to={"/"}>메인</Link>
        <Link to={"/detail"}>상세정보</Link>
        <Link to={"/search"}>검색</Link>
        <Link to={"/favorite"}>찜목록</Link>
      </nav>
      <main className="flex flex-wrap gap-[20px] justify-center pt-[20px]">
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/favorite"} element={<Favorite />} />
          <Route path={"/detail/:pokemon"} element={<Detail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
