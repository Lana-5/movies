import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/base/header";
import Peoples from "./components/pages/people";
import Movies from "./components/pages/movies";
import MovieDetail from "./components/pages/movies/movieDetail";
import Additionally from "./components/pages/additionally";

const App = () => (
  <div className="App">
    <BrowserRouter>
      {/* это реализация маршрутизатора, которая может включать маршрутизацию в React */}
      <Provider store={store}>
        <Header />
        <Routes>
          {/* храниться логика роутинга. При клике на ссылку, этот компонент проверяет есть ли она в указанных роутах. 
          Если да, то роутер сменит URL в браузере и роут отрендерит заданный компонент. */}
          <Route path="/" element={<Movies />} />
          {/*  это условный компонент, который отображает компонент на основе определенного URL-адреса */}
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/people" element={<Peoples />} />
          <Route path="/additionally" element={<Additionally />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </div>
);

export default App;
