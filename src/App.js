import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./component/header/header";
import Movies from "./component/movies/movies";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Header />
      <React.StrictMode>
        <Routes>
          <Route path="/movies/" element={<Movies />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </div>
);

export default App;
