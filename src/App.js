import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./component/header/header";
import Peoples from "./component/people/people";
import Movies from "./component/movies/movies";
import MovieDetail from "./component/movies/movieDetail/movieDetail";
import Additionally from "./component/additionally/additionally";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Header />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/people" element={<Peoples />} />
          <Route path="/additionally" element={<Additionally />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </div>
);

export default App;
