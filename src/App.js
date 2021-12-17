import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./component/header/header";
import Movies from "./component/movies/movies";
import MovieDetail from "./component/movies/movieDetail/movieDetail";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Header />
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </div>
);

export default App;
